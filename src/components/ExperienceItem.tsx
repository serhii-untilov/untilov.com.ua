import Image from 'next/image';
import { PageSubTitle } from './PageSubTitle';
import { TechStack } from './TechStack';

export function ExperienceItem(props: any) {
    const { experienceItem, index } = props;
    const generateResponsibilities = () => {
        return experienceItem.responsibilities.map((element: string, index: number) => {
            return (
                <li key={index} className="text-gray-700">
                    {element}
                </li>
            );
        });
    };
    return (
        <>
            <div
                className={[
                    'flex',
                    index === 0 ? 'basis-full mx-auto' : 'basis-3/6 mx-auto',
                    'max-md:basis-full',
                ].join(' ')}
            >
                <div className="w-full flex flex-col justify-between gap-1 m-4 p-6 rounded-md border-2 border-white shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40">
                    <div className="flex flex-col justify-start">
                        <div className="mx-auto bg-white rounded-full m-2 w-24 h-24 flex justify-center border-2 border-gray-200">
                            <Image
                                src={experienceItem.image}
                                alt="Experience Image"
                                width={56}
                                height={56}
                                className="fill-blue-500"
                            />
                        </div>
                        <div>
                            <div className="flex flex-row justify-center py-4">
                                <PageSubTitle>{experienceItem.title}</PageSubTitle>
                            </div>
                            <div className="flex flex-row gap-1 text-gray-700 justify-between max-md:flex-col">
                                <div className="py-2 max-md:text-center max-md:py-0">
                                    {experienceItem.company}, {experienceItem.place}
                                </div>
                                <div className="py-2 text-sm max-md:text-center max-md:py-0">
                                    {experienceItem.start} - {experienceItem.finish}
                                </div>
                            </div>
                            <div className="text-gray-700 py-2 font-bold">
                                {experienceItem.description}
                            </div>
                            <ul className="list-disc mx-8 mb-4">{generateResponsibilities()}</ul>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <TechStack techStack={experienceItem.techStack} />
                    </div>
                </div>
            </div>
        </>
    );
}
