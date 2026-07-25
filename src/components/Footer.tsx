import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="py-6 text-center border-t border-secondary bg-white/10 backdrop-blur-none">
      <span>Copyright © {year} THY LYDA</span>
      <div className="flex gap-3 mt-2 justify-center">
        <a href='https://github.com/lidathy999'>
          <GitHubIcon fontSize='large' />
        </a>
        <a href="https://gitlab.com/Thylida">
          <Image
            width={32}
            height={32}
            src="/images/gitlab.png"
            alt="gitlab"
          />
        </a>
        <a href="https://www.linkedin.com/in/lyda-thy-475381229">
          <Image
            width={32}
            height={32}
            src="/images/linkedin.png"
            alt="linkedIn"
          />
        </a>
      </div>
    </div>
  );
};
