import { PageSubTitle } from './PageSubTitle';
import ProjectImage from './ProjectImage';
import { TechStack } from './TechStack';
import { ButtonLink } from './ui/ButtonLink';
import { ConditionalLink } from './ui/ConditionalLink';
import { Status } from '@/components/Status';

type Props = {
    project: any,
    index: number
}

export function Project({ project, index }: Props) {
    const image = `/images/${project?.title}.png`;
    return (
        <>
            <div
                className={[
                    'flex',
                    !!(index % 2)
                        ? 'flex-row-reverse bg-gradient-to-l from-white to-gray-200'
                        : 'flex-row bg-gradient-to-r from-white to-gray-200',
                    ' justify-between gap-8 grow-0 shrink-0 p-6 border-2 border-white ',
                    'shadow-md rounded-md max-md:flex-col-reverse max-md:bg-gradient-to-t',
                ].join(' ')}
            >
                <div className="flex flex-col gap-6 justify-between basis-1/2 max-md:basis-full">
                    <div className="flex flex-row justify-between">
                        <PageSubTitle>{project.title} </PageSubTitle>

                        {project?.status && <Status status={project.status} /> }
                    </div>

                    <p className="text-gray-800 py-2">{project.description.map((element: any, index: number) => {
                        return (
                            <div key={index}>{element}</div>
                        )
                    })}</p>
                    <div className="flex justify-center">
                        <TechStack techStack={project.techStack} />
                    </div>
                    <div className="flex flex-row gap-4 justify-center pt-2">
                        <ButtonLink href={project?.sourceUrl}>Code</ButtonLink>
                        {project?.demoUrl || project.demoType ? (
                            <ButtonLink href={project?.demoUrl}>
                                {project?.demoType || 'Demo'}
                            </ButtonLink>
                        ) : null}
                    </div>
                </div>
                <ConditionalLink href={project?.demoUrl || project.sourceUrl}>
                    <div className="basis-1/2 max-md:basis-full">
                        <ProjectImage image={image} />
                    </div>
                </ConditionalLink>
            </div>
        </>
    );
}
