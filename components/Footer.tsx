import Link from 'next/link';
import { FaGithub, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import DarkModeBtn from './DarkModeBtn';

const socialLinks = [
  { icon: <FaInstagram className='w-8 h-8 ' />,className: 'hover:scale-125 hover:text-[#d62976]', url: 'https://www.instagram.com/tensaimono', alt: 'Instagram', ariaLabel: 'Instagram' },
  { icon: <FaGithub className='w-8 h-8 ' />,className: 'hover:scale-125 hover:text-[#4078c0]', url: 'https://github.com/https://www.zenta.tech', alt: 'GitHub', ariaLabel: 'GitHub' },
  { icon: <FaTiktok className='w-8 h-8 ' />,className: 'hover:scale-125 hover:text-[#ff0050]', url: 'https://www.tiktok.com/@tensai.mono', alt: 'TikTok', ariaLabel: 'TikTok' },
  { icon: <FaTwitter className='w-8 h-8 ' />,className: 'hover:scale-125 hover:text-[#00acee]', url: 'https://twitter.com/TensaiMono', alt: 'Twitter', ariaLabel: 'Twitter' },
  { icon: <FaYoutube className='w-8 h-8 ' />,className: 'hover:scale-125 hover:text-[#FF0000]', url: 'https://www.youtube.com/channel/UCZ-6HYwjvFiirJwrqpGnNVQ', alt: 'YouTube', ariaLabel: 'YouTube' }
];

const pagesLinks = [
  { name: '🤘 About', url: '/about', alt: 'About', className: 'hover:scale-125 hover:underline', ariaLabel: 'About' },
  { name: '⚒️ Project', url: '/project', alt: 'Project', className: 'hover:scale-125 hover:underline', ariaLabel: 'Project' },
  { name: '📬 Contact', url: '/contact', alt: 'Contact', className: 'hover:scale-125 hover:underline', ariaLabel: 'Contact' },
];

const FooterLink = ({ link }:any) => (
  <Link className={link.className} aria-label={link.ariaLabel} key={link.alt} href={link.url}>
    {link.name}
  </Link>
);

const SocialLink = ({ link }:any) => (
  <Link key={link.alt} className={link.className} aria-label={link.ariaLabel} href={link.url}>
    {link.icon}
  </Link>
);

const Footer = () => (
  <div className='max-w-5xl mx-auto flex items-center justify-between p-6'>
    <ul className="flex gap-4 sm:gap-8 flex-wrap items-center mt-3 text-lg  sm:mt-0">
      {pagesLinks.map((link) => <FooterLink link={link} />)}
    </ul>

    <ul className="flex gap-4 sm:gap-8 flex-wrap items-center mt-3">
      {socialLinks.map((link) => <SocialLink link={link} />)}
      <div className='hover:scale-125'>
        <DarkModeBtn key={'Dark Mode Button'} aria-label={'Dark Mode Button'}/>
      </div>
    </ul>
  </div>
);

export default Footer;