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
          <Link href={`/components`}>componentler</Link>
        </div>
      </Layout>
    </>
  );
}
