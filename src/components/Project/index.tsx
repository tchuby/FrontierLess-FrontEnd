import Input from "../Input";
import Accordion from "./components/Accordion";

interface Props {
    children?: React.ReactNode,
}

export default function Project({ children }: Props) {
    return (

        <form>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pais</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4 flex">
                            <Input id="valorEstimado" name="valorEstimado" type="text" children="Valor Estimado" />

                            <div className="max-w-sm mx-auto">
                                <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                                <select id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="Andamento">Andamento</option>
                                    <option value="Hiato">Hiato</option>
                                    <option value="Abandonado">Abandonado</option>
                                </select>
                            </div>

                            <Input id="dataPartida" name="dataPartida" type="date" children="Data de Partidas" />

                        </div>
                    </div>
                </div>

                <div>
                    <Accordion />
                    <Accordion />
                    <Accordion />
                    <Accordion />
                </div>



            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
        </form>


    )
}
