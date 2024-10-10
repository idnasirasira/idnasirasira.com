import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <span className="ml-3 text-xl font-poppins dark:text-gray-200">
            IDNASIRASIRA
          </span>
        </Link>
        <p className="text-sm text-gray-500 dark:text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2022 Idnasirasira —
          <a
            href="https://github.com/idnasirasira"
            className="text-gray-600 dark:text-gray-200 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @idnasirasira
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://www.facebook.com/makemymomproud"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="facebook"
            className="text-gray-500 hover:text-blue-500 transition duration-300 cursor-pointer dark:text-gray-200 dark:hover:text-blue-500"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.twitter.com/aingtehlieur"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter"
            className="ml-3 text-gray-500 hover:text-blue-500 transition duration-300 cursor-pointer dark:text-gray-200 dark:hover:text-blue-500"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/idnasirasira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
            className="ml-3 text-gray-500 hover:text-blue-500 transition duration-300 cursor-pointer dark:text-gray-200 dark:hover:text-blue-500"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/idnasirasira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
            className="ml-3 text-gray-500 hover:text-blue-500 transition duration-300 cursor-pointer dark:text-gray-200 dark:hover:text-blue-500"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </span>
      </div>
    </footer>
  );
}
