import { Header } from '@/components/Header';
import { Section } from '@/components/Section';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Home } from '@/components/Home';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { promises as fs } from 'fs';

const pagesMap: { [key: string]: (cv: any) => JSX.Element } = {
    home: Home,
    about: About,
    projects: Projects,
    experience: Experience,
    education: Education,
    skills: Skills,
    contact: Contact,
};

export default async function Main() {
    const file = await fs.readFile(process.cwd() + '/data/cv.json', 'utf8');
    const cv = JSON.parse(file);

    const generatePages = (): JSX.Element[] => {
        const pageList = Object.keys(cv.pages)
            .filter((key) => cv.pages[key] === 'true')
            .map((key: string) => {
                return { name: key, page: pagesMap[key] };
            });
        return pageList.map((item, index: number) => (
            <Section name={item.name} key={index} index={index} page={item.page(cv)} />
        ));
    };

    const generateMenu = () => {
        return Object.keys(cv.pages)
            .filter((key) => cv.pages[key] === 'true')
            .map((key) => key);
    };

    return (
        <>
            <Header cv={cv} menu={generateMenu()} />
            {generatePages()}
            <footer></footer>
        </>
    );
}
