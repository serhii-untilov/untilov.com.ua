'use client';

import { useMemo, useState } from 'react';
import AppTitle from './AppTitle';
import MenuItem from './ui/MenuItem';
import MenuButton from './MenuButton';
import CloseMenuButton from './CloseMenuButton';

export function Header({ cv }) {
    const [isOpen, setIsOpen] = useState(false);

    const menu = useMemo(
        () =>
            cv?.pages &&
            Object.keys(cv.pages)
                .filter((key) => cv.pages[key] === 'true')
                .map((key) => key)
                .map((item: string, index: number) => (
                    <MenuItem
                        key={index}
                        name={item}
                        onSelect={() => {
                            setIsOpen(false);
                        }}
                    />
                )),
        [cv.pages],
    );

    return (
        <>
            <div className="relative">
                <header
                    className={[
                        'flex justify-center align-middle w-full h-16 px-12 fixed top-0 left-0 right-0',
                        'bg-white shadow-bottom z-40 max-md:px-6',
                    ].join(' ')}
                >
                    <div
                        className={
                            'flex w-full h-full max-w-screen-2xl justify-between align-middle'
                        }
                    >
                        <AppTitle cv={cv} />
                        <ul
                            className={
                                'font-semibold my-auto max-md:sr-only flex flex-wrap text-gray-900'
                            }
                        >
                            {menu}
                        </ul>
                        <MenuButton onClick={() => setIsOpen(!isOpen)} />
                    </div>
                </header>
            </div>
            <aside
                className={[
                    isOpen ? '-translate-x-0' : 'translate-x-full',
                    'transform top-0 right-0 w-80 bg-white fixed h-full overflow-auto ease-in-out transition-all',
                    'duration-300 z-50 flex flex-col',
                ].join(' ')}
            >
                <div
                    className={
                        'flex w-full h-16 px-12 fixed bg-white z-40 justify-between align-middle max-md:px-6'
                    }
                >
                    <CloseMenuButton
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    />
                </div>
                <ul className={'font-semibold my-auto flex flex-col align-middle  gap-8 text-xl'}>
                    {menu}
                </ul>
            </aside>
        </>
    );
}
