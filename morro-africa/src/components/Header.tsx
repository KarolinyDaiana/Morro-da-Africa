import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { BiWorld } from "react-icons/bi";
import { BsHouseDoor } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { LuMusic4 } from "react-icons/lu";
import { PiMountainsThin, PiPark } from "react-icons/pi";

export default function HeaderDeslogado() {
    return (
        <Navbar className="bg-verde-header w-full font-poppins uppercase text-branco text-sm gap-12 flex flex-row justify-center items-center px-4 sm:px-20 py-6">
            <NavbarBrand className="pr-4 hidden sm:flex">
                <PiMountainsThin size={30} />
            </NavbarBrand>
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
                <Dropdown className="bg-verde-header p-4 rounded-lg">
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
                            <Link href="./" aria-current="page" className="underline-offset-4 decoration-branco hover:underline cursor-pointer">
                                Início
                            </Link>
                        </DropdownItem>
                        <DropdownItem
                            startContent={<PiPark />}
                            className="hover:bg-verde-hover pl-4 pr-16 rounded-sm font-light text-branco flex flex-row gap-2"
                            key="visit">
                            <Link href="./Visitacao" aria-current="page" className="underline-offset-4 decoration-branco hover:underline cursor-pointer">
                                Visitação
                            </Link>
                        </DropdownItem>

                        <DropdownItem
                            startContent={<FiBookOpen />}
                            className="hover:bg-verde-hover pl-4 pr-16 rounded-sm font-light text-branco flex flex-row gap-2"
                            key="history">
                             <Link href="./Historia" aria-current="page" className="underline-offset-4 decoration-branco hover:underline cursor-pointer">
                                História
                            </Link>
                        </DropdownItem>

                        <DropdownItem
                            startContent={<BiWorld />}
                            className="hover:bg-verde-hover pl-4 pr-16 rounded-sm font-light text-branco"
                            key="geography">
                             <Link href="./Geografia" aria-current="page" className="underline-offset-4 decoration-branco hover:underline cursor-pointer">
                                Geografia
                            </Link>
                        </DropdownItem>

                        <DropdownItem
                            startContent={<LuMusic4 />}
                            className="hover:bg-verde-hover pl-4 pr-16 rounded-sm font-light text-branco"
                            key="culture">
                             <Link href="./Cultura" aria-current="page" className="underline-offset-4 decoration-branco hover:underline cursor-pointer">
                                Cultura
                            </Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    )
}