'use client'
import HeaderDeslogado from "@/components/Header"
import { Accordion, AccordionItem, Card, CardBody, CardHeader, DateInput, Divider, Link } from "@nextui-org/react"
import React from "react"
import { FaAngleRight, FaBus, FaLocationDot } from "react-icons/fa6";

export default function Visitacao() {
    return (
        <main className="flex min-h-screen w-full flex-col">
            <HeaderDeslogado />

            <section className="flex flex-col -mt-10">
                <p className="translate-y-[8rem] -translate-x-[18rem] z-30 text-end font-titulo text-[3rem] sm:text-[4rem] lg:text-[5.5rem] font-outline-4 text-transparent">VISITAÇÃO</p>
                <div className="flex flex-row gap-10">
                    <img className="drop-shadow-lg w-[30rem] -rotate-2 z-10 translate-x-[14rem]" src="./parque1.jpg" />
                    <img className="drop-shadow-lg w-[30rem] rotate-6 z-20 translate-x-[5rem] translate-y-[10rem]" src="./parque2.jpg" />
                </div>
            </section>

            <section className="py-20 mt-24 gap-2 sm:gap-4 w-[75%] m-auto flex flex-col">
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg sm:text-xl">Parque Linear Via Verde</h3>
                    <p className="text-sm sm:text-md">O Parque Linear Via Verde é um projeto de infraestrutura urbana em Jaraguá do Sul, Santa Catarina, que visa integrar áreas verdes e proporcionar mais opções de lazer e mobilidade para a população. Ele está situado ao longo do Rio Itapocu, abrangendo uma faixa de terreno paralela ao curso d'água. A proposta do parque é criar um espaço de convivência e atividades ao ar livre, com foco na preservação ambiental e na melhoria da qualidade de vida dos habitantes.</p>
                </div>
                <div className="bg-verde-header py-3 px-4 w-fit rounded-full">
                    <Link href="https://maps.app.goo.gl/BPDdip1iRypS6pT68">
                        <div className="flex gap-4 flex-row items-center">
                            <FaLocationDot color="#f5f5f5" size={20} className="" />
                            <p className="text-branco text-sm font-light">R. Pref. Victor Bauer - Ilha da Figueira</p>
                            <FaAngleRight color="#f5f5f5" className="duration-200 hover:translate-x-2" />
                        </div>
                    </Link>
                </div>
            </section>

            <section className="grid grid-cols-6">
                {/* //09/08 - visita técnica
8h - saída da escola
9h - palestra
10h - piquenique
10h30 - apresentação
11h - brincadeiras africanas
12h - retorno */}
                <Card className="flex flex-col justify-center w-[10rem] p-2 rounded-lg border border-slate-900 bg-[#447944]">
                    <CardHeader className="flex flex-col">
                        <h4 className="font-bold">08h00m</h4>
                        <p>Saída da escola</p>
                    </CardHeader>
                    <div className="h-[1px] bg-slate-900"></div>
                    <CardBody className="flex flex-row">
                        <FaBus size={50} className="w-full m-auto"/>
                    </CardBody>
                </Card>

                <Card className="flex flex-col justify-center w-fit p-2 rounded-lg border border-slate-900 bg-[#447944]">
                    <CardHeader className="flex flex-col">
                        <h4 className="font-bold">09h00m</h4>
                        <p>Palestra</p>
                    </CardHeader>
                    <div className="h-[1px] bg-slate-900"></div>
                    <CardBody className="flex flex-row">
                        <FaBus size={50} className="w-full m-auto"/>
                    </CardBody>
                </Card>

                <Card className="flex flex-col justify-center w-[10rem] p-2 rounded-lg border border-slate-900 bg-[#447944]">
                    <CardHeader className="flex flex-col">
                        <h4 className="font-bold">10h00m</h4>
                        <p>Piquenique</p>
                    </CardHeader>
                    <div className="h-[1px] bg-slate-900"></div>
                    <CardBody className="flex flex-row">
                        <FaBus size={50} className="w-full m-auto"/>
                    </CardBody>
                </Card>

                <Card className="flex flex-col justify-center w-[10rem] p-2 rounded-lg border border-slate-900 bg-[#447944]">
                    <CardHeader className="flex flex-col">
                        <h4 className="font-bold">10h30m</h4>
                        <p>Apresentação</p>
                    </CardHeader>
                    <div className="h-[1px] bg-slate-900"></div>
                    <CardBody className="flex flex-row">
                        <FaBus size={50} className="w-full m-auto"/>
                    </CardBody>
                </Card>

                <Card className="flex flex-col justify-center w-[10rem] p-2 rounded-lg border border-slate-900 bg-[#447944]">
                    <CardHeader className="flex flex-col">
                        <h4 className="font-bold">11h00m</h4>
                        <p>Brincadeiras africanas</p>
                    </CardHeader>
                    <div className="h-[1px] bg-slate-900"></div>
                    <CardBody className="flex flex-row">
                        <FaBus size={50} className="w-full m-auto"/>
                    </CardBody>
                </Card>

                <Card className="flex flex-col justify-center w-[10rem] p-2 rounded-lg border border-slate-900 bg-[#447944]">
                    <CardHeader className="flex flex-col">
                        <h4 className="font-bold">08h00m</h4>
                        <p>Saída da escola</p>
                    </CardHeader>
                    <div className="h-[1px] bg-slate-900"></div>
                    <CardBody className="flex flex-row">
                        <FaBus size={50} className="w-full m-auto"/>
                    </CardBody>
                </Card>

            </section>
        </main>
    )
}