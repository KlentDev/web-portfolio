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
    href: 'https://www.instagram.com/klent.io/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/klent-micko-a-bering-a663392a0/',
    icon: FaLinkedin,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/639299559672',
    icon: FaWhatsapp,
  },
  {
    label: 'Telegram',
    href: 'https://t.me/LitolDev',
    icon: FaTelegram,
  },
  {
    label: 'Github',
    href: 'https://github.com/KlentDev',
    icon: FaGithub,
  },
]
