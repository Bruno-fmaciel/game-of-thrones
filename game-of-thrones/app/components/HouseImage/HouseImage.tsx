import Image, { ImageProps } from "next/image";

interface HouseImageProps extends ImageProps {
    src: string,
    alt: string,
    width: number,
    height: number
}

export default function HouseImage({src, alt, width, height, ...rest} : HouseImageProps) {
    return (
        <>
            <Image src={ src } alt= { alt } width={ width } height={ height }/>
        </>
    );
}