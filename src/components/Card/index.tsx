import P from '../P';
import Image from '../Image';

interface Props {
    pais?: String,
    status?: String,
    valor?: String,
    data?: String,
    img?: String
}

export default function Card({pais, status, valor, data, img}: Props) {
    return (
        <div className="flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:mx-4 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
           <Image src={img}/>
            <div className="flex flex-col justify-between P-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pais}</h5>
                <P>Status: {status}</P>
                <P>Valor estimado: {valor}</P>
                <P>Data de partida: {data}</P>
            </div>
        </div>
    )
}
