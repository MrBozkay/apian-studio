import { describe, it, expect } from "vitest";
import {
  validateContactForm,
  formatPhoneNumber,
  generateWhatsAppLink,
  type ContactFormData,
} from "./contact";

describe("Contact form validation and utilities", () => {
  describe("formatPhoneNumber", () => {
    it("should format a standard 10-digit Turkish phone number", () => {
      expect(formatPhoneNumber("5321234567")).toBe("0532 123 45 67");
    });

    it("should format an 11-digit Turkish phone starting with 0", () => {
      expect(formatPhoneNumber("05321234567")).toBe("0532 123 45 67");
    });

    it("should format phone starting with country code +90", () => {
      expect(formatPhoneNumber("+905321234567")).toBe("0532 123 45 67");
    });

    it("should strip dashes and spaces before formatting", () => {
      expect(formatPhoneNumber("0-532 123-4567")).toBe("0532 123 45 67");
    });
  });

  describe("validateContactForm", () => {
    const validPayload: ContactFormData = {
      name: "Ahmet Yılmaz",
      email: "ahmet@ornek.com",
      phone: "0532 123 45 67",
      company: "Yılmaz Lojistik",
      service: "surec-otomasyonu",
      message: "İşletmemiz için n8n otomasyonu kurmak istiyoruz.",
    };

    it("should accept valid payload with sanitized fields", () => {
      const result = validateContactForm(validPayload);
      expect(result.isValid).toBe(true);
      expect(result.errors).toEqual({});
      expect(result.data?.name).toBe("Ahmet Yılmaz");
    });

    it("should reject empty or too short name", () => {
      const result = validateContactForm({ ...validPayload, name: "A" });
      expect(result.isValid).toBe(false);
      expect(result.errors.name).toBeDefined();
    });

    it("should reject invalid email format", () => {
      const result = validateContactForm({ ...validPayload, email: "invalid-email" });
      expect(result.isValid).toBe(false);
      expect(result.errors.email).toBeDefined();
    });

    it("should reject invalid Turkish phone numbers", () => {
      const result = validateContactForm({ ...validPayload, phone: "12345" });
      expect(result.isValid).toBe(false);
      expect(result.errors.phone).toBeDefined();
    });

    it("should reject unknown service types", () => {
      const result = validateContactForm({
        ...validPayload,
        service: "unknown-package" as ContactFormData["service"],
      });
      expect(result.isValid).toBe(false);
      expect(result.errors.service).toBeDefined();
    });
  });

  describe("generateWhatsAppLink", () => {
    it("should generate a valid wa.me URL with pre-filled message", () => {
      const link = generateWhatsAppLink(
        "905555555555",
        {
          name: "Mustafa",
          company: "Apian",
          service: "ai-asistan",
          message: "Merhaba, AI asistan paketi hakkında bilgi almak istiyorum.",
        }
      );
      expect(link).toContain("https://wa.me/905555555555?text=");
      expect(link).toContain(encodeURIComponent("Mustafa"));
      expect(link).toContain(encodeURIComponent("Apian"));
    });
  });
});
