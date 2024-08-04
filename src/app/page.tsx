import { Header } from '@/components/Header';
import Pages from '@/components/Pages';
import { getCV } from '@/utils/cv';

export default async function Main() {
    const cv = await getCV();
    return (
        <>
            <Header cv={cv} />
            <Pages cv={cv} />
        </>
    );
}
