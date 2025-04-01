import Image from "next/image";

export type SwsLogoFunction = {
    width: number,
    className?: string
}

export default function SwsLogo (param: SwsLogoFunction) {
    const height = Math.round(param.width / 4.9);
    return (
        <Image 
            src='/sws-logo.svg'
            alt='Stadtwerke Sundern Logo'
            width={param.width}
            height={height}
            className={param.className}
            priority
        />
    )
}