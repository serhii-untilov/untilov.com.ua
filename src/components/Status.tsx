export function Status(props: any) {
    const { cv } = props;

    if (!cv?.status?.reduce((a: number, b: string) => a + b.length, 0)) {
        return <></>;
    }

    const generateStatusList = () => {
        return cv.status.map((element: string, index: number) => {
            return <div key={index}>{element}</div>;
        });
    };

    return (
        <a href="#contact">
            {/* <div className="-rotate-12 rounded border-dashed text-center border-2 border-indigo-600 font-bold text-indigo-600 w-fit p-4 uppercase hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:border-solid hover:border-white transition-all"> */}
            <div className="-rotate-12 rounded border-dashed text-center border-2 border-blue-500 font-bold text-blue-500 w-fit p-4 uppercase hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:border-solid hover:border-white transition-all">
                {generateStatusList()}
            </div>
        </a>
    );
}
