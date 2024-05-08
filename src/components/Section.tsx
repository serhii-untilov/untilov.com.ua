import { ReactNode } from 'react';

export type SectionProps = {
    name: string;
    index: number;
    page: ReactNode;
};

export function Section(props: SectionProps) {
    const { name, index, page } = props;

    return (
        <div
            id={name}
            className={[
                'w-full min-h-fit',
                index % 2 === 0 ? 'bg-gray-100' : 'bg-white',
                !index ? 'h-screen max-lg:h-fit max-lg:pt-12' : 'h-fit pt-12',
            ].join(' ')}
        >
            <div className="w-full h-full max-w-5xl py-8 sm:p-2 md:p-12 mx-auto">{page}</div>
        </div>
    );
}
