import { Header } from '@/components/Header';
import { Section } from '@/components/Section';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';
import { Education } from '@/pages/Education';
import { Experience } from '@/pages/Experience';
import { Home } from '@/pages/Home';
import { Projects } from '@/pages/Projects';
import { Skills } from '@/pages/Skills';
import { promises as fs } from 'fs';

const sectionList = [
    { name: 'home', page: Home },
    { name: 'about', page: About },
    { name: 'projects', page: Projects },
    { name: 'experience', page: Experience },
    { name: 'education', page: Education },
    { name: 'skills', page: Skills },
    { name: 'contact', page: Contact },
];

export default async function Main() {
    const file = await fs.readFile(process.cwd() + '/data/cv.json', 'utf8');
    const cv = JSON.parse(file);
    const availableSectionList = sectionList.filter(
        (item) => !cv[item.name] || cv[item.name].length,
    );
    const menu = availableSectionList.map((item) => item.name);

    const generateSections = () => {
        return availableSectionList.map((item, index: number) => (
            <Section name={item.name} key={index} index={index} page={item.page(cv)} />
        ));
    };

    return (
        <>
            <Header cv={cv} menu={menu} />
            {generateSections()}
            <footer></footer>
        </>
    );
}
