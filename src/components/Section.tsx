import { ReactNode } from 'react';

export type SectionProps = {
    name: string;
    index: number;
    page: ReactNode;
};

const Section = (props: SectionProps) => {
    const { name, index, page } = props;
    return (
        <div
            id={name}
            className={[
                'w-full min-h-fit',
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white',
                !index ? 'h-screen max-lg:h-fit max-lg:pt-14' : 'h-fit pt-14',
            ].join(' ')}
        >
            <div className="w-full h-full max-w-5xl py-8 sm:p-2 md:p-12 mx-auto">{page}</div>
        </div>
    );
};

export default Section;
