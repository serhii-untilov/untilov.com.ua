import Image from 'next/image';

const HeroImage = () => {
    return (
        <Image
            src="/files/hero.png"
            alt={'Hero image'}
            className="animate-morph border-4 border-gray-700 brightness-125 shadow-2xl"
            width={280}
            height={280}
            priority
            quality={100}
        />
    );
};

export default HeroImage;
