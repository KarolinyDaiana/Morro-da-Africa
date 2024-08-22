import { FaAngleDown } from "react-icons/fa6";
import HeaderDeslogado from "../components/Header";
import Cultura from "./Cultura/page";
import Geografia from "./Geografia/page";
import Historia from "./Historia/page";
import Visitacao from "./Visitacao/page";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <HeaderDeslogado />
      <section className="min-h-[405px] bg-[url('/bg-inicio.png')] items-center justify-end flex flex-col">
        <div className="py-4 flex flex-col items-center">
          <p className="font-titulo text-[5rem] font-outline-2 text-transparent">Morro da África</p>
          <p className="font-poppins text-lg font-light -mt-4 text-branco">Imigração e Protagonismo Negro em Jaraguá do Sul</p>
          <FaAngleDown color="#F5F5F5" size={"1.5rem"} className="animate-bounce"/>
        </div>
          {/* <img className="w-full bg-cover fixed z-50" src="./bg-inicio.png" /> */}
      </section>
      <div>

        <Cultura />
        <Geografia />
        <Historia />
        <Visitacao />
      </div>
    </main>
  );
}
