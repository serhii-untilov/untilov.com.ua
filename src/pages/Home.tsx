import { TechStack } from '@/components/TechStack';
import Image from 'next/image';

export function Home(cv: any) {
    return (
        <div className="flex flex-col h-full justify-center gap-8">
            <div className="flex flex-row justify-between gap-8">
                <div className="flex flex-col gap-6">
                    <h2 className="text-5xl font-extrabold text-black max-w-sm leading-normal">
                        {cv.job}

                        <span className="my-8">&nbsp;&nbsp;</span>
                        <a href="#experience">
                            <Image
                                src="/waving-hand.svg"
                                alt="Waving hand image"
                                className="inline opacity-50 origin-bottom-right hover:rotate-12 transition-all cursor-pointer"
                                width={62}
                                height={62}
                                priority
                            />
                        </a>
                    </h2>

                    <h2 className="max-w-lg text-gray-700 text-lg mb-6">
                        {cv.brief}
                        <span className="my-8">&nbsp;&nbsp;&nbsp;</span>
                        <a href="#contact">
                            <Image
                                src="/map-pin.svg"
                                alt="Map pin image"
                                className="inline opacity-50 hover:animate-bounce transition-all cursor-pointer"
                                width={12}
                                height={12}
                                priority
                            />
                        </a>
                    </h2>

                    <ul className="flex flex-row gap-4 content-center">
                        {cv['socialMedia'].linkedin ? (
                            <li>
                                <a href={cv['socialMedia'].linkedin}>
                                    <Image
                                        src="/linkedin.svg"
                                        alt="LinkedIn Logo"
                                        width={32}
                                        height={32}
                                        priority
                                    />
                                </a>
                            </li>
                        ) : null}
                        {cv['socialMedia'].github ? (
                            <li>
                                <a href={cv['socialMedia'].github}>
                                    <Image
                                        src="/github.svg"
                                        alt="GitHub Logo"
                                        width={32}
                                        height={32}
                                        priority
                                    />
                                </a>
                            </li>
                        ) : null}
                        {/* {cv['socialMedia'].facebook ? (
                            <li>
                                <a href={cv['socialMedia'].facebook}>
                                    <Image
                                        src="/facebook.svg"
                                        alt="Facebook Logo"
                                        width={32}
                                        height={32}
                                        priority
                                    />
                                </a>
                            </li>
                        ) : null} */}
                        {cv['socialMedia'].harvardx ? (
                            <li>
                                <a href={cv['socialMedia'].harvardx}>
                                    <Image
                                        src="/harvardx.svg"
                                        alt="HarvardX Logo"
                                        width={48}
                                        height={32}
                                        priority
                                        className="mt-1"
                                    />
                                </a>
                            </li>
                        ) : null}
                        {/* {cv.email ? (
                            <li>
                                <a href={'mailto: ' + cv.email}>
                                    <Image
                                        src="/email.svg"
                                        alt="Email Image"
                                        width={32}
                                        height={32}
                                        priority
                                    />
                                </a>
                            </li>
                        ) : null} */}
                    </ul>
                </div>
                <div className="flex flex-auto justify-center">
                    <a href="#about">
                        <Image
                            src="/hero.png"
                            alt={'Hero image'}
                            className="animate-morph border-4 border-gray-700 brightness-125 shadow-2xl"
                            width={300}
                            height={300}
                            priority
                            quality={100}
                        />
                    </a>
                </div>
            </div>
            <div className="flex flex-row gap-8 text-lg font-medium my-28">
                <div className="my-auto whitespace-pre text-black">Tech Stack</div>
                <div className="text-gray-500 my-auto">|</div>
                <TechStack cv={cv} />
            </div>
        </div>
    );
}
