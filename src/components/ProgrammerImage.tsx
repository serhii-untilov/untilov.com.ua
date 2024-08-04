import Image from 'next/image';

const ProgrammerImage = () => {
    return (
        <div
            className={[
                'absolute left-72 top-52 rounded-full bg-white h-40 w-40',
                'max-sm:sr-only max-lg:left-96 border-2 border-solid border-white',
                'hover:scale-105 hover:border-blue-200 transition-all',
            ].join('')}
        >
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
        </div>
    );
};

export default ProgrammerImage;
