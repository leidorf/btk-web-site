import Image from "next/image";
import Layout from "./components/layout/Layout";
import PageHead from "./components/layout/PageHead";

const YonetimKurulu = () => {
  return (
    <>
      <Layout>
        <PageHead title="Yönetim Kurulu" />
        <div>
          <div
            id="yonetim-title"
            className="text-center mt-12 mb-16 text-3xl  text-[#ff7f50] "
          >
            <h1 className="font-bold">Yönetim Kurulu</h1>
          </div>
          <div
            id="yonetim-ekip"
            className="grid justify-center items-center text-center grid-cols-4 gap-6 mb-16"
          >
            <div className="flex flex-col gap-2  items-center justify-center hover:translate-y-[-8px] transition-transform duration-300">
              {
                <Image
                  src="/images/yonetim-kurulu-photo.png"
                  alt="yonetim-kurulu-image"
                  width={50}
                  height={50}
                  className="w-[30%] overflow-hidden text-center "
                />
              }
              <p className="font-semibold text-lg text-[#e0e0e0]">Türkan Doğa DURAK</p>
              <p className="font-medium text-base text-[#e0e0e0]">Başkan</p>
            </div>
            <div className="flex flex-col gap-2  items-center justify-center hover:translate-y-[-8px] transition-transform duration-300">
              <Image
                src="/images/yonetim-kurulu-photo.png"
                alt="yonetim-kurulu-image"
                width={50}
                height={50}
                className=" w-[30%] overflow-hidden text-center "
              />
              <p className="font-semibold text-lg text-[#e0e0e0]">Arda TEKGÖZ</p>
              <p className="font-medium text-base text-[#e0e0e0]">Başkan Yardımcısı</p>
            </div>
            <div className="flex flex-col gap-2  items-center justify-center hover:translate-y-[-8px] transition-transform duration-300">
              <Image
                src="/images/yonetim-kurulu-photo.png"
                alt="yonetim-kurulu-image"
                width={50}
                height={50}
                className=" w-[30%] overflow-hidden text-center "
              />
              <p className="font-semibold text-lg text-[#e0e0e0]">Nisa ŞAHİN</p>
              <p className="font-medium text-base text-[#e0e0e0]">Sekreter</p>
            </div>
            <div className="flex flex-col gap-2  items-center justify-center hover:translate-y-[-8px] transition-transform duration-300">
              <Image
                src="/images/yonetim-kurulu-photo.png"
                alt="yonetim-kurulu-image"
                width={50}
                height={50}
                className=" w-[30%] overflow-hidden text-center "
              />
              <p className="font-semibold text-lg text-[#e0e0e0]">Yunus Emre BÜKER</p>
              <p className="font-medium text-base text-[#e0e0e0]">Asil Üye</p>
            </div>
            <div className="flex flex-col gap-2  items-center justify-center hover:translate-y-[8px] transition-transform duration-300">
              <Image
                src="/images/yonetim-kurulu-photo.png"
                alt="yonetim-kurulu-image"
                width={50}
                height={50}
                className=" w-[30%] overflow-hidden text-center "
              />
              <p className="font-semibold text-lg text-[#e0e0e0]">Musa Melih TAŞKIN</p>
              <p className="font-medium text-base text-[#e0e0e0]">Asil Üye</p>
            </div>
            <div className="flex flex-col gap-2  items-center justify-center hover:translate-y-[8px] transition-transform duration-300">
              <Image
                src="/images/yonetim-kurulu-photo.png"
                alt="yonetim-kurulu-image"
                width={50}
                height={50}
                className=" w-[30%] overflow-hidden text-center "
              />
              <p className="font-semibold text-lg text-[#e0e0e0]">Hüseyin Arda AYDIN</p>
              <p className="font-medium text-base text-[#e0e0e0]">Asil Üye</p>
            </div>
            <div className="flex flex-col gap-2  items-center justify-center hover:translate-y-[8px] transition-transform duration-300">
              <Image
                src="/images/yonetim-kurulu-photo.png"
                alt="yonetim-kurulu-image"
                width={50}
                height={50}
                className=" w-[30%] overflow-hidden text-center "
              />
              <p className="font-semibold text-lg text-[#e0e0e0]">Cihan ÇETİNKAYA</p>
              <p className="font-medium text-base text-[#e0e0e0]">Yedek Üye</p>
            </div>
            <div className="flex flex-col gap-2  items-center justify-center hover:translate-y-[8px] transition-transform duration-300">
              <Image
                src="/images/yonetim-kurulu-photo.png"
                alt="yonetim-kurulu-image"
                width={50}
                height={50}
                className=" w-[30%] overflow-hidden text-center "
              />
              <p className="font-semibold text-lg text-[#e0e0e0]">Burak ÖZPAY</p>
              <p className="font-medium text-base text-[#e0e0e0]">Yedek Üye</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default YonetimKurulu;
