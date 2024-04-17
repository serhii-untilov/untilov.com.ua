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
    const className = [
        'flex flex-row text-gray-700 rounded-md my-4 p-6 bg-white border-2',
        'border-gray-200 shadow-md justify-around gap-4',
        course.certificateImage ? ' basis-full' : ' basis-1/2',
        course.certificateUrl ? ' hover:bg-blue-50' : '',
        'max-md:flex-col-reverse',
    ].join(' ');

    return (
        <ConditionalLink href={course.certificateUrl}>
            <div className={className}>
                <div className="flex flex-col gap-2 justify-around">
                    <h3 className="text-lg font-bold text-gray-800 max-md:text-center">
                        {course.profile}
                    </h3>
                    <div className="max-md:text-center">{course.place}</div>
                    <div className="text-sm max-md:text-center">
                        {course.start} - {course.finish}
                    </div>
                </div>
                {course.certificateImage ? (
                    <Image
                        src={course.certificateImage || '/CertificateHarvardX.png'}
                        alt="Certificate image"
                        className="rounded-2xl mx-auto"
                        width={210}
                        height={150}
                    />
                ) : null}
            </div>
        </ConditionalLink>
    );
}
