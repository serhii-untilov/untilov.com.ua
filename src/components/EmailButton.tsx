import Image from 'next/image';
import CircleButton from './ui/CircleButton';

const EmailButton = ({ cv }) => {
    return (
        <CircleButton
            title={'Mail'}
            href={`mailto:${cv.email}?subject=Work Proposal`}
            image={'/images/email.svg'}
            description={cv.email}
        />
    );
};

export default EmailButton;
