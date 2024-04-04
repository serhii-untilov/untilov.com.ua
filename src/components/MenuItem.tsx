export type MenuItemProps = {
    name: string;
};

export function MenuItem(props: MenuItemProps) {
    const { name } = props;
    const href = `#${name}`;
    return (
        <li>
            <a href={href} className="capitalize">
                {name}
            </a>
        </li>
    );
}
