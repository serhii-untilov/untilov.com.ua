import { ExperienceItem } from '@/components/ExperienceItem';
import { PageTitle } from '@/components/PageTitle';

export function Experience(cv: any) {
    const generateExperience = () => {
        return cv?.experience?.map((element: any, index: number) => {
            return <ExperienceItem key={index} experienceItem={element} index={index} />;
        });
    };

    return (
        <div className="flex flex-col h-fit justify-center gap-1">
            <PageTitle>Experience</PageTitle>
            <div className="flex flex-row flex-wrap z-10">{generateExperience()}</div>
        </div>
    );
}
