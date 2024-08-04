import Image from 'next/image';
import CircleButton from './ui/CircleButton';

const LocationButton = ({ cv }) => {
    return (
        <CircleButton
            title={'Location'}
            href={cv?.location?.link}
            image={'/images/map.svg'}
            description={cv?.location?.label}
        />
    );
};

export default LocationButton;
