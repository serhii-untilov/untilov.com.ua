import { PropsWithChildren } from 'react';

export function PageSubTitle(props: PropsWithChildren) {
    return <h2 className="text-2xl font-bold text-slate-800">{props.children}</h2>;
}
