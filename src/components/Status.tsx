type Props = {
    status?: [string];
};

export function Status({status}: Props) {
    const isEnabled = !!status?.length;
    return (
        <>
            {isEnabled && (
                <a href="#contact">
                    <div
                        className={[
                            '-rotate-12 rounded border-dashed text-center border-2 border-blue-500',
                            'font-bold text-blue-500 w-fit p-4 uppercase',
                            'hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500',
                            'hover:to-pink-500 hover:border-solid hover:border-white transition-all',
                        ].join(' ')}
                    >
                        {status.map((element: string, index: number) => {
                            return <div key={index}>{element}</div>;
                        })}
                    </div>
                </a>
            )}
        </>
    );
}
