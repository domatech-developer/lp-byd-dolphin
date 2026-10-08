const WHATSAPP_NUMBER = "554135183170";
const WHATSAPP_MESSAGE = "Olá! Tenho interesse em solicitar uma cotação da linha BYD Dolphin.";

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
