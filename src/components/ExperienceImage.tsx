import Image from 'next/image';

const ExperienceImage = ({ image }) => {
    return (
        <>
            {image && (
                <div className="mx-auto bg-white rounded-full m-0 w-24 h-24 flex justify-center border-2 border-gray-200">
                    <Image
                        src={image}
                        alt="Experience Image"
                        width={56}
                        height={56}
                        className="fill-blue-500"
                    />
                </div>
            )}
        </>
    );
};

export default ExperienceImage;
