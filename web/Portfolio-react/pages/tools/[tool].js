import { useRouter } from 'next/router';
import Layout from '../../comps/CoolLayout';

export default function Tools() {
    const router = useRouter();

    return (
        <Layout>
            <h1>{router.query.tool}</h1>
            <p>This is the default tool page</p>
        </Layout>
    )
}