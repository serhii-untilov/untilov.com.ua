import Image from 'next/image';
import { PageSubTitle } from './PageSubTitle';
import { ConditionalLink } from './ui/ConditionalLink';

const EducationTitle = ({ education }) => {
    if (education.degree && education.profile) {
        return `${education.degree} in ${education.profile}`;
    }
    return education.degree ?? education.profile;
};

export default EducationTitle;
