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

export default function Footer() {
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
        <footer className="bg-verde-header h-36 text-branco font-light flex items-center justify-center">
            <div>
                <p className="text-center text-sm sm:text-md">Poduzido pelas queridas Brendinha, Gabi, Hellen, Karol e Sofia :D</p>
                <p className="text-center text-xs sm:text-xm font-thin">Agosto de 2024.</p>
            </div>
        </footer>   
    )
}