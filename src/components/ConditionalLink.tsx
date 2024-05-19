import { FC, PropsWithChildren } from 'react';

interface ConditionalLinkProps extends PropsWithChildren {
    href: string;
}

export function ConditionalLink(props: ConditionalLinkProps) {
    const { href, children } = props;
    if (href) {
        return (
            <a href={href} target="_blank">
                {children}
            </a>
        );
    } else {
        return <div>{children}</div>;
    }
}
