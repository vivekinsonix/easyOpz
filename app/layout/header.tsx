"use client";

import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";

const customTheme = {
    root: {
        base: "bg-white/70 dark:bg-transparent  py-4 rounded-xl  text-white",
        rounded: {
            on: "rounded-xl",
            off: "",
        },
    },
    brand: {
        base: "flex items-center space-x-2 text-2xl font-bold text-white",
    },
    toggle: {
        base: "text-gray-200 hover:text-highlight focus:ring-0 focus:ring-highlight rounded-lg",
    },
    collapse: {
        base: "mt-8 md:mt-0 flex flex-col md:flex-row md:space-x-6",
    },
    link: {
        base: "text-gray-50 dark:text-gray-50 pt-2 flex items-center hover:text-highlight transition-colors duration-200 border-0",
        active: {
            on: "!text-highlight font-bold hover:!text-highlight ",
            off: "text-gray-50 hover:!text-highlight",
        },
    },
};
export default function Header() {
    return (

        <>
            <div className="container mx-auto r py-4 ">

                <Navbar className="bg-transparent dark:bg-transparent" fluid rounded theme={customTheme}>
                    <NavbarBrand href="#">

                        <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">EasyOpz</span>
                    </NavbarBrand>
                    <div className="flex md:order-2">
                        <Button className="cursor-pointer bg-transparent border text-highlight border-highlight hover:bg-highlight hover:text-black dark:bg-black dark:hover:bg-highlight">Get started</Button>
                        <NavbarToggle />
                    </div>
                    <NavbarCollapse >

                        <NavbarLink className="hover:text-highlight !border-0 bg-transparent-0 dark:bg-transparent" href="#features" active>About</NavbarLink>
                        <NavbarLink className="hover:text-highlight !border-0" href="#features">Features</NavbarLink>
                        <NavbarLink className="hover:text-highlight !border-0" href="#pricing">Pricing</NavbarLink>


                    </NavbarCollapse>
                </Navbar>




            </div>
            {/* <header className="bg-transparent text-white Z-50">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    <h2 className="text-xl font-bold">EasyOpz</h2>
                    <nav className="flex space-x-6 items-center">
                        <a href="#features" className="hover:text-highlight">Features</a>
                        <a href="#pricing" className="hover:text-highlight">Pricing</a>
                        <a href="#about" className="hover:text-highlight">About</a>
                        <button className="bg-secondary px-4 py-2 rounded-md text-white hover:bg-teal-600">
                            Get Started
                        </button>
                    </nav>
                </div>
            </header> */}

        </>

    );
}
