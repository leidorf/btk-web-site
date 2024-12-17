import Layout from "./components/layout/Layout";
import PageHead from "./components/layout/PageHead";

const About = () => {
  return (
    <>
      <Layout>
        <PageHead title="Hakkımızda" />
        <div className="justify-center flex text-xs"> 
          <div className="font-bold w-60 h-60">
          <p className="text-lg text-left">Biz Kimiz?</p>
          <p className="text-justify">Bilim ve Teknoloji Kulübü 2018 yılında HFTTF altında kurulmuş, akademik danışmanlığı MCBÜ Enerji Sistemleri Mühendisliği'nden Dr. Öğr. Üyesi Özgür SOLMAZ tarafından üstlenilen bir üniversite öğrenci kulübüdür. Kulüp, geliştirdiği projeler ve düzenlediği etkinliklerle üniversite için öncü bir kulüp olarak sayılmaktadır.</p>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default About;
