'use client'
import { useRouter } from "next/navigation"

import { useEffect, useRef, useState } from "react";

export default function HeaderDeslogado() {
    const { push } = useRouter();
    const navRef = useRef<HTMLDivElement>(null)

    const [navAberta, setNavAberta] = useState(false)
    const [animation, setAnimation] = useState<boolean>(false)

    useEffect(() => {
        if (!animation) {
            setTimeout(() => {
                setNavAberta(false)
                setAnimation(true)
            }, 290)
        }
    }, [animation])

    const handleClickOutside = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setNavAberta(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLinkClick = (url: string) => {
        push(url);
        setNavAberta(false);
    };

    return (
        <div>
            <div className="bg-verde-header sm:hidden md:px-20 px-6 md:py-3 py-2 flex flex-row-reverse sm:flex-row font-poppins justify-between items-center text-preto">
                <button onClick={() => setNavAberta(true)}>Menu</button>
            </div>


            <div className="bg-verde-header flex max-sm:hidden flex-row items-center py-6 pl-36">
                <div className="font-poppins text-branco uppercase flex flex-row gap-12 text-sm">
                    <div className="underline-offset-4 decoration-preto hover:underline cursor-pointer" onClick={() => push("/produtos")} >Início</div>
                    <div className="underline-offset-4 decoration-preto hover:underline cursor-pointer" onClick={() => push("/informacoesServicos")} >Visitação</div>
                    <div className="underline-offset-4 decoration-preto hover:underline cursor-pointer" onClick={() => push("/lojas")} >História</div>
                    <div className="underline-offset-4 decoration-preto hover:underline cursor-pointer" onClick={() => push("/planos")} >Geografia</div>
                    <div className="underline-offset-4 decoration-preto hover:underline cursor-pointer" onClick={() => push("/contato")}>Cultura</div>
                </div>
            </div>

            {
                navAberta && (
                    <div
                        className={`${animation ? 'animate-slide-left' : 'animate-slide-rigth'} fixed top-0 left-0 w-full h-full bg-preto opacity-30 z-50 duration-300`}
                        onClick={() => setNavAberta(false)}
                    ></div>
                )
            }
            {
                navAberta && (
                    <div ref={navRef} className={`z-[100] bg-branco block absolute top-0 left-0 w-full h-fit pb-12 overflow-x-hidden ${animation ? 'animate-slide-left' : 'animate-slide-right'}`}>
                        <div className="p-6 flex flex-col gap-4">

                            <button className="w-full" onClick={() => setNavAberta(false)}>Fechar</button>

                            <div className="grid grid-cols-2 gap-4 pl-2">
                                <div className="flex flex-col font-poppins text-preto">
                                    <h3 className="font-semibold text-lg">Conta</h3>

                                    <div className="flex flex-col w-full">
                                        <a onClick={() => handleLinkClick('/login')} className="hover:underline text-roxo-select font-medium text-sm">Fazer login</a>
                                        <a onClick={() => handleLinkClick('/cadastro')} className="hover:underline text-roxo-select font-medium text-sm">Cadastrar-se</a>
                                        <a onClick={() => handleLinkClick('/carrinho')} className="hover:underline text-roxo-select font-medium text-sm">Sacola</a>
                                    </div>
                                </div>

                                <div className="flex flex-col font-poppins text-preto">
                                    <h3 className="font-semibold text-lg">Outros</h3>

                                    <div className="flex flex-col w-full">
                                        <a onClick={() => handleLinkClick('/contato')} className="hover:underline text-roxo-select font-medium text-sm">Contato</a>
                                        <a onClick={() => handleLinkClick('/duvidasFrequentes')} className="hover:underline text-roxo-select font-medium text-sm">Dúvidas</a>
                                        <a onClick={() => handleLinkClick('/sobreNos')} className="hover:underline text-roxo-select font-medium text-sm">Sobre nós</a>
                                    </div>
                                </div>

                                <div className="flex flex-col font-poppins text-preto">
                                    <h3 className="font-semibold text-lg">Pet shop</h3>

                                    <div className="flex flex-col w-full">
                                        <a onClick={() => handleLinkClick('/produtos')} className="hover:underline text-roxo-select font-medium text-sm">Produtos</a>
                                        <a onClick={() => handleLinkClick('/informacoesServicos')} className="hover:underline text-roxo-select font-medium text-sm">Serviços</a>
                                        <a onClick={() => handleLinkClick('/lojas')} className="hover:underline text-roxo-select font-medium text-sm">Lojas</a>
                                        <a onClick={() => handleLinkClick('/planos')} className="hover:underline text-roxo-select font-medium text-sm">Planos</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )
            }

        </div >
    )
}