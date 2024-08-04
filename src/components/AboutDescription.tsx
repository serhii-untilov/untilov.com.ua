const AboutDescription = ({ cv }) => {
    return cv?.about?.description?.map((element: string, index: number) => {
        return <p key={index}>{element}</p>;
    });
};

export default AboutDescription;
