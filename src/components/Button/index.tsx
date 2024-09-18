interface Props {
    children?: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,

}

export default function Button({ type, children }: Props) {
    return (
        <button type={type} className="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {children}
        </button>
    )
}
