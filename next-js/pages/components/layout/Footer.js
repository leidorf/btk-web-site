import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-3 mt-3 border-t border-zinc-800 text-center text-zinc-600">
      <div>
        <ul className="flex p-3 justify-around">
          <li>
            <Link
              className="flex items-center"
              href={`/`}
            >
              <img
                className="h-8 w-auto mr-1.5"
                src="images/logo.png"
              ></img>
            <span className="text-sm whitespace-pre-line text-left">Bilim ve Teknoloji{"\n"}Kulübü</span>
            </Link>
          </li>
          <li className="flex">
            <Link
              className="footer-item"
              href={`/components`}
            >
              componentler
            </Link>
            <Link
              className="footer-item"
              href={`/components`}
            >
              componentler
            </Link>
            <Link
              className="footer-item"
              href={"/vizyon_misyon"}
            >
              Vizyon ve Misyon
            </Link>
            <Link
              className="footer-item"
              href={`/components`}
            >
              componentler
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
