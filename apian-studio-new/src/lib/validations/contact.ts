export type ServiceOption =
  | "ai-asistan"
  | "surec-otomasyonu"
  | "ai-website"
  | "diger";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: ServiceOption;
  message?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  data?: ContactFormData;
}

const VALID_SERVICES: ServiceOption[] = [
  "ai-asistan",
  "surec-otomasyonu",
  "ai-website",
  "diger",
];

export function formatPhoneNumber(rawPhone: string): string {
  // Remove non-digits
  const digits = rawPhone.replace(/\D/g, "");

  let core = digits;
  if (digits.startsWith("90") && digits.length === 12) {
    core = digits.slice(2);
  } else if (digits.startsWith("0") && digits.length === 11) {
    core = digits.slice(1);
  }

  if (core.length === 10) {
    const area = core.slice(0, 3);
    const p1 = core.slice(3, 6);
    const p2 = core.slice(6, 8);
    const p3 = core.slice(8, 10);
    return `0${area} ${p1} ${p2} ${p3}`;
  }

  return rawPhone.trim();
}

export function validateContactForm(data: Partial<ContactFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  const name = data.name?.trim() || "";
  if (!name || name.length < 2) {
    errors.name = "Lütfen adınızı ve soyadınızı giriniz (en az 2 karakter).";
  }

  const email = data.email?.trim() || "";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = "Lütfen geçerli bir e-posta adresi giriniz.";
  }

  const rawPhone = data.phone?.trim() || "";
  const digits = rawPhone.replace(/\D/g, "");
  // Turkish mobile/landline numbers typically 10 digits without leading 0/90, or 11 with 0, or 12 with 90
  const isValidPhone =
    (digits.length === 10 && digits.startsWith("5")) ||
    (digits.length === 11 && digits.startsWith("05")) ||
    (digits.length === 12 && digits.startsWith("905"));

  if (!isValidPhone) {
    errors.phone = "Lütfen geçerli bir telefon numarası giriniz (Örn: 05xx xxx xx xx).";
  }

  const service = data.service as ServiceOption;
  if (!service || !VALID_SERVICES.includes(service)) {
    errors.service = "Lütfen ilgilendiğiniz hizmeti seçiniz.";
  }

  const isValid = Object.keys(errors).length === 0;

  if (!isValid) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    errors: {},
    data: {
      name,
      email,
      phone: formatPhoneNumber(rawPhone),
      company: data.company?.trim(),
      service,
      message: data.message?.trim(),
    },
  };
}

export function generateWhatsAppLink(
  targetPhone: string,
  details: {
    name: string;
    company?: string;
    service: string;
    message?: string;
  }
): string {
  const cleanTarget = targetPhone.replace(/\D/g, "");
  const lines = [
    `Merhaba Apian Studio, web sitenizden ulaşıyorum.`,
    `İsim: ${details.name}`,
    details.company ? `Firma: ${details.company}` : null,
    `İlgilenilen Hizmet: ${details.service}`,
    details.message ? `Mesaj: ${details.message}` : null,
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${cleanTarget}?text=${text}`;
}
