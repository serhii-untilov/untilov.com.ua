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
        <div className="flex flex-row justify-between h-full gap-16 max-md:flex-col mx-4 max-md:justify-center max-md:gap-8">
            <div className="basis-1/2 max-md:basis-full">
                <a href="#projects" className="relative">
                    <Image
                        src="/images/desk.webp"
                        alt={'Desk image'}
                        className="rounded-2xl border-2 border-gray-200 w-full"
                        width={410}
                        height={350}
                    />
                    <div className="absolute -right-10 -bottom-20 rounded-full bg-white h-48 w-48 max-lg:sr-only">
                        <div className="relative w-full h-full">
                            <Image
                                src="/images/ring-text.svg"
                                alt={'Desk image'}
                                className="absolute left-0 top-0 rounded-full h-48 w-48 animate-spinSlow m-auto p-2"
                                width={200}
                                height={200}
                            />
                            <Image
                                src="/images/programmer.png"
                                alt={'Desk image'}
                                className="m-auto p-10"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                </a>
            </div>

            <div className="flex flex-col gap-6 basis-1/2 max-md:basis-full">
                <PageTitle>About Me</PageTitle>
                {cv?.about?.title ? <PageSubTitle>{cv?.about?.title}</PageSubTitle> : null}
                <div className="flex flex-col gap-6 text-gray-700">{generateAbout()}</div>
            </div>
        </div>
    );
}
