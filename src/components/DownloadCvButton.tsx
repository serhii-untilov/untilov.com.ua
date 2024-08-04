import { extractFileName } from '@/utils/extractFileName';
import Image from 'next/image';
import CircleButton from './ui/CircleButton';

const DownloadCvButton = ({ cv }) => {
    return (
        <CircleButton
            title={'Download CV'}
            href={cv.cv}
            image={'/images/pdf.svg'}
            description={extractFileName(cv.cv)}
        />
    );
};

export default DownloadCvButton;
