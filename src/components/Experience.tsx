import { ExperienceItem } from '@/components/ExperienceItem';
import { PageTitle } from '@/components/PageTitle';

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

            {/* <div className="h-36 w-36 absolute top-90 left-0 z-0 animate-morph brightness-125  bg-green-300 transition-all rotate-45" />
            <div className="h-28 w-28 absolute top-20 right-10 z-0 animate-morph brightness-125  bg-blue-300 transition-all" />
            <div className="h-20 w-20 absolute bottom-0 right-96 z-0 animate-morph brightness-125  bg-pink-300 transition-all rotate-45" /> */}

            <div className="flex flex-row flex-wrap z-10">{generateExperience()}</div>
        </div>
    );
}