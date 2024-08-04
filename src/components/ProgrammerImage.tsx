import Image from 'next/image';

const ProgrammerImage = () => {
    return (
        <div className="relative w-full h-full">
            <Image
                src="/images/ring-text.svg"
                alt={'Ring text image'}
                className="absolute left-0 top-0 rounded-full h-40 w-40 animate-spinSlow m-auto p-2"
                width={160}
                height={160}
            />
            <Image
                src="/images/programmer.png"
                alt={'Programmer image'}
                className="m-auto p-10"
                width={160}
                height={160}
            />
        </div>
    );
};

export default ProgrammerImage;
