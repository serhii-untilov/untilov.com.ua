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
                        <Image
                            src="/waving-hand.svg"
                            alt="Waving hand image"
                            className="inline opacity-50 origin-bottom-right hover:rotate-12 transition-all cursor-pointer"
                            width={62}
                            height={62}
                            priority
                        />
                    </h2>

                    <h2 className="max-w-lg text-gray-700 text-lg mb-6">
                        {cv.about}
                        <span className="my-8">&nbsp;&nbsp;&nbsp;</span>
                        <Image
                            src="/map-pin.svg"
                            alt="Map pin image"
                            className="inline opacity-50 hover:animate-bounce transition-all cursor-pointer"
                            width={12}
                            height={12}
                            priority
                        />
                    </h2>

                    <ul className="flex gap-4">
                        <li>
                            <a href={cv['social-media'].linkedin}>
                                <Image
                                    src="/linkedin.svg"
                                    alt="LinkedIn Logo"
                                    width={32}
                                    height={32}
                                    priority
                                />
                            </a>
                        </li>
                        <li>
                            <a href={cv['social-media'].github}>
                                <Image
                                    src="/github.svg"
                                    alt="GitHub Logo"
                                    width={32}
                                    height={32}
                                    priority
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-auto justify-center">
                    <Image
                        src="/hero.png"
                        alt={'Hero image'}
                        className="animate-morph border-4 border-gray-700"
                        width={300}
                        height={300}
                        priority
                    />
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
