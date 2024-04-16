import { Status } from '@/components/Status';
import { TechStack } from '@/components/TechStack';
import Image from 'next/image';

export function Home(cv: any) {
    return (
        <div className="flex flex-col h-screen justify-center max-sm:justify-normal max-sm:mx-4">
            <div className="flex flex-row justify-between gap-8 max-sm:gap-0 max-sm:flex-col-reverse max-sm:justify-start">
                <div className="flex flex-col justify-around basis-2/3 max-sm:basis-full">
                    <h2 className="text-5xl font-extrabold text-gray-800 max-w-sm max-sm:text-center mb-4">
                        {cv.job}
                    </h2>

                    <h2 className="max-w-lg text-gray-700 text-lg mb-6">{cv.brief}</h2>

                    <ul className="flex flex-row gap-4 content-center">
                        {cv.socialMedia.linkedin ? (
                            <li>
                                <a href={cv.socialMedia.linkedin}>
                                    <Image
                                        src="/images/linkedin.svg"
                                        alt="LinkedIn Logo"
                                        width={32}
                                        height={32}
                                        priority
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
                                        className="mt-1"
                                    />
                                </a>
                            </li>
                        ) : null}
                        <li className="pl-12">
                            <Status cv={cv} />
                        </li>
                    </ul>
                </div>

                <a href="#about" className="basis-1/3 max-sm:basis-full my-4 mx-auto">
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
            <div className="flex flex-row gap-8 text-lg font-medium my-14 max-sm:flex-col">
                <div className="my-auto whitespace-pre text-gray-900">Tech Stack</div>
                <div className="text-gray-500 my-auto">|</div>
                <TechStack techStack={cv.techStack} />
            </div>
        </div>
    );
}
