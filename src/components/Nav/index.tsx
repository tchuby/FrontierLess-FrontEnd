import LinkMenu from './components/LinkMenu';
import LinkMenuContracted from './components/LinkMenuContracted';
import MenuIcon from './components/MenuIcon';
import NotificationIcon from './components/NotificationIcon';

export default function Nav() {
    return (
        <nav className="bg-gray-800 min-h-16">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <MenuIcon />
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <LinkMenu href="/" >Início</LinkMenu>
                                <LinkMenu href="/profile" >Perfil</LinkMenu>
                                <LinkMenu href="/findProfect" >Buscar Projetos</LinkMenu>

                            </div>
                        </div>
                    </div>
                    <NotificationIcon />
                    <div className="flex space-x-4">
                        <LinkMenu href="/" >Sair</LinkMenu>
                    </div>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <LinkMenuContracted href="/" >Início</LinkMenuContracted>
                    <LinkMenuContracted href="/profile" >Perfil</LinkMenuContracted>
                    <LinkMenuContracted href="/findProject" >Buscar Projetos</LinkMenuContracted>
                </div>
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <LinkMenuContracted href="/" >Sair</LinkMenuContracted>
                </div>
            </div>
        </nav>

    );
}