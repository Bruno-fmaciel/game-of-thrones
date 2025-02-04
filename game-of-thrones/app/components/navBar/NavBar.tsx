'use client';
import MenuLink from "../menuLink/MenuLink";

export default function NavBar() {
    return (
        <>
            <nav className="h-20 flex items-center justify-between px-4 gap-4 flex-wrap">
                <MenuLink texto="Home" href='/' className="text-2xl text-white no-underline text-left hover:text-color-accent duration-300 ease-in cursor-pointer"/>
                <MenuLink texto="Livros" href='/books' className="text-2xl text-white no-underline text-left hover:text-color-accent duration-300 ease-in cursor-pointer"/>
                <MenuLink texto="Personagens" href='/characters' className="text-2xl text-white no-underline text-left hover:text-color-accent duration-300 ease-in cursor-pointer"/>
                <MenuLink texto="Casas" href='/houses' className="text-2xl text-white no-underline text-left hover:text-color-accent duration-300 ease-in cursor-pointer"/>
            </nav>
        </>
    );
}