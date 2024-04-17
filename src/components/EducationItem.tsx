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
    const className = [
        'flex',
        'flex-row',
        'text-gray-700',
        'rounded-md',
        'my-4',
        'p-6',
        'bg-white',
        'border-2',
        'border-gray-200',
        'shadow-md',
        'justify-around',
        'gap-4',
        education.certificateImage ? ' basis-full' : ' basis-1/2',
        education.certificateUrl ? ' hover:border-blue-200' : '',
        'max-md:flex-col-reverse',
    ].join(' ');

    return (
        <>
            <ConditionalLink href={education.certificateUrl}>
                <div className={className}>
                    <div className="flex flex-col gap-2 justify-around">
                        <PageSubTitle>{educationTitle(education)}</PageSubTitle>
                        <div className="max-md:text-center">{education.place}</div>
                        <div className="text-sm max-md:text-center">
                            {education.start} - {education.finish}
                        </div>
                    </div>
                    {education.certificateImage ? (
                        <ConditionalLink href={education.certificateUrl}>
                            <Image
                                src={education.certificateImage || '/files/CertificateHarvardX.png'}
                                alt="Certificate image"
                                className="rounded-2xl mx-auto"
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
