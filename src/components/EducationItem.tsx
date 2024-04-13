import Image from 'next/image';
import { PageSubTitle } from './PageSubTitle';
import { ConditionalLink } from './ConditionalLink';

function educationTitle(education: any) {
    if (education.degree && education.profile) {
        return `${education.degree} of ${education.profile}`;
    }
    if (education.degree) {
        return education.degree;
    }
    return education.profile;
}

export function EducationItem(props: any) {
    const { education } = props;
    return (
        <>
            <div className="flex flex-row text-gray-700 rounded-md my-4 p-6 bg-white border-2 border-gray-200 shadow-md gap-4 justify-between">
                <div className="flex flex-col gap-2 justify-between">
                    <PageSubTitle>{educationTitle(education)}</PageSubTitle>
                    <div>{education.place}</div>
                    <div className="text-sm">
                        {education.start} - {education.finish}
                    </div>
                </div>
                {education.certificateImage ? (
                    <ConditionalLink href={education.certificateUrl}>
                        <Image
                            src={education.certificateImage || '/files/CertificateHarvardX.png'}
                            alt="Certificate image"
                            className="rounded-2xl opacity-50"
                            width={210}
                            height={150}
                        />
                    </ConditionalLink>
                ) : null}
            </div>
        </>
    );
}
