import { PageSubTitle } from '@/components/PageSubTitle';
import { PageTitle } from '@/components/PageTitle';
import Image from 'next/image';

export function About(cv: any) {
    const generateAbout = () => {
        return cv?.about?.description?.map((element: string, index: number) => {
            return <p key={index}>{element}</p>;
        });
    };

    return (
        <div className="flex flex-col h-full justify-center gap-8">
            <div className="flex flex-row justify-between gap-16 grow-0 shrink-0">
                <div className="flex-none mt-24">
                    <a href="#projects">
                        <Image
                            src="/images/desk.webp"
                            alt={'Desk image'}
                            className="rounded-2xl opacity-75 border-2 border-gray-200"
                            width={410}
                            height={350}
                        />
                    </a>
                </div>
                <div className="flex flex-col gap-6">
                    <PageTitle>About Me</PageTitle>
                    {cv?.about?.title ? (
                        <PageSubTitle>
                            {cv?.about?.title}
                            <span className="my-8">&nbsp;&nbsp;&nbsp;</span>
                            <a href="#contact">
                                <Image
                                    src="/images/map-pin.svg"
                                    alt="Map pin image"
                                    className="opacity-50 inline hover:animate-bounce transition-all cursor-pointer"
                                    width={12}
                                    height={12}
                                    priority
                                />
                            </a>
                        </PageSubTitle>
                    ) : null}
                    <div className="flex flex-col gap-6 text-gray-700">{generateAbout()}</div>
                </div>
            </div>
        </div>
    );
}
