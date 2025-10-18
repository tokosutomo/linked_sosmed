import "./App.css";
import WhatsappIcon from "./assets/whatsappIcon.png";
import TokoIcon from "./assets/logoToko.jpeg";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function App() {
  const AllLINK = [
    { dislay: "STOCK HP SECCOND", href: "", logo: WhatsappIcon },
    { dislay: "STOCK HP BARU", href: "", logo: WhatsappIcon },
    { dislay: "WEB TOCOPHONE", href: "", logo: TokoIcon },
    { dislay: "ADMIN [INFO LEBIH LANJUT]", href: "", logo: WhatsappIcon },
    {
      dislay: "ADMIN [ORDER ONLINE FREE ONGKIR SEKALBAR]",
      href: "",
      logo: WhatsappIcon,
    },
    { dislay: "SHOPEE", href: "", logo: "" },
    { dislay: "TOKOPEDIA", href: "", logo: "" },
    { dislay: "YOUTUBE", href: "", logo: "" },
  ];

  const ALLSOSMED = [
    { href: "", logo: FaTiktok },
    { href: "", logo: FaFacebook },
    { href: "", logo: FaInstagram },
  ];

  return (
    <section className="bg-gray-900 min-h-screen py-10">
      <div className="flex justify-center mb-14 ">
        <img src={TokoIcon} className="rounded-full w-20 h-20 border-2" />
      </div>

      <div className=" px-5 flex flex-col gap-1 ">
        {AllLINK.map((value, i) => (
          <div
            key={i}
            className="bg-gray-50 border-2 flex items-center gap-5 py-3 border-amber-500  flex-1"
          >
            <div>
              {<img src={value.logo} className="rounded-full h-20" alt="" />}
            </div>
            <p className="">{value.dislay}</p>
          </div>
        ))}
      </div>

      <div className="px-5 flex justify-center items-center gap-7 mt-10">
        {ALLSOSMED.map((value, i) => (
          <div className="text-white text-5xl cursor-pointer" key={i}>
            {<value.logo />}
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
