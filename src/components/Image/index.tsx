import ImageNext from 'next/image';

interface Props {
    src?: any
}

export default function Image({src}: Props) {
    return (
        <ImageNext className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={src} alt="" width="100" height="100"/>
    )

}