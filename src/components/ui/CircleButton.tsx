import Image from 'next/image';

const CircleButton = ({ href, image, title, description }) => {
    return (
        <a
            href={href}
            target="_blank"
            className="flex flex-row gap-2 align-middle max-md:flex-col max-md:mx-auto"
        >
            <div
                className={[
                    'rounded-full p-3 m-auto drop-shadow-md bg-white',
                    'fill-blue-500 stroke-blue-500 border-2 border-gray-100',
                    'hover:border-blue-200 hover:bg-blue-50 hover:scale-105 transition-all',
                ].join(' ')}
            >
                <Image src={image} alt="Button image" width={28} height={28} />
            </div>
            <div className="flex flex-col justify-center h-fill">
                <h3 className="font-bold text-gray-700 max-md:text-center">{title}</h3>
                <div className="text-gray-600 max-md:text-center">{description}</div>
            </div>
        </a>
    );
};

export default CircleButton;
