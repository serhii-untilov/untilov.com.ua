import { DownloadCV } from '@/components/DownloadCV';
import { PageTitle } from '@/components/PageTitle';
import Image from 'next/image';

export function Contact(cv: any) {
    return (
        <div className="flex flex-col h-full justify-center gap-8">
            <PageTitle>Contact</PageTitle>
            <div className="flex flex-row gap-16">
                <a href={'#dummy'} className="flex flex-row gap-4 align-middle">
                    <div className="rounded-full p-4 drop-shadow-md bg-white fill-blue-500 border-2 border-gray-100">
                        <Image src="/images/map.svg" alt="Location" width={28} height={28} />
                    </div>
                    <div>
                        <h3 className="font-bold">Location</h3>
                        <div className="text-gray-600">{cv.location}</div>
                    </div>
                </a>
                <a
                    href={`mailto:${cv.email}?subject=Work Proposal`}
                    className="flex flex-row gap-4 align-middle"
                >
                    <div className="rounded-full p-4 drop-shadow-md bg-white fill-blue-500 stroke-blue-500 border-2 border-gray-100">
                        <Image
                            src="/images/email.svg"
                            alt="Email"
                            width={28}
                            height={28}
                            className="fill-blue-500 stroke-blue-500"
                        />
                    </div>
                    <div>
                        <h3 className="font-bold">Mail</h3>
                        <div className="text-gray-600">{cv.email}</div>
                    </div>
                </a>
                <DownloadCV cv={cv} />
            </div>
        </div>
    );
}
