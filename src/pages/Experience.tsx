import { PageTitle } from '@/components/PageTitle';
import { ExperienceItem } from '@/components/ExperienceItem';

export function Experience(cv: any) {
    const generateExperience = () => {
        return cv?.experience?.map((element: any, index: number) => {
            return (
                <ExperienceItem key={index} experienceItem={element} className="text-gray-700" />
            );
        });
    };

    return (
        <div className="flex flex-col h-fit justify-center gap-1">
            <PageTitle>Experience</PageTitle>
            <div className="flex flex-row flex-wrap">{generateExperience()}</div>
        </div>
    );
}
