export const getWhatsappBaseUrl = (phoneNumber: string) => `https://wa.me/${phoneNumber}`;

export const buildWhatsappUrl = (phoneNumber: string, message: string) =>
  `${getWhatsappBaseUrl(phoneNumber)}?text=${encodeURIComponent(message)}`;
