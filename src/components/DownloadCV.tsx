import Image from 'next/image';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    cv: any;
}

export function DownloadCV(props: Props) {
    const { cv } = props;

    return (
        <a href={cv.cv} className="flex flex-row gap-4 align-middle">
            <div className="rounded-full p-4 drop-shadow-md bg-white fill-blue-500 border-2 border-gray-100">
                <Image src="/images/pdf.svg" alt="Download CV Image" width={28} height={28} />
            </div>
            <div>
                <h3 className="font-bold">Download CV</h3>
                <div className="text-gray-600">{extractFileName(cv.cv)}</div>
            </div>
        </a>
    );
}

function extractFileName(path: string) {
    return path.replace(/^.*[\\/]/, '');
}
