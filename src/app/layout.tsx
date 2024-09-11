import { getCV } from '@/utils/cv';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const cv = await getCV();

export const metadata: Metadata = {
    title: `${cv.name} | ${cv.job}`,
    description: `${cv.name} | ${cv.job}`,
};

export default function RootLayout(props: PropsWithChildren) {
    return (
        <html lang="en" className="scroll-smooth focus:scroll-auto max-md:scroll-auto">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <meta name="freelancehunt" content="19070ee94ecf3d4" />
            </head>
            <body className={inter.className}>{props.children}</body>
        </html>
    );
}
