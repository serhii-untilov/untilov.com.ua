import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    href: string;
}

export function ButtonLink(props: Props) {
    const { href, children } = props;

    if (!href) {
        return (
            <div className="bg-white text-blue-500 w-full border-2 border-solid max-w-48 font-medium rounded-lg text-center text-sm px-5 py-2 border-gray-200  cursor-not-allowed">
                {children}
            </div>
        );
    }
    return (
        <a
            href={href}
            target="_blank"
            className="bg-white text-blue-500 w-full border-2 border-solid max-w-48 font-medium rounded-lg text-center text-sm px-5 py-2 border-gray-200 hover:border-blue-200 "
        >
            {children}
        </a>
    );
}
