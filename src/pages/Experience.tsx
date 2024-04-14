import { PageTitle } from '@/components/PageTitle';
import { ExperienceItem } from '@/components/ExperienceItem';
import Image from 'next/image';

export function Experience(cv: any) {
    const generateExperience = () => {
        return cv?.experience?.map((element: any, index: number) => {
            return (
                <ExperienceItem key={index} experienceItem={element} className="text-gray-700" />
            );
        });
    };

    return (
        <div className="flex flex-col h-fit justify-center gap-1 relative">
            <PageTitle>Experience</PageTitle>
            {/* <Image
                src="/images/blue-ball.png"
                alt="Ball image"
                width={200}
                height={200}
                className="absolute top-90 left-0 z-0 opacity-25"
            />
            <Image
                src="/images/purple-ball.png"
                alt="Ball image"
                width={150}
                height={150}
                className="absolute top-10 right-10 z-0 opacity-25"
            />
            <Image
                src="/images/blue-ball.png"
                alt="Ball image"
                width={100}
                height={100}
                className="absolute bottom-0 right-96 z-0 opacity-25"
            /> */}
            <div className="flex flex-row flex-wrap z-10">{generateExperience()}</div>
        </div>
    );
}
