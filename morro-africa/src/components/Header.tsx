'use client'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useRouter } from "next/navigation"

import { useEffect, useRef, useState } from "react";
import { BiWorld } from "react-icons/bi";
import { BsHouseDoor } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { LuMusic4 } from "react-icons/lu";
import { PiPark } from "react-icons/pi";

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
        <Navbar shouldHideOnScroll className="bg-verde-header w-full font-poppins uppercase text-branco text-sm gap-12 flex flex-row justify-center items-center py-6">
            <NavbarContent className="hidden sm:flex gap-4 items-center w-full" justify="center">
                <NavbarItem isActive>
                    <Link href="./" aria-current="page" className="underline-offset-4 decoration-branco hover:underline cursor-pointer">
                        Início
                    </Link>
                </NavbarItem>

                <NavbarItem isActive>
                    <Link href="./Visitacao" aria-current="page" className="underline-offset-4 decoration-branco hover:underline cursor-pointer">
                        Visitação
                    </Link>
                </NavbarItem>

                <NavbarItem isActive>
                    <Link href="./Historia" aria-current="page" className="underline-offset-4 decoration-branco hover:underline cursor-pointer">
                        História
                    </Link>
                </NavbarItem>

                <NavbarItem isActive>
                    <Link href="./Geografia" aria-current="page" className="underline-offset-4 decoration-branco hover:underline cursor-pointer">
                        Geografia
                    </Link>
                </NavbarItem>

                <NavbarItem isActive>
                    <Link href="./Cultura" aria-current="page" className="underline-offset-4 decoration-branco hover:underline cursor-pointer">
                        Cultura
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="sm:hidden flex">
                <Dropdown className="bg-verde-header p-4">
                    <DropdownTrigger>
                        <Button isIconOnly>
                            <IoMenu color="#F5F5F5" size={30} />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions" className="bg-verde-header p-3 rounded-lg">
                        <DropdownItem
                            startContent={<BsHouseDoor />}
                            className="hover:bg-verde-hover pl-4 pr-16 rounded-sm font-light text-branco flex flex-row gap-2"
                            key="home">
                            Início
                        </DropdownItem>
                        <DropdownItem
                            startContent={<PiPark />}
                            className="hover:bg-verde-hover pl-4 pr-16 rounded-sm font-light text-branco flex flex-row gap-2"
                            key="visit">
                            Visitação
                        </DropdownItem>

                        <DropdownItem
                            startContent={<FiBookOpen />}
                            className="hover:bg-verde-hover pl-4 pr-16 rounded-sm font-light text-branco flex flex-row gap-2"
                            key="history">
                            História
                        </DropdownItem>

                        <DropdownItem
                            startContent={<BiWorld />}
                            className="hover:bg-verde-hover pl-4 pr-16 rounded-sm font-light text-branco"
                            key="geography">
                            Geografia
                        </DropdownItem>

                        <DropdownItem
                            startContent={<LuMusic4 />}
                            className="hover:bg-verde-hover pl-4 pr-16 rounded-sm font-light text-branco"
                            key="culture">
                            Cultura
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
        //     <div className="bg-verde-header hidden sm:flex flex-row justify-center items-center py-6">
        //         <div className="font-poppins text-branco uppercase flex flex-row gap-12 text-sm">
        //             <div className="underline-offset-4 decoration-branco hover:underline cursor-pointer" onClick={() => push("./")} >Início</div>
        //             <div className="underline-offset-4 decoration-branco hover:underline cursor-pointer" onClick={() => push("/Visitacao")} >Visitação</div>
        //             <div className="underline-offset-4 decoration-branco hover:underline cursor-pointer" onClick={() => push("/Historia")} >História</div>
        //             <div className="underline-offset-4 decoration-branco hover:underline cursor-pointer" onClick={() => push("/Geografia")} >Geografia</div>
        //             <div className="underline-offset-4 decoration-branco hover:underline cursor-pointer" onClick={() => push("/Cultura")}>Cultura</div>
        //         </div>
        //     </div>

        //     <div className="sm:hidden flex bg-verde-header p-4">
        //         <Dropdown className="sm:hidden flex bg-verde-header p-4">
        //             <DropdownTrigger>
        //                 <Button isIconOnly>
        //                     <IoMenu color="#F5F5F5" size={30} />
        //                 </Button>
        //             </DropdownTrigger>
        //             <DropdownMenu aria-label="Static Actions" className="bg-verde-header p-3 rounded-lg">
        //                 <DropdownItem
        //                     startContent={<BsHouseDoor />}
        //                     className="hover:bg-verde-hover pl-4 pr-16 rounded-sm font-light text-branco flex flex-row gap-2"
        //                     key="home">
        //                     Início
        //                 </DropdownItem>
        //                 <DropdownItem
        //                     startContent={<PiPark />}
        //                     className="hover:bg-verde-hover pl-4 pr-16 rounded-sm font-light text-branco flex flex-row gap-2"
        //                     key="visit">
        //                     Visitação
        //                 </DropdownItem>

        //                 <DropdownItem
        //                     startContent={<FiBookOpen />}
        //                     className="hover:bg-verde-hover pl-4 pr-16 rounded-sm font-light text-branco flex flex-row gap-2"
        //                     key="history">
        //                     História
        //                 </DropdownItem>

        //                 <DropdownItem
        //                     startContent={<BiWorld />}
        //                     className="hover:bg-verde-hover pl-4 pr-16 rounded-sm font-light text-branco"
        //                     key="geography">
        //                     Geografia
        //                 </DropdownItem>

        //                 <DropdownItem
        //                     startContent={<LuMusic4 />}
        //                     className="hover:bg-verde-hover pl-4 pr-16 rounded-sm font-light text-branco"
        //                     key="culture">
        //                     Cultura
        //                 </DropdownItem>
        //             </DropdownMenu>
        //         </Dropdown>
        //     </div>

        //     {
        //         navAberta && (
        //             <div
        //                 className={`${animation ? 'animate-slide-left' : 'animate-slide-rigth'} fixed top-0 left-0 w-full h-full bg-preto opacity-30 z-50 duration-300`}
        //                 onClick={() => setNavAberta(false)}
        //             ></div>
        //         )
        //     }
        // </div >
    )
}