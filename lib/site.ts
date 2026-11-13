/**
 * ─────────────────────────────────────────────────────────────
 *  SITE SETTINGS — edit this file to update the whole website.
 * ─────────────────────────────────────────────────────────────
 *  Social links: paste your full profile URL between the quotes.
 *  Leave a link as "" (empty) and its icon is hidden automatically.
 */

export const site = {
  name: "Noor Al-Quran",
  tagline: "Online Academy",
  motto: ["Learn", "Recite", "Understand", "Live"],
  url: "https://noor-al-quran.example.com", // ← your domain, once you have one

  // WhatsApp / phone — digits only, with country code, no "+" or spaces
  whatsappNumber: "923365667460",
  phoneDisplay: "+92 336 566 7460",
  email: "", // e.g. "info@nooralquran.com"

  whatsappMessage:
    "Assalamu Alaikum! I would like to register for a class at Noor Al-Quran Online Academy.",

  social: {
    whatsapp: "https://wa.me/923365667460",
    instagram: "https://www.instagram.com/noorulquran.international/",
    facebook: "", // e.g. "https://facebook.com/nooralquran"
    youtube: "https://www.youtube.com/@siddiquenoorulquraninterna-x5g",
    tiktok: "https://www.tiktok.com/@noor.quran.academ23",
  },
};

export function waLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
