import DownloadCvButton from '@/components/DownloadCvButton';
import EmailButton from '@/components/EmailButton';
import LocationButton from '@/components/LocationButton';
import { PageTitle } from '@/components/PageTitle';

const Contact = ({ cv }) => {
    return (
        <>
            {cv && (
                <div className="flex flex-col justify-start gap-8 flex-wrap min-h-screen px-4">
                    <PageTitle>Contact</PageTitle>
                    <div className="flex flex-row gap-8 justify-between flex-wrap max-md:flex-col">
                        <LocationButton cv={cv} />
                        <EmailButton cv={cv} />
                        <DownloadCvButton cv={cv} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Contact;
