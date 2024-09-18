interface Props {
    children?: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,

}

export default function Button({ type, children }: Props) {
    return (
        <button type={type}>
            {children}
        </button>
    )
}
