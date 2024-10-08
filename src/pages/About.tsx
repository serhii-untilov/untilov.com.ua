import DeskImage from '@/components/DeskImage';
import { PageSubTitle } from '@/components/PageSubTitle';
import { PageTitle } from '@/components/PageTitle';
import ProgrammerImage from '@/components/ProgrammerImage';
import RotatedRingImage from '@/components/RotatedRingImage';
import { useMemo } from 'react';

const About = ({ cv }) => {
    return (
        <>
            {cv && (
                <div
                    className={[
                        'flex flex-row justify-between h-full gap-16 max-md:flex-col',
                        'mx-4 max-md:justify-center max-md:gap-8',
                    ].join(' ')}
                >
                    <div className="basis-1/2 max-md:basis-full max-md:sr-only">
                        <a href="#projects" className="relative">
                            <DeskImage />
                            <div
                                className={[
                                    'absolute left-72 top-52 rounded-full bg-white h-40 w-40',
                                    'max-lg:sr-only border-2 border-solid border-white',
                                    'hover:scale-105 hover:border-blue-200 transition-all',
                                ].join(' ')}
                            >
                                <div className="relative w-full h-full">
                                    <RotatedRingImage />
                                    <ProgrammerImage />
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="flex flex-col gap-6 basis-1/2 max-md:basis-full">
                        <PageTitle>About Me</PageTitle>
                        {cv.about?.title && <PageSubTitle>{cv.about?.title}</PageSubTitle>}
                        {cv?.about?.description?.map((element: string, index: number) => {
                            return (
                                <p className="text-gray-800" key={index}>
                                    {element}
                                </p>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default About;
