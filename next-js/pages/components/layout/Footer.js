import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-2 mt-4 bg-gray-800 text-center">
      <div>
        <ul className="flex p-2 justify-center">
          <li className="header-item">
            <Link href={`/`}>Ana Sayfa</Link>
          </li>
          <li className="header-item">
            <Link href={`/components`}>componentler</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
