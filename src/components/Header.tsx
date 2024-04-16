'use client';

import { useState } from 'react';
import { MenuItem } from './MenuItem';

export function Header(props: any) {
    const { cv, menu } = props;
    const [isOpen, setIsOpen] = useState(false);

    const generateMenu = () => {
        return menu.map((item: string, index: number) => <MenuItem key={index} name={item} />);
    };

    return (
        <>
            <header
                className={[
                    'flex',
                    'w-full',
                    'h-16',
                    'px-12',
                    'fixed',
                    'bg-white',
                    'shadow-bottom',
                    'z-40',
                    'justify-between',
                    'align-middle',
                    'max-sm:px-6',
                ].join(' ')}
            >
                <a href="#" className="text-gray-900 hover:text-blue-600 font-extrabold text-lg">
                    {cv.site.label}
                </a>

                <div id="menu" className="font-semibold my-6 max-sm:sr-only">
                    <ul
                        className={
                            'flex gap-4 flex-wrap max-sm:justify-center max-sm:gap-3 max-sm:leading-none max-sm:font-normal'
                        }
                    >
                        {generateMenu()}
                    </ul>
                </div>

                <button
                    id="menu-button"
                    className="sr-only max-sm:not-sr-only flex flex-col justify-center self-center"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-8 h-8 hover:text-blue-500"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        )}
                    </svg>
                </button>

                {/* {isOpen ? (
                <div id="menu" className="font-semibold h-fill">
                    <ul className="flex flex-col align-top justify-top h-dvh gap-8 text-center">
                        {generateMenu()}
                    </ul>
                </div>
            ) : null} */}
            </header>
            <aside
                className={`${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } transform top-0 left-0 w-96 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-50`}
            >
                <h1>Slider</h1>
                <button
                    id="menu-button"
                    className="sr-only max-sm:not-sr-only flex flex-col justify-center self-center"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-8 h-8 hover:text-blue-500"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        )}
                    </svg>
                </button>
            </aside>
        </>
    );
}
