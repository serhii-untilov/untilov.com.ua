import { CoursesItem } from '@/components/CoursesItem';
import EducationItem from '@/components/EducationItem';
import { PageTitle } from '@/components/PageTitle';

const Education = ({ cv }) => {
    const generateEducation = () => {
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
        <div className="flex flex-col h-full justify-center gap-8 max-md:px-4">
            <PageTitle>Education</PageTitle>
            {generateEducation()}

            <PageTitle className="text-md uppercase font-extrabold text-blue-500 max-md:text-center">
                Courses
            </PageTitle>
            <div className="flex flex-row flex-wrap justify-center gap-8">{generateCourses()}</div>
        </div>
    );
};

export default Education;
