import Image from 'next/image';

const CertificateImage = ({ image }) => {
    return (
        <>
            {image && (
                <Image
                    src={image}
                    alt="Certificate image"
                    className="rounded-2xl mx-auto"
                    width={210}
                    height={150}
                />
            )}
        </>
    );
};

export default CertificateImage;
