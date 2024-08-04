import Image from 'next/image';
import { ReactNode } from 'react';
import Tooltip from './ui/Tooltip';

export function TechStack(props: any) {
    const { techStack } = props;
    const generateStack = () => {
        return techStack?.map((element: string, index: number) => (
            <Tooltip key={index} message={element}>
                <Image
                    src={`/images/${element}.svg`}
                    alt={`${element} Logo`}
                    className="hover:-translate-y-1 transition-all cursor-pointer my-auto"
                    width={38}
                    height={38}
                    priority
                />
            </Tooltip>
        ));
    };
    return <div className="flex flex-row gap-3 flex-wrap justify-center">{generateStack()}</div>;
}
