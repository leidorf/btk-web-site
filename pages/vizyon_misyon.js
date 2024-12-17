import Layout from "./components/layout/Layout";
import PageHead from "./components/layout/PageHead";

const VizyonVeMisyon = () => {
  return (
    <>
      <Layout>
        <PageHead title="Vizyon ve Misyon" />
        <div className="animate text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-8">
            <div className="bg-[#121212] rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 mb-6 p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-semibold text-[#ff7f50] py-2 md:py-3">Vizyon</h2>
              <p className="mt-2 md:mt-4 text-[#e0e0e0] px-2 md:px-6 mb-2 md:mb-4 text-sm md:text-base leading-relaxed">
                Geleceği inşa eden genç zihinler! Bilim ve Teknoloji Kulübü olarak, bilim ve teknoloji alanında yenilikçi
                fikirler üreterek toplumun yaşam kalitesini artıran çözümler geliştiren, global ölçekte rekabet edebilecek bilgi
                ve becerilere sahip bireyler yetiştirmeyi hedefliyoruz. Özgün teknolojiler geliştiren, ulusal ve uluslararası
                başarılara imza atan ve sürdürülebilir bilgi paylaşımıyla teknoloji ve mühendislik alanında öncü bir kulüp
                olarak, geleceğin mühendislerine, bilim insanlarına ve teknoloji liderlerine ilham vermeyi ve ülkemizin bilimsel
                ve teknolojik kalkınmasına öncülük etmeyi vizyonumuz olarak benimsiyoruz.
              </p>
            </div>

            <div className="bg-[#121212] rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 mb-6 p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-semibold text-[#ff7f50] py-2 md:py-3">Misyon</h2>
              <p className="mt-2 md:mt-4 text-[#e0e0e0] px-2 md:px-6 mb-2 md:mb-4 text-sm md:text-base leading-relaxed">
                Bilim ve Teknoloji Kulübü, üyelerinin teknik bilgi ve becerilerini geliştirmeyi, yenilikçi projelerle geleceğe
                yön vermeyi ve bilgi paylaşımıyla gelecek nesilleri desteklemeyi amaçlar. Bilimin ışığında ve teknolojinin
                gücüyle gençleri bilimsel araştırma ve teknolojik üretim süreçlerine dahil ederek, yaratıcı problem çözme,
                disiplinler arası düşünme ve ekip çalışması becerileri kazandırıyoruz. İnsansız hava araçları gibi ileri
                teknoloji projeleri üzerinde çalışmanın yanı sıra TÜBİTAK projeleri ve ulusal/uluslararası yarışmalara katılarak
                gençlerin potansiyellerini ortaya çıkarmalarına destek oluyoruz. Aynı zamanda, sürdürülebilir bir gelecek için
                bilimsel ve teknolojik projelerle topluma değer katmayı temel misyonumuz olarak benimsiyoruz.
              </p>
            </div>

            <div
              style={{
                backgroundImage: `url('/images/imza.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="p-6 bg-[#121212] rounded-lg shadow-md md:col-span-2 text-center py-6 md:py-8 mb-3"
            >
              <p className="italic text-base md:text-lg text-gray-200 leading-relaxed">
                "Hayatta en hakiki mürşit ilimdir, fendir."
              </p>
              <p className="text-gray-400 text-xs md:text-sm mt-2">Mustafa Kemal Atatürk</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default VizyonVeMisyon;
