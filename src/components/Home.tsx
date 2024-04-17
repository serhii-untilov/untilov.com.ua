import { Status } from '@/components/Status';
import { TechStack } from '@/components/TechStack';
import Image from 'next/image';

export function Home(cv: any) {
    return (
        <div className="flex flex-col h-full justify-center max-md:justify-normal max-md:mx-4">
            <div className="flex flex-row justify-between gap-8 max-md:gap-0 max-md:flex-col-reverse max-md:justify-start">
                <div className="flex flex-col justify-around basis-2/3 max-md:basis-full">
                    <h2 className="text-5xl font-extrabold text-gray-800 max-md:text-center mb-4">
                        {cv.job}
                    </h2>

                    <h2 className="text-gray-700 text-lg mb-6">{cv.brief}</h2>

                    <ul className="flex flex-row gap-4 justify-self-center">
                        {cv.socialMedia.linkedin ? (
                            <li>
                                <a href={cv.socialMedia.linkedin}>
                                    <Image
                                        src="/images/linkedin.svg"
                                        alt="LinkedIn Logo"
                                        width={32}
                                        height={32}
                                        priority
                                        className="h-full my-auto"
                                    />
                                </a>
                            </li>
                        ) : null}
                        {cv.socialMedia.github ? (
                            <li>
                                <a href={cv.socialMedia.github}>
                                    <Image
                                        src="/images/github.svg"
                                        alt="GitHub Logo"
                                        width={32}
                                        height={32}
                                        priority
                                        className="h-full my-auto"
                                    />
                                </a>
                            </li>
                        ) : null}
                        {cv.socialMedia.harvardx ? (
                            <li>
                                <a href={cv.socialMedia.harvardx}>
                                    <Image
                                        src="/images/harvardx.svg"
                                        alt="HarvardX Logo"
                                        width={48}
                                        height={32}
                                        priority
                                        className="h-full my-auto"
                                    />
                                </a>
                            </li>
                        ) : null}
                        <li className="pl-12">
                            <Status cv={cv} />
                        </li>
                    </ul>
                </div>

                <a href="#about" className="basis-1/3 max-md:basis-full my-4 mx-auto">
                    <Image
                        src="/images/hero.png"
                        alt={'Hero image'}
                        className="animate-morph border-4 border-gray-700 brightness-125 shadow-2xl"
                        width={300}
                        height={300}
                        priority
                        quality={100}
                    />
                </a>
            </div>
            <div className="flex flex-row text-lg font-medium my-14 max-md:flex-col">
                <div
                    className={[
                        'my-auto',
                        'whitespace-pre',
                        'text-gray-900',
                        'pr-4',
                        'mr-2',
                        'text-center',
                        // 'border-r-2 border-solid border-gray-500',
                        // 'max-md:border-b-2 max-md:border-r-0',
                        'max-md:pr-0',
                        'max-md:mx-auto',
                        'max-md:pb-3',
                        'max-md:mb-5',
                    ].join(' ')}
                >
                    Tech Stack
                </div>
                <div className="flex justify-center align-middle">
                    <TechStack techStack={cv.techStack} />
                </div>
            </div>
        </div>
    );
}
