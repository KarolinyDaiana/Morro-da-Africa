import HeaderDeslogado from "@/components/Header"
import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export default function Geografia() {
    return (
        <main className="flex min-h-screen w-full flex-col">
            <HeaderDeslogado />
            <section className="relative w-full border-b-2 pt-20 flex flex-col items-center border-verde-header">
                <p className="w-full text-center absolute top-18 left-1/2 transform -translate-x-1/2 font-titulo text-[4rem] grande:text-[5.5rem] font-outline-1 text-transparent">Geografia do morro</p>
                <div className="w-[90%] m-auto">
                    <img src="./morro.svg" className="w-full" alt="Descrição da imagem" />
                </div>
            </section>

            <section className="gap-12 flex flex-col">
                <p>Altura: 896m
                    Relevo: Serra
                    Vegetação: vegetação nativa preservada (Mata Atlântica)
                </p>
                <p>
                Cultivos: Produziam cachaça, com o objetivo vendê-la em Araquari, São Francisco e Joinville. Faziam pequenas plantações para consumo próprio, como aipim, feijão, milho, abóbora e batata-doce. Extraiam palmito do mato, e podem ter tido pequenas criações de animais, como galinhas, porcos e vacas. A pesca e a caça também eram importantes, desses animais era possível aproveitar a carne para se alimentarem e a pele para fazer objetos. Produziam também farinha de mandioca, que servia para consumo próprio ou para alimentar os animais.
                </p>

                <p>
                Profissões: Inicialmente não haviam oportunidades de trabalho assalariado. Com o início da colonização em 1890, surgiram algumas oportunidades de trabalho, principalmente em lavouras dos colonos em épocas de colheita e plantio. Com a formação do núcleo urbano, oportunidades de trabalho de empreitada surgiram. Alguns trabalhavam em ferroviárias, as mulheres lavando roupas, homens como serventes de pedreiro, cortando cana e madeira. Nada muito diferente do que é conhecimento atualmente sobre seus afazeres da época.
                </p>

                <p>
                Clima: O clima de Jaraguá do Sul é subtropical úmido, com verão quente. Entre os meses de julho a agosto adquire as características de clima temperado, podendo chegar a 5 ºC. A temperatura média na cidade é de 22 ºC, sendo a mínima 2 ºC e a máxima 40 ºC. A precipitação pluviométrica média anual é de 2.000mm.
                </p>

                <p>
                Rio Jaraguá: Nascente na região do Garibaldi, no centro do município, se junta ao rio Itapocu, e ambos desembocam no Oceano Atlântico.
                </p>
            </section>
            <p>geografia</p>
        </main>
    )
}