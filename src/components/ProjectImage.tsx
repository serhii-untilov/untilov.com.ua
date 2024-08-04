import Image from 'next/image';

const ProjectImage = ({ image }) => {
    return (
        <Image
            src={image}
            alt={'Project image'}
            className={[
                'basis-1/2 border-2 rounded-md max-md:basis-full hover:scale-105 ',
                'transition-all border-white hover:border-blue-200 mx-auto',
            ].join(' ')}
            width={410}
            height={350}
            quality={100}
        />
    );
};

export default ProjectImage;
