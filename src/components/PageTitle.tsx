import { PropsWithChildren } from 'react';

interface PageTitleProps extends PropsWithChildren {
    className?: string | undefined;
}

export function PageTitle(props: PageTitleProps) {
    return (
        <h2 className="mt-24 text-lg uppercase font-extrabold text-blue-500" {...props}>
            {props.children}
        </h2>
    );
}
