const WHATSAPP_NUMBER = "96181741005";

/** Click-to-chat link that opens WhatsApp with a pre-filled, URL-encoded message. */
export const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
