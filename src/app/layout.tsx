import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { getCV } from '@/utils/cv';

const inter = Inter({ subsets: ['latin'] });

const cv = await getCV();

export const metadata: Metadata = {
    title: `${cv.name} | ${cv.job}`,
    description: `${cv.name} | ${cv.job}`,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
