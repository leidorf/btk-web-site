import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 mb-4">
        <ul className="flex p-2 justify-center">
          <li className="header-item">
            <Link href={`/`}>
            <img className="logo" src="images/logo.png"></img>
            </Link>
          </li>
          <li className="header-item"> 
            <Link href={"/components"}>componentler</Link>
          </li>
          <li className="header-item">Hakkında</li>
          <li className="header-item">Hakkında</li>
          <li className="header-item">Hakkında</li>
          <li className="header-item">Hakkında</li>
        </ul>
    </header>
  );
};

export default Header;
