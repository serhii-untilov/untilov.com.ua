import DeskImage from '@/components/DeskImage';
import { PageSubTitle } from '@/components/PageSubTitle';
import { PageTitle } from '@/components/PageTitle';
import ProgrammerImage from '@/components/ProgrammerImage';

const About = ({ cv }) => {
    return (
        <>
            {cv && (
                <div
                    className={[
                        'flex flex-row justify-between h-full gap-16 max-md:flex-col',
                        'mx-4 max-md:justify-center max-md:gap-8',
                    ].join('')}
                >
                    <div className="basis-1/2 max-md:basis-full max-md:sr-only">
                        <a href="#projects" className="relative">
                            <DeskImage />
                            {/* <ProgrammerImage /> */}
                        </a>
                    </div>

                    <div className="flex flex-col gap-6 basis-1/2 max-md:basis-full">
                        <PageTitle>About Me</PageTitle>
                        {cv.about?.title && <PageSubTitle>{cv.about?.title}</PageSubTitle>}
                        {cv.about?.description?.map((element: string, index: number) => {
                            return <p key={index}>{element}</p>;
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default About;
