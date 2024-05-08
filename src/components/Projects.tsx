import { PageTitle } from '@/components/PageTitle';
import { Project } from '@/components/Project';

export function Projects(cv: any) {
    const generateProjects = () => {
        return cv?.projects
            ?.filter((project: any) => !(project?.skip === 'true'))
            ?.map((project: any, index: number) => {
                return (
                    <Project
                        key={index}
                        project={project}
                        index={index}
                        className="text-gray-700"
                    />
                );
            });
    };

    return (
        <div className="flex flex-col h-full justify-center gap-8 max-md:px-4">
            <PageTitle>Projects</PageTitle>
            {generateProjects()}
        </div>
    );
}
