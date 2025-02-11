import Image from 'next/image';
import Tooltip from './ui/Tooltip';

const TechStackImage = ({ index, imageName }) => {
    let imageFileName
    if (imageName.includes('.svg') || imageName.includes('.png')) {
        imageFileName = `/images/${imageName}`
        imageName = imageName.replace('.png', '').replace('.svg', '')
    } else {
        imageFileName = `/images/${imageName}.svg`
    }
    return (
        <Tooltip key={index} message={imageName}>
            <Image
                src={imageFileName}
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
