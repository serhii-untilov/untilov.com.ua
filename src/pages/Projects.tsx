import { PageSubTitle } from '@/components/PageSubTitle';
import { PageTitle } from '@/components/PageTitle';
import { Project } from '@/components/Project';
import { TechStack } from '@/components/TechStack';
import Image from 'next/image';

export function Projects(cv: any) {
    const generateProjects = () => {
        return cv?.projects?.map((project: any, index: number) => {
            return <Project key={index} project={project} />;
        });
    };

    return (
        <div className="flex flex-col h-full justify-center gap-8">
            <div className="flex flex-row justify-between gap-16">
                <div className="flex flex-col gap-6">
                    <PageTitle>Projects</PageTitle>
                    <div className="flex flex-col gap-6 text-gray-700">{generateProjects()}</div>
                </div>
            </div>
        </div>
    );
}
