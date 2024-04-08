import Image from 'next/image';
import { ReactNode } from 'react';

export function TechStack(props: any) {
    const { techStack } = props;
    const generateStack = () => {
        return techStack?.map((element: string, index: number) => (
            // <div key={index} className="group relative w-max">
            <a href="#projects" key={index}>
                <Image
                    src={`/${element}.svg`}
                    alt={`${element} Logo`}
                    // className="hover:animate-bounce cursor-pointer"
                    className="hover:-translate-y-2 transition-all cursor-pointer"
                    width={50}
                    height={50}
                    priority
                />
            </a>
            // {/* <span className="pointer-events-none absolute -top-8 left-0 text-center w-max opacity-0 transition-opacity group-hover:opacity-100 text-sm text-gray-500">
            //     {element}
            // </span> */}
            // </div>
            // </li>
        ));
    };
    return <div className="my-auto flex flex-row gap-3 align-middle">{generateStack()}</div>;
}
