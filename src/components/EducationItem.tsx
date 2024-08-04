import EducationTitle from './EducationTitle';
import HarvardCertificate from './HarvardCertificate';
import { PageSubTitle } from './PageSubTitle';
import { ConditionalLink } from './ui/ConditionalLink';

const EducationItem = ({ education }) => {
    const className = [
        'flex flex-row text-gray-700 rounded-md my-4',
        'p-6 bg-white border-2 border-gray-200',
        'shadow-md justify-around gap-4',
        education.certificateImage ? ' basis-full' : ' basis-1/2',
        education.certificateUrl ? ' hover:border-blue-200' : '',
        'max-md:flex-col-reverse',
    ].join(' ');

    return (
        <>
            <ConditionalLink href={education.certificateUrl}>
                <div className={className}>
                    <div className="flex flex-col gap-2 justify-around">
                        <PageSubTitle>
                            <EducationTitle education={education} />
                        </PageSubTitle>
                        <div className="max-md:text-center">{education.place}</div>
                        <div className="text-sm max-md:text-center">
                            {education.start} - {education.finish}
                        </div>
                    </div>
                    {education.certificateImage ? (
                        <ConditionalLink href={education.certificateUrl}>
                            <HarvardCertificate education={education} />
                        </ConditionalLink>
                    ) : null}
                </div>
            </ConditionalLink>
        </>
    );
};

export default EducationItem;
