import Image from 'next/image';
import Tooltip from './ui/Tooltip';

const TechStackImage = ({ index, imageName }) => {
    return (
        <Tooltip key={index} message={imageName}>
            <Image
                src={`/images/${imageName}.svg`}
                alt={`${imageName} Image`}
                className="hover:-translate-y-1 transition-all cursor-pointer my-auto"
                width={38}
                height={38}
                priority
            />
        </Tooltip>
    );
};

export default TechStackImage;
