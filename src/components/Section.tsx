import { ReactNode } from 'react';

export type SectionProps = {
    name: string;
    index: number;
    page: ReactNode;
};

export function Section(props: SectionProps) {
    const { name, index, page } = props;
    const bgColor = index % 2 === 0 ? 'bg-gray-50' : 'bg-white';
    const pt = index === 0 ? 'pt-20' : '';
    const className = `w-full ${!index ? 'h-screen' : 'h-fit min-h-max'} ${bgColor} ${pt}`;

    return (
        <div id={name} className={className}>
            <div className="w-full h-full max-w-5xl sm:p-2 md:p-12 mx-auto">{page}</div>
        </div>
    );
}
