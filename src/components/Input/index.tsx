interface Props {
    id?: any,
    name?: any,
    type?: "password" | "text" | "date" | "email" | "number" | "time",

}

export default function Input({ id, name, type }: Props) {
    return (
        <input id={id} name={name} type={type} required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
    )
}
