const CloseMenuButton = ({ onClick }) => {
    return (
        <button id="menu-button" className="h-16 ml-auto px-1" onClick={onClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8 text-gray-900 hover:text-blue-500 transition-all"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
    );
};

export default CloseMenuButton;
