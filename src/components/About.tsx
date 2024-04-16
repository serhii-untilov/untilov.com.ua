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
        <div className="flex flex-row justify-between h-full gap-16 max-sm:flex-col mx-4">
            <div className="basis-1/2 max-sm:basis-full">
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
            <div className="flex flex-col gap-6 basis-1/2 max-sm:basis-full">
                <PageTitle>About Me</PageTitle>
                {cv?.about?.title ? <PageSubTitle>{cv?.about?.title}</PageSubTitle> : null}
                <div className="flex flex-col gap-6 text-gray-700">{generateAbout()}</div>
            </div>
        </div>
    );
}
