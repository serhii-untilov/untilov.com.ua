import Image from 'next/image';
import { ButtonLink } from './ButtonLink';
import { PageSubTitle } from './PageSubTitle';
import { TechStack } from './TechStack';
import { ConditionalLink } from './ConditionalLink';

export function Project(props: any) {
    const { project, index } = props;
    const image = `/images/${project?.title}.png`;

    // const generateKeyFeatures = () => {
    //     return project['key-features'].map((element: string, index: number) => {
    //         return (
    //             <li key={index} className="text-gray-700">
    //                 {element}
    //             </li>
    //         );
    //     });
    // };

    return (
        <>
            <div
                className={
                    (!!(index % 2)
                        ? 'flex flex-row-reverse bg-gradient-to-l from-white to-gray-300'
                        : 'flex flex-row bg-gradient-to-r from-white to-gray-300') +
                    ' justify-between gap-8 grow-0 shrink-0 border-2 border-solid border-white p-6 rounded-md shadow-sm max-md:flex-col-reverse max-md:bg-gradient-to-t'
                }
            >
                <div className="flex flex-col gap-6 justify-between basis-1/2 max-md:basis-full">
                    <div className="flex flex-row justify-between">
                        <PageSubTitle>{project.title} </PageSubTitle>
                        {project.status ? (
                            <div className="p-2 inline text-sm -rotate-12 rounded border-dashed border-2 border-gray-500 font-bold text-gray-500 w-fit uppercase text-center">
                                {project.status}
                            </div>
                        ) : null}
                    </div>

                    <p className="text-gray-800 py-2">{project.description}</p>
                    {/* <ul className="list-disc mx-8 mb-4">{generateKeyFeatures()}</ul> */}
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
                        <Image
                            src={image}
                            alt={'Project image'}
                            // className="rounded-md"
                            className="basis-1/2 border-2 rounded-md max-md:basis-full hover:scale-105 transition-all border-white hover:border-blue-200 mx-auto"
                            width={410}
                            height={350}
                            quality={100}
                        />
                    </div>
                </ConditionalLink>
            </div>
        </>
    );
}
