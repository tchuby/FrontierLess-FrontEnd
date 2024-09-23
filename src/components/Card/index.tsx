import P from '../P';
import Image from '../Image';
import StarAvaliation from '../StarAvaliation';

interface Props {
    pais?: string,
    status?: string,
    valor?: string,
    data?: string,
    img?: string,
    autor?: string
}

function getQuantEtapas() {

    //TO DO

    let etapas = 60;
    return `${etapas} etapas`
}

function getQuantAvaliacoes() {

    //TO DO

    let avaliation = 10;
    return `${avaliation} avaliações`
}

export default function Card({ pais, status, valor, data, img, autor }: Props) {
    return (
        <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:ms-2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="hidden md:block md:w-2/5 h-full">
                <Image src={img} />
            </div>
            <div className="flex justify-between p-4 w-full h-full">
                <div className="leading-normal">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pais}</h2>
                    <P>Status: {status}</P>
                    <P>Valor estimado: {valor}</P>
                    <P>Data de partida: {data}</P>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <P>
                        <StarAvaliation />
                        {getQuantAvaliacoes()}
                    </P>
                    <P>
                        {getQuantEtapas()}
                    </P>
                    <h4 className='font-bold tracking-tight text-gray-900 dark:text-white"'>
                        {autor}
                    </h4>
                </div>

            </div>
        </div>
    );
}
