import { useRouter } from 'next/router';
import Layout from '../comps/CoolLayout';

const Content = () => {
    const router = useRouter();
// get title prop from query of url.
    return (
        <Layout>
            <h1>{router.query.title}</h1>
            <p> this is the news feed content</p>
        </Layout>
    );
};

const Page = () => (
    <Layout>
        <Content />
    </Layout>
)
export default Page;