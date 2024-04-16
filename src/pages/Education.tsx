import { CoursesItem } from '@/components/CoursesItem';
import { EducationItem } from '@/components/EducationItem';
import { PageTitle } from '@/components/PageTitle';

export default function Education(cv: any) {
    const generateMainEducation = () => {
        return cv?.education?.main?.map((element: any, index: number) => {
            return <EducationItem key={index} education={element} />;
        });
    };

    const generateCourses = () => {
        return cv?.education?.courses?.map((element: any, index: number) => {
            return <CoursesItem key={index} course={element} />;
        });
    };

    return (
        <div className="flex flex-col h-full justify-center gap-8">
            <PageTitle>Education</PageTitle>
            {generateMainEducation()}
            <PageTitle className="text-md uppercase font-extrabold text-blue-600">
                Courses
            </PageTitle>
            <div className="flex flex-row flex-wrap justify-center gap-16">{generateCourses()}</div>
        </div>
    );
}
