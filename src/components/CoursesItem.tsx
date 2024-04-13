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

export function CoursesItem(props: any) {
    const { course } = props;
    const className =
        'flex flex-row text-gray-700 rounded-md my-4 p-6 bg-white border-2 border-gray-200 shadow-md justify-between gap-4' +
        (course.certificateImage ? ' flex-12  justify-self-stretch' : ' flex-6');

    return (
        <div>
            <div className={className}>
                <div className="flex flex-col gap-2 justify-between">
                    <h3 className="text-lg font-bold text-gray-800">{course.profile}</h3>
                    <div>{course.place}</div>
                    <div className="text-sm">
                        {course.start} - {course.finish}
                    </div>
                </div>
                {course.certificateImage ? (
                    <ConditionalLink href={course.certificateUrl}>
                        <Image
                            src={course.certificateImage || '/CertificateHarvardX.png'}
                            alt="Certificate image"
                            className="rounded-2xl"
                            width={310}
                            height={250}
                        />
                    </ConditionalLink>
                ) : null}
            </div>
        </div>
    );
}
