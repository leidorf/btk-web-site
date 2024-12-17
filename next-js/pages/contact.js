import Link from "next/link";

const Contact = () => {
  return (
    <>

    <div className="flex items-center justify-center h-screen">
    <div className="text-center">
      <h4 className="text-3xl font-bold">İletişim</h4>

      <ul>
        <li className="flex items-center">
        <img src="/images/mail_logo.png" alt="Mail Logo" width={20}  height={20} className="mr-2"/>
          <Link href="mailto:celalbayarbiltek@gmail.com" className="text-blue-500 hover:underline">
            celalbayarbiltek@gmail.com
          </Link>
        </li>
        <li className="flex items-center">
          <img src="/images/Instagram_logo.png" alt="Instagram Logo" width={20}  height={20} className="mr-2"/>
          <Link href="https://www.instagram.com/manisacelalbayarbiltek" target="_blank" className="text-blue-500 hover:underline">
              manisacelalbayarbiltek
          </Link>
        </li>
        <li className="flex items-center">
        <img src="/images/Instagram_logo.png" alt="Instagram Logo" width={20}  height={20} className="mr-2"/>
          <Link href="https://www.instagram.com/poyrazrobotaksi/" target="_blank" className="text-blue-500 hover:underline">
          poyrazrobotaksi
          </Link>
        </li>
        <li className="flex items-center">
        <img src="/images/Instagram_logo.png" alt="Instagram Logo" width={20}  height={20} className="mr-2"/>
          <Link href="https://www.instagram.com/nevresrobotaksi/" target="_blank" className="text-blue-500 hover:underline">
              nevresrobotaksi
          </Link>
        </li>
        <li className="flex items-center">
        <img src="/images/Instagram_logo.png" alt="Instagram Logo" width={20}  height={20} className="mr-2"/>
          <Link href="https://www.instagram.com/karamantech/" target="_blank" className="text-blue-500 hover:underline">
              karamantech
          </Link>
        </li>
        <li className="flex items-center">
        <img src="/images/Instagram_logo.png" alt="Instagram Logo" width={20}  height={20} className="mr-2"/>
          <Link href="https://www.instagram.com/kaygusuztech/" target="_blank" className="text-blue-500 hover:underline">
              kaygusuztech
          </Link>
        </li>
      </ul>
    </div>
    </div>
    </>
  );
};

export default Contact;
