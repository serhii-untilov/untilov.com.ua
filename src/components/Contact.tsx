import { PageTitle } from '@/components/PageTitle';
import Image from 'next/image';

export function Contact(cv: any) {
    return (
        <div className="flex flex-col justify-start gap-8 flex-wrap min-h-screen px-4">
            <PageTitle>Contact</PageTitle>
            <div className="flex flex-row gap-8 justify-between flex-wrap max-md:flex-col">
                <a
                    href={cv.location.link}
                    target="_blank"
                    className="flex flex-row gap-2 align-middle max-md:flex-col max-md:mx-auto"
                >
                    <div className="rounded-full p-3 m-auto drop-shadow-md bg-white fill-blue-500 border-2 border-gray-100 hover:border-blue-200 hover:bg-blue-50 hover:scale-105 transition-all">
                        <Image src="/images/map.svg" alt="Location" width={28} height={28} />
                    </div>
                    <div className="flex flex-col justify-center h-fill">
                        <h3 className="font-bold text-gray-700 max-md:text-center">Location</h3>
                        <div className="text-gray-600 max-md:text-center">{cv.location.label}</div>
                    </div>
                </a>
                <a
                    href={`mailto:${cv.email}?subject=Work Proposal`}
                    target="_blank"
                    className="flex flex-row gap-2 align-middle max-md:flex-col max-md:mx-auto"
                >
                    <div className="rounded-full p-3 m-auto drop-shadow-md bg-white fill-blue-500 stroke-blue-500 border-2 border-gray-100 hover:border-blue-200 hover:bg-blue-50 hover:scale-105 transition-all">
                        <Image
                            src="/images/email.svg"
                            alt="Email"
                            width={28}
                            height={28}
                            className="fill-blue-500 stroke-blue-500"
                        />
                    </div>
                    <div className="flex flex-col justify-center h-fill">
                        <h3 className="font-bold text-gray-700 max-md:text-center">Mail</h3>
                        <div className="text-gray-600 max-md:text-center">{cv.email}</div>
                    </div>
                </a>
                <a
                    href={cv.cv}
                    target="_blank"
                    className="flex flex-row gap-2 align-middle max-md:flex-col max-md:mx-auto"
                >
                    <div className="rounded-full p-3 m-auto drop-shadow-md bg-white fill-blue-500 border-2 border-gray-100 hover:border-blue-200 hover:bg-blue-50 hover:scale-105 transition-all">
                        <Image
                            src="/images/pdf.svg"
                            alt="Download CV Image"
                            width={28}
                            height={28}
                        />
                    </div>
                    <div className="flex flex-col justify-center h-fill">
                        <h3 className="font-bold text-gray-700 max-md:text-center">Download CV</h3>
                        <div className="text-gray-600 max-md:text-center">
                            {extractFileName(cv.cv)}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export function extractFileName(path: string) {
    return path.replace(/^.*[\\/]/, '');
}
