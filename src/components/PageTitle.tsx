import { PropsWithChildren } from 'react';

interface PageTitleProps extends PropsWithChildren {
    className?: string | undefined;
}

export function PageTitle(props: PageTitleProps) {
    return (
        <h2
            className="text-lg uppercase font-extrabold text-blue-500 w-full max-sm:text-center"
            {...props}
        >
            {props.children}
        </h2>
    );
}
