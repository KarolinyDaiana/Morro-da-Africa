import HeaderDeslogado from "@/components/Header"
import React from "react"

export default function Cultura() {
    return (
        <body className="flex min-h-screen w-full flex-col">
            <HeaderDeslogado />

            <section className="flex flex-col items-center">
                <img className="h-[340px] w-full object-cover opacity-80" src="./abayomi2.jpg" />
                <p className="-mt-36 z-30 font-titulo text-[3rem] sm:text-[4rem] lg:text-[5.5rem] font-outline-2 text-verde-header/50">CULTURA</p>
            </section>

            <section className="py-16 lg:py-0 mt-8 lg:mt-24 flex flex-col gap-4 pb-12 px-8 sm:px-36">
                <h3 className="font-bold text-lg sm:text-xl">Profe. Luis Fernando Olegar</h3>
                <p className="text-sm sm:text-base">Presidente do movimento MOCONEVI, falou sobre o assunto durante a visita ao Parque Via Verde.</p>

            </section>

            <h3 className="font-black w-full px-8 sm:px-36 uppercase pt-12 text-xl sm:text-2xl">Brincadeiras</h3>

            <section className="gap-4 pb-12 pt-4 flex flex-col py-16 lg:py-0 mt-8 px-8 sm:px-36">
                <h3 className="font-bold text-lg sm:text-xl">Labirinto</h3>
                <p className="text-sm sm:text-base">Originária de Moçambique,na adaptação do jogo, os alunos desenham um labirinto no chão e se dividem em dois grupos. Um representante de cada grupo compete em "par ou ímpar" ou "pedra, papel e tesoura". Cada vitória permite que o grupo avance um passo no labirinto. O primeiro grupo a chegar ao final do labirinto vence.</p>
                <div className="flex flex-wrap gap-6">
                    <div className="p-2 bg-opacity-30 bg-green-800 rounded-lg w-fit">
                        <img src="./labirinto1.jpg" className="w-[20rem] rounded-lg" />
                        <p className="text-slate-600 text-sm sm:text-base">Arquivo pessoal.</p>
                    </div>

                    <div className="p-2 bg-opacity-30 bg-green-800 rounded-lg w-fit">
                        <img src="./labirinto2.jpg" className="w-[20rem] rounded-lg" />
                        <p className="text-slate-600 text-sm sm:text-base">Arquivo pessoal.</p>
                    </div>

                    <div className="p-2 bg-opacity-30 bg-green-800 rounded-lg w-fit">
                        <img src="./labirinto3.jpg" className="w-[20rem] rounded-lg" />
                        <p className="text-slate-600 text-sm sm:text-base">Arquivo pessoal.</p>
                    </div>
                </div>
            </section>

            <section className="gap-2 pt-4 flex flex-col py-16 lg:py-0 mt-8 lg:mt-12 px-8 sm:px-36">
                <h3 className="font-bold text-lg sm:text-xl">Terra-mar</h3>
                <p className="text-sm sm:text-base">Originária de Moçambique, no Brasil, há um jogo semelhante chamado “Vivo ou morto”. Uma linha é desenhada no chão com os lados marcados como “terra” e “mar”. As crianças começam no lado da terra e devem pular para o lado correspondente ao comando que ouviram: “mar” ou “terra”. Quem pular para o lado errado é eliminado, e o último a permanecer no jogo é o vencedor.</p>
            </section>

            <section className="gap-2 pt-4 flex flex-col py-16 lg:py-0 mt-8 lg:mt-12 px-8 sm:px-36">
                <h3 className="font-bold text-lg sm:text-xl">Reloginho</h3>
                <p className="text-sm sm:text-base">Originária da Nigéria, a brincadeira Pula Feijão, que aqui no Brasil é conhecida como "reloginho", uma criança gira uma corda com um saco de feijão amarrado na ponta, que pode ser substituído por outro objeto,  enquanto as outras, dispostas em círculo, pulam a corda para não serem atingidas.</p>
                <div className="flex flex-wrap gap-6">
                    <div className="p-2 bg-opacity-30 bg-green-800 rounded-lg w-fit">
                        <img src="./terramar.jpeg" className="w-[20rem] rounded-lg" />
                        <p className="text-slate-600 text-sm sm:text-base">Arquivo pessoal.</p>
                    </div>
                </div>
            </section>

            <section className="gap-2 pt-4 flex flex-col py-16 lg:py-0 mt-8 lg:mt-12 px-8 sm:px-36">
                <h3 className="font-bold text-lg sm:text-xl">Acarajé</h3>
                <p className="text-sm sm:text-base">O que comemos era um bolinho de cuscuz com recheio de vatapá e camarão, mesmo sendo adaptado, ele retratava a culinária africana. Foi uma experiência interessante para a imersão na cultura. A massa original é feita de feijão-fradinho, frito em óleo de dendê, mas foi adaptado para a cultura sulista, com o feijão sendo substituído pelo cuscuz.</p>
                <div className="flex flex-wrap gap-6">
                    <div className="p-2 bg-opacity-30 bg-green-800 rounded-lg w-fit">
                        <img src="./acaraje.jpg" className="w-[20rem] rounded-lg" />
                        <p className="text-slate-600 text-sm sm:text-base">Arquivo pessoal.</p>
                    </div>
                    <div className="p-2 bg-opacity-30 bg-green-800 rounded-lg w-fit">
                        <img src="./acaraje2.jpg" className="w-[20rem] rounded-lg" />
                        <p className="text-slate-600 text-sm sm:text-base">Arquivo pessoal.</p>
                    </div>
                </div>
            </section>

            <section className="gap-2 pt-4 flex flex-col py-16 lg:py-0 mt-8 lg:mt-12 px-8 sm:px-36">
                <h3 className="font-bold text-lg sm:text-xl">Abayomi</h3>
                <p className="text-sm sm:text-base">A Abayomi era um boneca feita de retalhos de vestidos das mães afro-descendentes. Elas cortavam pedaços de seus vestidos e criavam essas bonecas para que seus filhos pudessem brincar enquanto estavam nos navios negreiros. Durante a visitação, cada aluno fez uma boneca utilizando-se de retalhos de tecidos nas cores preta e laranja.</p>
                <div className="flex flex-wrap gap-6">
                    <div className="p-2 bg-opacity-30 bg-green-800 rounded-lg w-fit">
                        <img src="./abayomi1.jpg" className="w-[20rem] rounded-lg" />
                        <p className="text-slate-600 text-sm sm:text-base">Arquivo pessoal.</p>
                    </div>
                    <div className="p-2 bg-opacity-30 bg-green-800 rounded-lg w-fit">
                        <img src="./abayomi2.jpg" className="w-[20rem] rounded-lg" />
                        <p className="text-slate-600 text-sm sm:text-base">Arquivo pessoal.</p>
                    </div>
                    <div className="p-2 bg-opacity-30 bg-green-800 rounded-lg w-fit">
                        <img src="./abayomi3.jpg" className="w-[20rem] rounded-lg" />
                        <p className="text-slate-600 text-sm sm:text-base">Arquivo pessoal.</p>
                    </div>
                    <div className="p-2 bg-opacity-30 bg-green-800 rounded-lg w-fit">
                        <img src="./abayomi4.jpg" className="w-[20rem] rounded-lg" />
                        <p className="text-slate-600 text-sm sm:text-base">Arquivo pessoal.</p>
                    </div>
                </div>
            </section>
        </body>
    )
}