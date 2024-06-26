'use client';

import { useState } from 'react';
import { MenuItem } from './MenuItem';
import Image from 'next/image';

export function Header(props: any) {
    const { cv, menu } = props;
    const [isOpen, setIsOpen] = useState(false);

    const generateMenu = () => {
        return menu.map((item: string, index: number) => (
            <MenuItem
                key={index}
                name={item}
                onSelect={() => {
                    setIsOpen(false);
                }}
            />
        ));
    };

    return (
        <>
            <div className="relative">
                <header
                    className={[
                        'flex',
                        'justify-center',
                        'align-middle',
                        'w-full',
                        'h-16',
                        'px-12',
                        'fixed top-0 left-0 right-0',
                        'bg-white',
                        'shadow-bottom',
                        'z-40',
                        'max-md:px-6',
                        // 'max-w-screen-2xl',
                    ].join(' ')}
                >
                    <div
                        className={[
                            'flex',
                            'w-full h-full max-w-screen-2xl',
                            'justify-between',
                            'align-middle',
                        ].join(' ')}
                    >
                        <a
                            href="#"
                            className="group my-auto text-gray-900 hover:text-blue-500 font-extrabold text-lg transition-all"
                        >
                            <div className="mr-5 inline">
                                <Image
                                    src="/favicon.svg"
                                    alt={'Logo image'}
                                    className="rounded inline max-lg:animate-rotate group-hover:animate-rotate"
                                    width={32}
                                    height={32}
                                    quality={100}
                                />
                            </div>
                            <div className="h-full inline align-middle">{cv.site.label}</div>
                        </a>

                        <ul
                            className={
                                'font-semibold my-auto max-md:sr-only flex flex-wrap text-gray-900'
                            }
                        >
                            {generateMenu()}
                        </ul>

                        <button
                            id="menu-button"
                            className="sr-only max-md:not-sr-only flex flex-col justify-center self-center"
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
                                className="w-8 h-8 text-gray-900 hover:text-blue-500 transition-all"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                    </div>
                </header>
            </div>
            <aside
                className={[
                    isOpen ? 'translate-x-0' : '-translate-x-full',
                    'transform top-0 left-0 w-96 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-50',
                    'flex flex-col',
                ].join(' ')}
            >
                <div
                    className={[
                        'flex',
                        'w-full',
                        'h-16',
                        'px-12',
                        'fixed',
                        'bg-white',
                        'z-40',
                        'justify-between',
                        'align-middle',
                        'max-md:px-6',
                    ].join(' ')}
                >
                    <button
                        id="menu-button"
                        className="h-16 ml-auto px-1"
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
                            className="w-8 h-8 text-gray-900 hover:text-blue-500 transition-all"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <ul className={'font-semibold my-auto flex flex-col align-middle  gap-8 text-xl'}>
                    {generateMenu()}
                </ul>
            </aside>
        </>
    );
}
