import About from '../pages/About';
import Contact from '../pages/Contact';
import Education from '../pages/Education';
import Experience from '../pages/Experience';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Section from './Section';
import Skills from '../pages/Skills';

const pagesMap: { [key: string]: ({ cv }) => JSX.Element } = {
    home: Home,
    about: About,
    projects: Projects,
    experience: Experience,
    education: Education,
    skills: Skills,
    contact: Contact,
};

const Pages = ({ cv }) => {
    return Object.keys(cv.pages)
        .filter((key: string) => cv.pages[key] === 'true')
        .map((key: string) => {
            return { name: key, page: pagesMap[key] };
        })
        .map((item: any, index: number) => (
            <Section name={item.name} key={index} index={index} page={item.page({ cv })} />
        ));
};

export default Pages;
