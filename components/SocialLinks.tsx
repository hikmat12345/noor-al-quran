import { site } from "@/lib/site";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "./Icons";

const items = [
  { key: "whatsapp", label: "WhatsApp", Icon: WhatsAppIcon },
  { key: "instagram", label: "Instagram", Icon: InstagramIcon },
  { key: "facebook", label: "Facebook", Icon: FacebookIcon },
  { key: "youtube", label: "YouTube", Icon: YouTubeIcon },
  { key: "tiktok", label: "TikTok", Icon: TikTokIcon },
] as const;

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`social ${className}`}>
      {items
        .filter(({ key }) => site.social[key])
        .map(({ key, label, Icon }) => (
          <li key={key}>
            <a
              href={site.social[key]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className={`social-${key}`}
            >
              <Icon />
            </a>
          </li>
        ))}
    </ul>
  );
}
