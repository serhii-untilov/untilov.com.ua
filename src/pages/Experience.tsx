import { ExperienceItem } from '@/components/ExperienceItem';
import { PageTitle } from '@/components/PageTitle';

const Experience = ({ cv }) => {
    return (
        <>
            {cv && (
                <div className="flex flex-col h-fit justify-center gap-1">
                    <PageTitle>Experience</PageTitle>
                    <div className="flex flex-row flex-wrap z-10">
                        {cv?.experience?.map((element: any, index: number) => {
                            return (
                                <ExperienceItem
                                    key={index}
                                    experienceItem={element}
                                    index={index}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default Experience;
