
import P from '../P';
import Image from '../Image';
import StarAvaliation from '../StarAvaliation';
import H2 from '../H2';

interface Props {
    project: any,
    onClick?: () => void,
}

export default function Card({ project, onClick }: Props) {
    return (
        <button onClick={onClick} className="w-full flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:ms-2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="hidden md:block md:w-2/5 h-full">
                <Image src={project.img} />
            </div>
            <div className="flex justify-between p-4 w-full h-full">
                <div className="leading-normal">
                    <H2>{project.pais}</H2>
                    <P>Status: {project.status}</P>
                    <P>Tipo: {project.exchangeType}</P>
                    <P>Valor: {`R$${project.totalCost}`}</P>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <P>
                        <StarAvaliation disabled={true}/>
                        {`${project.quantComments} Commentarios`}
                    </P>
                    <P>
                        {50}
                    </P>
                    <h4 className='font-bold tracking-tight text-gray-900 dark:text-white"'>
                        {project.author}
                    </h4>
                </div>

            </div>
        </button>
    );
}
