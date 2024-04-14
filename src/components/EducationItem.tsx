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
    const className =
        'flex flex-row text-gray-700 rounded-md my-4 p-6 bg-white border-2 border-gray-200 shadow-md justify-between gap-4' +
        (education.certificateImage ? ' basis-full' : ' basis-1/2') +
        (education.certificateUrl ? ' hover:border-blue-200' : '');
    return (
        <>
            <ConditionalLink href={education.certificateUrl}>
                <div className={className}>
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
                                className="rounded-2xl"
                                width={210}
                                height={150}
                            />
                        </ConditionalLink>
                    ) : null}
                </div>
            </ConditionalLink>
        </>
    );
}
