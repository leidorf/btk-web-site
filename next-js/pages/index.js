import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Link from "next/link";
import PageHead from "./components/layout/PageHead";

export default function Home() {

  return (
    <>
    <PageHead/>
    <Header/>
    <div className="text-center">
    <div className="text-3xl">
      BTK WEB SITE
    </div>
    <Link href={`/components`}>componentler</Link>
    </div>
    <Footer/>
    </>
  );
}
