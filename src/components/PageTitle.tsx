import { PropsWithChildren } from 'react';

export function PageTitle(props: PropsWithChildren) {
    return <h2 className="text-lg uppercase font-extrabold text-blue-500">{props.children}</h2>;
}
