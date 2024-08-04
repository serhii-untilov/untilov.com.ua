import LogoImage from './LogoImage';

const AppTitle = ({ cv }) => {
    return (
        <a
            href="#"
            className="group my-auto text-gray-900 hover:text-blue-500 font-extrabold text-lg transition-all"
        >
            <div className="mr-5 inline">
                <LogoImage />
            </div>
            <div className="h-full inline align-middle">{cv.site.label}</div>
        </a>
    );
};

export default AppTitle;
