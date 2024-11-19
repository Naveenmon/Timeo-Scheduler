import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[rgb(37,99,235)] to-[rgb(17,49,140)] text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Timeo</span>. All rights reserved.
        </p>
        <div className="text-sm">
          Created by <span className="font-semibold">Naveen</span>
        </div>
        <div className="flex space-x-4 text-xl">
          <a href="https://github.com/Naveenmon" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/naveenmon/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}