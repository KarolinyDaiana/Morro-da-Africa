import { FaAngleDown } from "react-icons/fa6";
import HeaderDeslogado from "../components/Header";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function Home() {
  return (
    <body className="flex min-h-screen w-full flex-col bg-gray-100">
      <HeaderDeslogado />
      <section className="min-h-[300px] sm:min-h-[405px] bg-[url('/bg-inicio.png')] items-center justify-end flex flex-col">
        <div className="py-4 flex flex-col items-center">
          <p className="font-titulo text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] font-outline-2 text-transparent">Morro da África</p>
          <p className="px-8 text-center font-poppins sm:text-lg font-light  text-branco">Imigração e Protagonismo Negro em Jaraguá do Sul</p>
          <FaAngleDown color="#F5F5F5" size={"1.5rem"} className="animate-bounce" />
        </div>
      </section>
      {/* 
      <section className="py-20 gap-2 sm:gap-4 w-[75%] m-auto flex flex-col items-center">
        <h3 className="font-bold text-lg sm:text-xl">A história não contada</h3>
        <p className="text-center text-sm sm:text-md">Lorem ipsum dolor sit amet consectetur.ate semper dignissim sit gravida porta justo. Enim a nullam urna etiam ut pretium cursus nunc. Malecursus neque amet. Viverra euismod suspendisse vulputate amet diam ridiculus sdasuuna ininasns.</p>
      </section> */}

      <section className="m-auto items-center flex flex-col md:flex-col-reverse lg:flex-row py-8 gap-4 px-8 sm:px-36">
        <div className="items-center justify-center w-full lg:w-4/5">
          <img
            src="./grupo2.jpg"
            alt="Grupo com o Morro Boa Vista ao fundo"
            className="rounded-xl w-full"
          />
        </div>

        <div className="flex flex-col text-justify">
          <p className="font-titulo text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] font-outline-4 text-transparent">NOSSO GRUPO</p>
          <p className="text-preto -mt-2 text-sm sm:text-md">Composto por Brenda Giacomozzi Riedtmann, Gabrieli Lafin, Hellen Caroline de Oliveira, Karoliny Daiana Cieply e Sofia Lafin, alunas da turma 2933 da Escola Sesi de Jaraguá do Sul.</p>
        </div>

      </section>

      <div className="h-[2px] bg-slate-400 md:flex hidden lg:hidden"/>

      <section className="text-preto px-8 sm:px-36 py-8">
        <Card className="py-4 border-2 border-slate-800 rounded-lg bg-gray-300 bg-opacity-80">
          <CardHeader className="pb-2 pt-2 px-6 flex-col items-start">
            <p className="text-lg sm:text-xl uppercase font-bold">Lei nº 11.645</p>
            <small className="text-xs sm:text-sm">10 de março de 2008</small>
            {/* <h4 className="font-bold text-large">Frontend Radio</h4> */}
          </CardHeader>
          <div className="bg-slate-500 h-[2px]" />
          <CardBody className="overflow-visible py-4 px-6">
            <p className="font-medium text-sm sm:text-md">“A Lei nº 11.645, de 10 março de 2008 torna obrigatório o estudo da história e cultura indígena e afro-brasileira nos estabelecimentos de ensino fundamental e médio, porém não prevê a sua obrigatoriedade nos estabelecimentos de ensino superior para os cursos de formação de professores (licenciaturas).” </p>
          </CardBody>
        </Card>
      </section>
    </body>
  );
}
