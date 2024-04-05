import { MenuItem } from './MenuItem';

export function Header(props: any) {
    const { cv, menu } = props;

    const generateMenu = () => {
        return menu.map((item: string, index: number) => <MenuItem key={index} name={item} />);
    };

    return (
        <header className="w-full h-20 fixed flex max-sm:flex-col justify-between align-middle text-black bg-white sm:px-2 md:px-12 mx-auto shadow-bottom z-10">
            <div id="name" className="my-auto">
                <a href="#">
                    <h1 className="max-sm:w-full max-sm:text-center font-extrabold text-lg">
                        {cv.site.label}
                    </h1>
                </a>
            </div>
            <div id="menu" className="max-sm:w-full my-auto font-semibold">
                <ul className="flex gap-4">{generateMenu()}</ul>
            </div>
        </header>
    );
}
