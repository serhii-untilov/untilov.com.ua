import Image from 'next/image';
import { ReactNode } from 'react';

export function TechStack(props: any) {
    const { cv } = props;
    const generateStack = () => {
        return cv['tech-stack'].map((element: string, index: number) => (
            // <li key={index}>
            <Image
                key={index}
                src={`/${element}.svg`}
                alt={`${element} Logo`}
                // className="hover:animate-bounce cursor-pointer"
                className="hover:-translate-y-2 transition-all cursor-pointer"
                width={50}
                height={50}
                priority
            />
            // </li>
        ));
    };
    return <div className="my-auto flex flex-row gap-3 align-middle">{generateStack()}</div>;
}
