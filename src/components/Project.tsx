import Image from 'next/image';
import { PageSubTitle } from './PageSubTitle';
import { TechStack } from './TechStack';
import { ButtonLink } from './ButtonLink';

export function Project(props: any) {
    const { project } = props;
    const image = `/${project?.title}.png`;

    const generateKeyFeatures = () => {
        return project['key-features'].map((element: string, index: number) => {
            return (
                <li key={index} className="text-gray-700">
                    {element}
                </li>
            );
        });
    };
    return (
        <>
            <div className="flex flex-row justify-between gap-16 grow-0 shrink-0 border-2 border-solid border-gray-200 p-6 rounded-md bg-white shadow-md">
                <div className="flex flex-col gap-6 justify-between">
                    <PageSubTitle>{project.title}</PageSubTitle>
                    <p className="text-gray-700">{project.description}</p>
                    <ul className="list-disc mx-8 mb-4">{generateKeyFeatures()}</ul>
                    {/* <div className="my-auto whitespace-pre text-black">Tech Stack</div> */}
                    <div className="opacity-85">
                        <TechStack techStack={project.techStack} />
                    </div>
                    <div className="flex flex-row gap-4 justify-between">
                        {project?.sourceUrl ? (
                            <ButtonLink href={project?.sourceUrl}>Sources</ButtonLink>
                        ) : null}
                        {project?.demoUrl ? (
                            <ButtonLink href={project?.demoUrl}>Demo</ButtonLink>
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
