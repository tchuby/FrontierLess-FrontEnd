import Card from "@/components/Card";
import Link from "@/components/Link";

export default function Feed() {
    return (
        <div className="container mt-4">
            <div className="flex"> {/* Usando flexbox para alinhar lado a lado */}

                {/* Coluna para os Cards com as imagens */}
                <div className="flex-fill me-3 w-full"> {/* flex-fill para ocupar o espaço restante */}
                    <Card pais="Irlânda" img="/img/irlanda.png" status="Em andamento" valor="R$20.000,00" data="06/10/2001" />
                    <Card pais="Austrália" img="/img/australia.png" status="Em andamento" valor="R$20.000,00" data="06/10/2001" />
                    <Card pais="Austrália" img="/img/australia.png" status="Fechado" valor="R$50.000,00" data="15/09/2005" />
                </div>
                <div className="w-full rounded-lg border-4 border-green-500/100">
                    <ul className="divide-y divide-gray-200">
                        <li className="py-4 flex items-center justify-between">
                            <div className="flex items-center">
                                <img className="h-10 w-10 rounded-full" src="/path/to/image.jpg" alt="User Name" />
                                <span className="ml-3 text-gray-700">Nome do Usuário</span>
                            </div>
                            <span className="text-sm text-gray-500">Status</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
