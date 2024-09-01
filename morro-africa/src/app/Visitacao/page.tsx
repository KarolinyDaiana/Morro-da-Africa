import HeaderDeslogado from "@/components/Header"
import Link from "next/link";
import React from "react"
import { FaAngleRight, FaLocationDot } from "react-icons/fa6";

export default function Visitacao() {
    return (
        <body className="flex min-h-screen w-full flex-col">
            <HeaderDeslogado />

            <section className="flex flex-col items-center">
                {/* <div className="flex flex-col gap-10">
                    <div className="p-4 border-slate-900 border w-1/2 rounded-lg">
                        <img className="rounded-lg w-[50rem]" src="./parque1.jpg" />
                    </div>
                    <div className="p-4 border-slate-900 border w-1/2 rounded-lg">
                        <img className="rounded-lg w-[50rem]" src="./parque2.jpg" />
                    </div>
                </div> */}
                <img className="h-[340px] w-full object-cover opacity-80" src="./parque1.jpg" />
                <p className="-mt-36 z-30 font-titulo text-[3rem] sm:text-[4rem] lg:text-[5.5rem] font-outline-2 text-verde-header/50">VISITAÇÃO</p>
            </section>

            <section className="py-16 lg:py-0 mt-8 lg:mt-24 flex flex-col gap-4 pb-12 px-8 sm:px-36">
                <p className="text-sm text-justify sm:text-base">No dia 09 de agosto de 2024 realizamos uma visita ao Parque Linear Via Verde, com vista para o Morro Boa Vista.A visita, juntamente da pesquisa para a realização deste trabalho para aprofundar os conhecimentos que temos sobre a cidade em que moramos, assim podendo entender o processo e acontecimentos que levaram à ser como é atualmente.</p>
                {/* //09/08 - visita técnica
8h - saída da escola
9h - palestra
10h - piquenique
10h30 - apresentação
11h - brincadeiras africanas
12h - retorno */}
                <div className="flex flex-wrap gap-4">
                    <div className="flex flex-col gap-2 w-full sm:w-[10rem] border-[2px] rounded-lg p-2 border-verde-header">
                        <h4 className="font-bold text-sm sm:text-base">08h00m</h4>
                        <div className="h-[2px] bg-verde-header" />
                        <p className="text-sm sm:text-base">Saída da escola</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full sm:w-[10rem] border-[2px] rounded-lg p-2 border-verde-header">
                        <h4 className="font-bold text-sm sm:text-base">09h00m</h4>
                        <div className="h-[2px] bg-verde-header" />
                        <p className="text-sm sm:text-base">Palestra</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full sm:w-[10rem] border-[2px] rounded-lg p-2 border-verde-header">
                        <h4 className="font-bold text-sm sm:text-base">10h00m</h4>
                        <div className="h-[2px] bg-verde-header" />
                        <p className="text-sm sm:text-base">Piquenique</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full sm:w-[10rem] border-[2px] rounded-lg p-2 border-verde-header">
                        <h4 className="font-bold text-sm sm:text-base">10h30m</h4>
                        <div className="h-[2px] bg-verde-header" />
                        <p className="text-sm sm:text-base">Apresentação</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full sm:w-[10rem] border-[2px] rounded-lg p-2 border-verde-header">
                        <h4 className="font-bold text-sm sm:text-base">11h00m</h4>
                        <div className="h-[2px] bg-verde-header" />
                        <p className="text-sm sm:text-base">Brincadeiras</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full sm:w-[10rem] border-[2px] rounded-lg p-2 border-verde-header">
                        <h4 className="font-bold text-sm sm:text-base">12h00m</h4>
                        <div className="h-[2px] bg-verde-header" />
                        <p className="text-sm sm:text-base">Retorno à escola</p>
                    </div>
                </div>
            </section>

            <section className="pt-6 pb-12 lg:py-0 lg:pb-12 lg:mt-12 gap-2 sm:gap-4 px-8 sm:px-36 m-auto flex flex-col">
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg sm:text-xl">Parque Linear Via Verde</h3>
                    <p className="text-sm text-justify sm:text-base">O Parque Linear Via Verde é um projeto de infraestrutura urbana em Jaraguá do Sul, Santa Catarina, que visa integrar áreas verdes e proporcionar mais opções de lazer e mobilidade para a população. Ele está situado ao longo do Rio Itapocu, abrangendo uma faixa de terreno paralela ao curso d&aposágua. A proposta do parque é criar um espaço de convivência e atividades ao ar livre, com foco na preservação ambiental e na melhoria da qualidade de vida dos habitantes.</p>
                </div>
                <div className="bg-verde-header py-3 px-4 w-fit rounded-full">
                    <Link href="https://maps.app.goo.gl/BPDdip1iRypS6pT68">
                        <div className="flex gap-2 sm:gap-4 flex-row items-center">
                            <FaLocationDot color="#f5f5f5" size={20} className="" />
                            <p className="text-branco text-xs sm:text-sm font-light line-clamp-1">R. Pref. Victor Bauer - Ilha da Figueira</p>
                            <FaAngleRight color="#f5f5f5" className="duration-200 hover:translate-x-2" />
                        </div>
                    </Link>
                </div>
            </section>
            
            <section className="gap-2 pt-4 flex flex-col py-16 lg:py-0 mt-8 lg:mt-12 mb-16 px-8 sm:px-36">
                <h3 className="font-bold text-lg sm:text-xl">Fotos extras</h3>

                <div className="flex flex-wrap gap-6">
                    <div className="p-2 bg-opacity-30 bg-green-800 rounded-lg w-fit">
                        <img src="./pessoas.jpg" className="w-[20rem] rounded-lg" />
                        <p className="text-slate-600 text-sm sm:text-base">Arquivo pessoal.</p>
                    </div>

                    <div className="p-2 bg-opacity-30 bg-green-800 rounded-lg w-fit">
                        <img src="./pessoas2.jpg" className="w-[20rem] rounded-lg" />
                        <p className="text-slate-600 text-sm sm:text-base">Arquivo pessoal.</p>
                    </div>

                    <div className="p-2 bg-opacity-30 bg-green-800 rounded-lg w-fit">
                        <img src="./fofocando.jpg" className="w-[20rem] rounded-lg" />
                        <p className="text-slate-600 text-sm sm:text-base">Arquivo pessoal.</p>
                    </div>

                    <div className="p-2 bg-opacity-30 bg-green-800 rounded-lg w-fit">
                        <img src="./adrianofofocando.jpg" className="w-[20rem] rounded-lg" />
                        <p className="text-slate-600 text-sm sm:text-base">Arquivo pessoal.</p>
                    </div>
                </div>
            </section>

        </body>
    )
}