"use client"
import { useState } from 'react';
import LinkMenu from './components/LinkMenu';
import MenuIcon from './components/MenuIcon';
import NotificationIcon from './components/NotificationIcon';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };
    return (
        <nav className="bg-gray-800 min-h-16">
            <div className="mx-auto px-2 sm:px-6 lg:px-8 relative flex h-16 items-center justify-between">
                <MenuIcon onClick={toggleMenu} />
                <div className="flex space-x-4 flex-1 hidden sm:ml-6 sm:block items-center justify-center sm:items-stretch sm:justify-start">
                    <LinkMenu href="/" >Início</LinkMenu>
                    <LinkMenu href="/pages/profile" >Perfil</LinkMenu>
                    <LinkMenu href="/findProfect" >Buscar Projetos</LinkMenu>
                </div>
                <div></div>
                <div className="flex">
                    <NotificationIcon />
                    <LinkMenu href="/" >Sair</LinkMenu>
                </div>
            </div>

            <div className={`${isMenuOpen ? 'sm' : 'hidden'} flex justify-between flex-col space-y-1 px-2 pb-3 pt-2 sm:hidden rounded-md px-3 py-2 text-base font-medium text-gray-300`}>
                <LinkMenu href="/" >Início</LinkMenu>
                <LinkMenu href="/profile" >Perfil</LinkMenu>
                <LinkMenu href="/findProject" >Buscar Projetos</LinkMenu>
            </div>
        </nav>
    );
}