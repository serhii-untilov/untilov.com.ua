import Image from 'next/image';
import { PageSubTitle } from './PageSubTitle';
import { TechStack } from './TechStack';

export function Project(props: any) {
    const { project } = props;
    const image = `/${project?.title}.png`;
    return (
        <>
            <div className="flex flex-row justify-between gap-16 grow-0 shrink-0">
                <div className="flex flex-col gap-6">
                    <PageSubTitle>{project.title}</PageSubTitle>
                    <p className="text-gray-700">{project.description}</p>
                    {/* <div className="my-auto whitespace-pre text-black">Tech Stack</div> */}
                    <TechStack techStack={project.techStack} />
                    <div className="flex flex-row gap-1 justify-between">
                        {project?.sourceUrl ? (
                            <a
                                href={project?.sourceUrl}
                                className="rounded-full bg-blue-500 text-white w-full flex-5 text-center align-middle hover:bg-blue-600 max-w-48"
                            >
                                Sources
                            </a>
                        ) : null}
                        {project?.demoUrl ? (
                            <a
                                href={project?.demoUrl}
                                className="rounded-full bg-blue-500 text-white w-full flex-5 text-center align-middle hover:bg-blue-600 max-w-48"
                            >
                                Demo
                            </a>
                        ) : null}
                    </div>
                </div>
                <div className="flex-none">
                    <Image
                        src={image}
                        alt={'Project image'}
                        className="rounded-2xl"
                        width={410}
                        height={350}
                    />
                </div>
            </div>
        </>
    );
}
