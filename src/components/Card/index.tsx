
import P from '../P';
import Image from '../Image';
import StarAvaliation from '../StarAvaliation';

interface Props {
    project: any,
    onClick?: () => void
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

export default function Card({ project, onClick }: Props) {
    return (
        <button onClick={onClick} className="w-full flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:ms-2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="hidden md:block md:w-2/5 h-full">
                <Image src={project.img} />
            </div>
            <div className="flex justify-between p-4 w-full h-full">
                <div className="leading-normal">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.pais}</h2>
                    <P>Status: {project.status}</P>
                    <P>Valor estimado: {project.valor}</P>
                    <P>Tipo: {project.tipo}</P>

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
                        {project.autor}
                    </h4>
                </div>

            </div>
        </button>
    );
}
