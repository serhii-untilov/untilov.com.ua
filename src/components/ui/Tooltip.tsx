import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    message: string;
}

export default function Tooltip(props: Props) {
    const { message, children } = props;

    return (
        <div className="group relative w-max my-auto">
            {children}
            <span
                className={[
                    'absolute -top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white ',
                    'group-hover:scale-100 whitespace-nowrap transition-all',
                ].join(' ')}
            >
                {message}
            </span>
        </div>
    );
}
