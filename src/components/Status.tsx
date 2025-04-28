
export const defaultClass = [
    '-rotate-12 rounded border-dashed text-center border-2 border-blue-500',
    'font-bold text-blue-500 w-fit p-4 uppercase'
].join(' ');

export const accentClass = [
    '-rotate-12 rounded border-dashed text-center border-2 border-blue-500',
    'font-bold text-blue-500 w-fit p-4 uppercase',
    'hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500',
    'hover:to-pink-500 hover:border-solid hover:border-white transition-all'
].join(' ');

type Props = {
    status?: { description: [string], link?: string },
    cls?: string|undefined
};

export function Status({status, cls}: Props) {
    const isEnabled = !!status?.description?.length;
    return (
        <>
            {isEnabled && (
                <a href={status.link}>
                    <div className={cls || defaultClass} >
                        {status.description.map((element: string, index: number) => {
                            return (
                            <div key={index}>{element}</div>
                        );
                        })}
                    </div>
                </a>
            )}
        </>
    );
}
