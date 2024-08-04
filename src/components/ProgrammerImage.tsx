import Image from 'next/image';

const ProgrammerImage = () => {
    return (
        <Image
            src="/images/programmer.png"
            alt={'Programmer image'}
            className="m-auto p-10"
            width={160}
            height={160}
        />
    );
};

export default ProgrammerImage;
