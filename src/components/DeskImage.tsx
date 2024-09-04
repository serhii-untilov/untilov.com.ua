import Image from 'next/image';

const DeskImage = () => {
    return (
        <Image
            src="/images/desk.webp"
            alt={'Desk image'}
            className="rounded-2xl border-2 border-gray-200 w-full max-w-fit max-lg:mx-auto"
            width={410}
            height={350}
        />
    );
};

export default DeskImage;
