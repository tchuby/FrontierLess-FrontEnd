import ImageNext from 'next/image';

interface Props {
    src?: any
}

export default function Image({ src }: Props) {
    return (
        <ImageNext
            className="object-cover w-full h-auto rounded-t-lg md:rounded-none md:rounded-s-lg"
            src={src}
            alt=""
            layout="responsive"
            width={1000}
            height={500}
        />)

}