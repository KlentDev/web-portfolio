import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaTelegram,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/',
    icon: FaLinkedin,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/639175195896',
    icon: FaWhatsapp,
  },
  {
    label: 'Telegram',
    href: 'https://t.me/',
    icon: FaTelegram,
  },
  {
    label: 'Github',
    href: 'https://github.com/',
    icon: FaGithub,
  },
]
