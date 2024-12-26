import Link from "next/link";
import PageHead from "./components/layout/PageHead";
import Layout from "./components/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <PageHead />
        <div className="text-center">
          <div className="text-3xl">BTK WEB SITE</div>
          <div className="flex flex-col gap-2">
          <Link href={`/yonetim_kurulu`}>Yönetim Kurulu</Link>
          <Link href={`/contact`}>İletişim</Link>
          <Link href={`/vizyon_misyon`}>Vizon ve Misyon</Link>
          <Link href={`/about`}>Hakkımızda</Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
