import { ReactNode } from 'react';

export type SectionProps = {
    name: string;
    index: number;
    page: ReactNode;
};

export function Section(props: SectionProps) {
    const { name, index, page } = props;
    const bgColor = index % 2 === 0 ? 'bg-gray-50' : 'bg-white';
    const className = `w-full min-h-fit ${
        !index ? 'h-screen min-h-full max-sm:pt-12' : 'h-fit'
    } ${bgColor}`;

    return (
        <div id={name} className={className}>
            <div className="w-full h-full max-w-5xl py-8 sm:p-2 md:p-12 mx-auto">{page}</div>
        </div>
    );
}
