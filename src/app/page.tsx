import { Header } from '@/components/Header';
import { promises as fs } from 'fs';

export default async function Home() {
    const file = await fs.readFile(process.cwd() + '/data/cv.json', 'utf8');
    const cv = JSON.parse(file);

    return (
        <>
            <Header cv={cv} />
            <main className="font-sans flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 max-w-5xl w-full items-center justify-between lg:flex">
                    <section id="home"></section>
                    <section id="about"></section>
                    <section id="projects"></section>
                    <section id="experience"></section>
                    <section id="education"></section>
                    <section id="skills"></section>
                    <section id="contact"></section>
                    <footer></footer>
                </div>
            </main>
        </>
    );
}
