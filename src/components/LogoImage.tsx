import Image from 'next/image';

const LogoImage = () => {
    return (
        <Image
            src="/favicon.svg"
            alt={'Logo image'}
            className="rounded inline max-lg:animate-rotate group-hover:animate-rotate"
            width={32}
            height={32}
            quality={100}
        />
    );
};

export default LogoImage;
