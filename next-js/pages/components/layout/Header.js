import Link from "next/link";

const Header = () => {
  return (
    <header className="mb-3 border-b border-zinc-800 ">
        <ul className="flex p-3 justify-around items-center">
          <li>
            <Link className="flex items-center" href={`/`}>
              <img
                className="logo"
                src="images/logo.png"
              ></img>
              <span className="text-4xl text-decoration-none font-black">BTK</span>
            </Link>
          </li>
          <li className="flex ">
            <Link className="header-item" href={"/components"}>componentler</Link>
            <Link className="header-item" href={"/components"}>componentler</Link>
            <Link className="header-item" href={"/vizyon_misyon"}>Vizyon ve Misyon</Link>
            <Link className="header-item" href={"/components"}>componentler</Link>
            
          </li>
        </ul>
    </header>
  );
};

export default Header;
