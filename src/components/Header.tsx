import { MenuItem } from './MenuItem';

export function Header(props: any) {
    const { cv } = props;
    const menu = ['home', 'about', 'projects', 'experience', 'education', 'skills', 'contact'];
    const generateMenu = () =>
        menu
            ?.filter((item) => !cv[item] || cv[item].length)
            .map((item: string, index) => <MenuItem key={index} name={item} />);

    return (
        <header className="w-full h-20 absolute flex justify-between align-middle text-black bg-white px-12 shadow-bottom">
            <div id="name" className="my-auto">
                <a href="#">
                    <h1 className="font-extrabold text-lg">{cv.site.label}</h1>
                </a>
            </div>
            <div id="menu" className="my-auto font-semibold">
                <ul className="flex gap-4">{generateMenu()}</ul>
            </div>
        </header>
    );
}
