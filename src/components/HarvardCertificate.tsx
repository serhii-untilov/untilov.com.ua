import Image from 'next/image';

const HarvardCertificate = ({ education }) => {
    return (
        <Image
            src={education.certificateImage ?? '/files/CertificateHarvardX.png'}
            alt="Certificate image"
            className="rounded-2xl mx-auto"
            width={210}
            height={150}
        />
    );
};

export default HarvardCertificate;
