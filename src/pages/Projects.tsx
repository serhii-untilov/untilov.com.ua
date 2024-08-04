import { PageTitle } from '@/components/PageTitle';
import { Project } from '@/components/Project';

const Projects = ({ cv }) => {
    return (
        <>
            {cv && (
                <div className="flex flex-col h-full justify-center gap-8 max-md:px-4">
                    <PageTitle>Projects</PageTitle>
                    {cv?.projects
                        ?.filter((project: any) => !(project?.skip === 'true'))
                        ?.map((project: any, index: number) => {
                            return <Project key={index} project={project} index={index} />;
                        })}
                </div>
            )}
        </>
    );
};

export default Projects;
