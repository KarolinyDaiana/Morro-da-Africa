import { FaAngleDown } from "react-icons/fa6";
import HeaderDeslogado from "../components/Header";
import { Image } from "@nextui-org/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <HeaderDeslogado />
      <section className="min-h-[405px] bg-[url('/bg-inicio.png')] items-center justify-end flex flex-col">
        <div className="py-4 flex flex-col items-center">
          <p className="font-titulo text-[5.5rem] font-outline-2 text-transparent">Morro da África</p>
          <p className="font-poppins text-lg font-light -mt-4 text-branco">Imigração e Protagonismo Negro em Jaraguá do Sul</p>
          <FaAngleDown color="#F5F5F5" size={"1.5rem"} className="animate-bounce" />
        </div>
      </section>

      <section className="py-20 gap-4 w-[75%] m-auto flex flex-col items-center">
        <h3 className="font-bold text-xl">A história não contada</h3>
        <p className="text-center text-md">Lorem ipsum dolor sit amet consectetur.ate semper dignissim sit gravida porta justo. Enim a nullam urna etiam ut pretium cursus nunc. Malecursus neque amet. Viverra euismod suspendisse vulputate amet diam ridiculus sdasuuna ininasns.</p>
      </section>

      <section className="m-auto items-center flex flex-row bg-verde-header">
        <div className="items-center justify-center">
          <Image
            width={400}
            src="./grupo2.jpg"
            alt="Grupo com o Morro Boa Vista ao fundo"
            className="m-5 rounded-lg"
          />
        </div>

        <div className="">
          <p className="font-titulo text-[4rem] font-outline-2 text-transparent">NOSSO GRUPO</p>
          <p className="text-branco font-light">Composto por Brenda Giacomozzi Riedtmann, Gabrieli Lafin, Hellen Caroline de Oliveira, Karoliny Daiana Cieply e Sofia Lafin, alunas da turma 2933 da Escola Sesi de Jaraguá do Sul.</p>
        </div>

      </section>

      <section>
        
        <p>“A Lei nº 11.645, de 10 março de 2008 torna obrigatório o estudo da história e cultura indígena e afro-brasileira nos estabelecimentos de ensino fundamental e médio, porém não prevê a sua obrigatoriedade nos estabelecimentos de ensino superior para os cursos de formação de professores (licenciaturas).” </p>
      </section>
    </main>
  );
}
