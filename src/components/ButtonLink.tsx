import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    href: string;
}

export function ButtonLink(props: Props) {
    const { href, children } = props;
    return (
        <a
            href={href}
            className="bg-blue-50 text-blue-500 w-full border-2 border-solid max-w-48 font-medium rounded-lg text-center text-sm px-5 py-2 border-blue-200 hover:bg-blue-100 shadow-sm"
        >
            {children}
        </a>
    );
}
