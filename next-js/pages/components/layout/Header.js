import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="mb-3 border-b border-zinc-800">
      <div className="flex justify-around items-center p-3">
        <Link
          className="flex items-center"
          href={`/`}
        >
          <img
            className="h-10 md:h-12 w-auto"
            src="images/logo.png"
            alt="Logo"
          />
          <span className="text-4xl font-black ml-2">BTK</span>
        </Link>

        <button
          className="block md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        <ul className="hidden md:flex gap-6">
          <li>
            <Link
              className="header-item"
              href={"/components"}
            >
              componentler
            </Link>
          </li>
          <li>
            <Link
              className="header-item"
              href={"/contact"}
            >
              İletişim
            </Link>
          </li>
          <li>
            <Link
              className="header-item"
              href={"/vizyon_misyon"}
            >
              Vizyon ve Misyon
            </Link>
          </li>
          <li>
            <Link
              className="header-item"
              href={"/about"}
            >
             Hakkımızda
            </Link>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <ul className="flex flex-col gap-4 p-3 md:hidden border-t border-zinc-800 text-right">
          <li>
            <Link
              className="header-hamburger"
              href={"/components"}
              onClick={() => setMenuOpen(false)}
            >
              componentler
            </Link>
          </li>
          <li>
            <Link
              className="header-hamburger"
              href={"/contact"}
              onClick={() => setMenuOpen(false)}
            >
              İletişim
            </Link>
          </li>
          <li>
            <Link
              className="header-hamburger"
              href={"/vizyon_misyon"}
              onClick={() => setMenuOpen(false)}
            >
              Vizyon ve Misyon
            </Link>
          </li>
          <li>
            <Link
              className="header-hamburger"
              href={"/components"}
              onClick={() => setMenuOpen(false)}
            >
              componentler
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
