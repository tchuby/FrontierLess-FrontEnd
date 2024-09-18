interface Props {
    children?: React.ReactNode,
    htmlFor?: any

}

export default function Label({ htmlFor, children }: Props) {
    return (
        <label htmlFor={htmlFor} className="block text-sm font-medium leading-6 text-gray-900">{children}</label>
    )
}
