import ImageNext from 'next/image';

interface Props {
    src?: any
}

export default function Image({ src }: Props) {
    return (
        <div className="relative w-full h-full">
            <ImageNext
                className="object-cover rounded-t-lg md:rounded-none md:rounded-s-lg"
                src="/img/brasil.png"
                alt=""
                layout="fill"
            />
        </div>

    )
}