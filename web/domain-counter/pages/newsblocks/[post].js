import { useRouter } from 'next/router';
import Layout from '../../comps/CoolLayout';

export default function NewsBlock() {
    const router = useRouter();

    return (
        <Layout>
            <h1>{router.query.post}</h1>
            <p>This is the news feed block content</p>
        </Layout>
    )
}