import { CoursesItem } from '@/components/CoursesItem';
import EducationItem from '@/components/EducationItem';
import { PageTitle } from '@/components/PageTitle';

const Education = ({ cv }) => {
    return (
        <>
            {cv && (
                <div className="flex flex-col h-full justify-center gap-8 max-md:px-4">
                    <PageTitle>Education</PageTitle>
                    {cv.education?.main?.map((element: any, index: number) => {
                        return <EducationItem key={index} education={element} />;
                    })}

                    <PageTitle className="text-md uppercase font-extrabold text-blue-500 max-md:text-center">
                        Courses
                    </PageTitle>
                    <div className="flex flex-row flex-wrap justify-center gap-8">
                        {cv.education?.courses?.map((element: any, index: number) => {
                            return <CoursesItem key={index} course={element} />;
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default Education;
