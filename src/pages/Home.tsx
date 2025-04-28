import HeroImage from '@/components/HeroImage';
import { accentClass, Status } from '@/components/Status';
import { TechStack } from '@/components/TechStack';
import GitHub from '@/components/GitHub';
import HarvardX from '@/components/HarvardX';
import LinkedIn from '@/components/LinkedIn';

const Home = ({ cv }) => {
    return (
        <>
            {cv && (
                <div className="flex flex-col h-full justify-center max-sm:justify-normal max-sm:mx-4">
                    <div
                        className={[
                            'flex flex-row justify-between gap-8',
                            'max-sm:gap-0 max-sm:flex-col-reverse max-sm:justify-start',
                        ].join(' ')}
                    >
                        <div className="flex flex-col justify-around basis-2/3 max-sm:basis-full">
                            <h2 className="text-5xl font-extrabold text-gray-800 max-sm:text-center mb-4">
                                {cv.job}
                            </h2>

                            <h2 className="text-gray-700 text-lg mb-6">{cv.brief}</h2>

                            <ul className="flex flex-row gap-4 justify-self-center">
                                {[LinkedIn, GitHub, HarvardX].map((o, index) => (
                                    <li key={index} className="shrink-0 my-auto">
                                        {o({ cv })}
                                    </li>
                                ))}

                                <li className="pl-12 max-sm:pl-4">
                                    <Status status={cv.status} cls={accentClass}/>
                                </li>
                            </ul>
                        </div>

                        <a href="#about" className="basis-1/3 max-sm:basis-full my-4 mx-auto">
                            <HeroImage />
                        </a>
                    </div>
                    <div className="flex flex-row text-lg font-medium my-14 max-lg:flex-col">
                        <div
                            className={[
                                'my-auto whitespace-pre text-gray-900 pr-4 mr-2 text-center',
                                'max-sm:pr-0 max-sm:mx-auto max-lg:mb-5',
                            ].join(' ')}
                        >
                            Tech Stack
                        </div>
                        <div className="flex justify-center align-middle">
                            <TechStack techStack={cv.techStack} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
