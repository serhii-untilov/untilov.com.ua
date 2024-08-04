import Image from 'next/image';
import { ReactNode } from 'react';
import Tooltip from './ui/Tooltip';
import TechStackImage from './TechStackImage';

export function TechStack({ techStack }) {
    return (
        <>
            {techStack && (
                <div className="flex flex-row gap-3 flex-wrap justify-center">
                    {techStack?.map((imageName: string, index: number) => {
                        return <TechStackImage key={index} index={index} imageName={imageName} />;
                    })}
                </div>
            )}
        </>
    );
}
