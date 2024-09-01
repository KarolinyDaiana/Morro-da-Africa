'use client'
import HeaderDeslogado from "@/components/Header"
import { Accordion, AccordionItem, Card, CardBody, CardHeader, DateInput, Divider, Link } from "@nextui-org/react"
import React from "react"
import { FaAngleRight, FaBus, FaLocationDot } from "react-icons/fa6";

export default function Visitacao() {
    return (
        <main className="flex min-h-screen w-full flex-col">
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
                <img className="h-[340px] w-full object-cover opacity-80" src="./parque2.jpg" />
                <p className="-mt-36 z-30 font-titulo text-[3rem] sm:text-[4rem] lg:text-[5.5rem] font-outline-2 text-verde-header/50">VISITAÇÃO</p>
            </section>

            <section className="py-16 lg:py-0 mt-8 lg:mt-24 flex flex-col gap-4 pb-12 px-8 sm:px-36">
                <p className="text-sm text-justify sm:text-md">No dia 09 de agosto de 2024 realizamos uma visita ao Parque Linear Via Verde, com vista para o Morro Boa Vista. A visita teve como objetivo explorar a cultura do osnoansdoans</p>
                {/* //09/08 - visita técnica
8h - saída da escola
9h - palestra
10h - piquenique
10h30 - apresentação
11h - brincadeiras africanas
12h - retorno */}
                <div className="flex flex-wrap gap-4">
                    <div className="flex flex-col gap-2 w-full sm:w-[10rem] border-[2px] rounded-lg p-2 border-verde-header">
                        <h4 className="font-bold text-sm sm:text-md">08h00m</h4>
                        <div className="h-[2px] bg-verde-header" />
                        <p className="text-sm sm:text-md">Saída da escola</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full sm:w-[10rem] border-[2px] rounded-lg p-2 border-verde-header">
                        <h4 className="font-bold text-sm sm:text-md">09h00m</h4>
                        <div className="h-[2px] bg-verde-header" />
                        <p className="text-sm sm:text-md">Palestra</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full sm:w-[10rem] border-[2px] rounded-lg p-2 border-verde-header">
                        <h4 className="font-bold text-sm sm:text-md">10h00m</h4>
                        <div className="h-[2px] bg-verde-header" />
                        <p className="text-sm sm:text-md">Piquenique</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full sm:w-[10rem] border-[2px] rounded-lg p-2 border-verde-header">
                        <h4 className="font-bold text-sm sm:text-md">10h30m</h4>
                        <div className="h-[2px] bg-verde-header" />
                        <p className="text-sm sm:text-md">Apresentação</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full sm:w-[10rem] border-[2px] rounded-lg p-2 border-verde-header">
                        <h4 className="font-bold text-sm sm:text-md">11h00m</h4>
                        <div className="h-[2px] bg-verde-header" />
                        <p className="text-sm sm:text-md">Brincadeiras</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full sm:w-[10rem] border-[2px] rounded-lg p-2 border-verde-header">
                        <h4 className="font-bold text-sm sm:text-md">12h00m</h4>
                        <div className="h-[2px] bg-verde-header" />
                        <p className="text-sm sm:text-md">Retorno à escola</p>
                    </div>
                </div>
            </section>

            <section className="pt-6 pb-12 lg:py-0 lg:pb-20 lg:mt-24 gap-2 sm:gap-4 px-8 sm:px-36 m-auto flex flex-col">
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg sm:text-xl">Parque Linear Via Verde</h3>
                    <p className="text-sm text-justify sm:text-md">O Parque Linear Via Verde é um projeto de infraestrutura urbana em Jaraguá do Sul, Santa Catarina, que visa integrar áreas verdes e proporcionar mais opções de lazer e mobilidade para a população. Ele está situado ao longo do Rio Itapocu, abrangendo uma faixa de terreno paralela ao curso d'água. A proposta do parque é criar um espaço de convivência e atividades ao ar livre, com foco na preservação ambiental e na melhoria da qualidade de vida dos habitantes.</p>
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

            {/* <p> parque linear Via Verde com vistas para o Morro da Boa Vista e os objetivos e a justificativa (importância) do trabalho.</p> */}

        </main>
    )
}