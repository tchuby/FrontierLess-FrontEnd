import NextLink from 'next/link';

interface Props {
    children?: React.ReactNode,
    href?: any
}

export default function Link({ children, href}: Props) {
    return (
        <div>
            <NextLink href={href}>
                <h1>{children}</h1>
            </NextLink>
        </div>

    );
}