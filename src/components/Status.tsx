export function Status(props: any) {
    const { cv } = props;

    if (!cv?.status?.length) {
        return <></>;
    }

    const generateStatusList = () => {
        return cv.status.map((element: string, index: number) => {
            return <div key={index}>{element}</div>;
        });
    };

    return (
        <a href="#contact">
            <div className="-rotate-12 rounded border-dashed border-2 border-gray-600 font-bold text-gray-600 w-fit p-4 uppercase hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:border-solid hover:border-white transition-all">
                {generateStatusList()}
            </div>
        </a>
    );
}
