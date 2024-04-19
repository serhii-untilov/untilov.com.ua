export type MenuItemProps = {
    name: string;
    onSelect: () => void;
};

export function MenuItem(props: MenuItemProps) {
    const { name, onSelect } = props;
    const href = `#${name}`;
    return (
        <li className="text-center">
            <a
                href={href}
                className="capitalize text-gray-900 hover:text-blue-500 ml-4 max-md:ml-0"
                onClick={() => {
                    onSelect ? onSelect() : null;
                }}
            >
                {name}
            </a>
        </li>
    );
}
