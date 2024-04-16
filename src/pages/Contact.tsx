import { PageTitle } from '@/components/PageTitle';
import Image from 'next/image';

export default function Contact(cv: any) {
    return (
        <div className="flex flex-col justify-start gap-8 flex-wrap min-h-screen">
            <PageTitle>Contact</PageTitle>
            <div className="flex flex-row gap-16 justify-between flex-wrap">
                <a href={cv.location.link} className="flex flex-row gap-4 align-middle">
                    <div className="rounded-full p-4 drop-shadow-md bg-white fill-blue-500 border-2 border-gray-100 hover:border-blue-200 hover:bg-blue-50">
                        <Image src="/images/map.svg" alt="Location" width={28} height={28} />
                    </div>
                    <div className="flex flex-col justify-center h-fill">
                        <h3 className="font-bold text-gray-700">Location</h3>
                        <div className="text-gray-600">{cv.location.label}</div>
                    </div>
                </a>
                <a
                    href={`mailto:${cv.email}?subject=Work Proposal`}
                    className="flex flex-row gap-4 align-middle"
                >
                    <div className="rounded-full p-4 drop-shadow-md bg-white fill-blue-500 stroke-blue-500 border-2 border-gray-100 hover:border-blue-200 hover:bg-blue-50">
                        <Image
                            src="/images/email.svg"
                            alt="Email"
                            width={28}
                            height={28}
                            className="fill-blue-500 stroke-blue-500"
                        />
                    </div>
                    <div className="flex flex-col justify-center h-fill">
                        <h3 className="font-bold text-gray-700">Mail</h3>
                        <div className="text-gray-600">{cv.email}</div>
                    </div>
                </a>
                <a href={cv.cv} className="flex flex-row gap-4 align-middle">
                    <div className="rounded-full p-4 drop-shadow-md bg-white fill-blue-500 border-2 border-gray-100 hover:border-blue-200 hover:bg-blue-50">
                        <Image
                            src="/images/pdf.svg"
                            alt="Download CV Image"
                            width={28}
                            height={28}
                        />
                    </div>
                    <div className="flex flex-col justify-center h-fill">
                        <h3 className="font-bold text-gray-700">Download CV</h3>
                        <div className="text-gray-600">{extractFileName(cv.cv)}</div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export function extractFileName(path: string) {
    return path.replace(/^.*[\\/]/, '');
}
