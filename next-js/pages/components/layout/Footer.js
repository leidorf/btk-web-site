import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-4 mt-3 border-t border-zinc-800 text-zinc-600 text-xs">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-around px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-start mb-4 md:mb-0">
          <Link
            className="flex flex-col items-center md:flex-row text-center md:text-left"
            href={`/`}
          >
            <img
              className="h-8 w-auto md:h-10 mb-2 md:mb-0 md:mr-4"
              src="images/logo.png"
              alt="Logo"
            />
            <span className="text-xs leading-snug">
              Bilim ve Teknoloji
              <br />
              Kulübü
            </span>
          </Link>
        </div>

        <ul className="flex flex-col items-center gap-3 md:flex-row md:gap-6">
          <li>
            <Link
              className="footer-item"
              href={`/components`}
            >
              componentler
            </Link>
          </li>
          <li>
            <Link
              className="footer-item"
              href={`/contact`}
            >
              İletişim
            </Link>
          </li>
          <li>
            <Link
              className="footer-item"
              href={"/vizyon_misyon"}
            >
              Vizyon ve Misyon
            </Link>
          </li>
          <li>
            <Link
              className="footer-item"
              href={`/about`}
            >
              Hakkımızda
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
