import Image from 'next/image';

const RotatedRingImage = () => {
    return (
        <Image
            src="/images/ring-text.svg"
            alt={'Ring text image'}
            className={[
                'absolute left-0 top-0 rounded-full h-40 w-40',
                'animate-spinSlow m-auto p-2',
            ].join(' ')}
            width={160}
            height={160}
        />
    );
};

export default RotatedRingImage;
