import "./App.css";
import WhatsappIcon from "./assets/whatsappIcon.png";
import shoopeIcon from "./assets/shoopeIcon.jpeg";
import tokopediaIcon from "./assets/tokopediaIcon.jpeg";
import youtubeIcons from "./assets/youtubeIcon.jpeg";
import TokoIcon from "./assets/logoToko.jpeg";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function App() {
  const AllLINK = [
    { dislay: "STOCK HP SECCOND", href: "", logo: WhatsappIcon },
    { dislay: "STOCK HP BARU", href: "", logo: WhatsappIcon },
    {
      dislay: "WEB TOCOPHONE",
      href: "https://www.tocophone.id/",
      logo: TokoIcon,
    },
    {
      dislay: "ADMIN [INFO LEBIH LANJUT]",
      href: "https://wa.me/6285143029006",
      logo: WhatsappIcon,
    },
    {
      dislay: "ADMIN [ORDER ONLINE FREE ONGKIR SEKALBAR]",
      href: "https://wa.me/6283808484969",
      logo: WhatsappIcon,
    },
    { dislay: "SHOPEE", href: "", logo: shoopeIcon },
    { dislay: "TOKOPEDIA", href: "", logo: tokopediaIcon },
    { dislay: "YOUTUBE", href: "", logo: youtubeIcons  },
  ];

  const ALLSOSMED = [
    {
      href: "https://www.tiktok.com/@tocophone?_t=ZS-90eqhPWmhoW&_r=1",
      logo: FaTiktok,
    },
    { href: "", logo: FaFacebook },
    { href: "", logo: FaInstagram },
  ];

  return (
    <section className="bg-gray-900 min-h-screen py-10">
      <div className="flex justify-center mb-14 ">
        <img src={TokoIcon} className="rounded-full w-40 h-40 border-2" />
      </div>

      <div className="px-5 flex flex-col gap-1 ">
        {AllLINK.map((value, i) => (
          <div
            key={i}
            className="bg-white border-2 flex items-center gap-5 py-1 px-2 border-amber-500  flex-1"
          >
            <img
              src={value.logo}
              className=" h-16 w-16 object-contain"
              alt=""
            />

            <p className="">{value.dislay}</p>
          </div>
        ))}
      </div>

      <div className="px-5 flex justify-center items-center gap-7 mt-10">
        {ALLSOSMED.map((value, i) => (
          <div className="text-white text-3xl cursor-pointer" key={i}>
            <a href={value.href}>{<value.logo />}</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
