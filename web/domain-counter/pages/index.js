import Layout from "../comps/CoolLayout";
import Link from 'next/link';

const NewsLink = props => (
    <li>
        <Link href="/newsblocks/[post]" as={`/newsblocks/${props.post}`}>
            <a>{props.post}</a>
        </Link>
    </li>
);


export default function News() {
    return(
        <Layout>
            <h1>News and things I want to share</h1>
            <ul>
                <NewsLink post="Hello-B2B-software" />
                <NewsLink post="Pixel-Perfection" />
                <NewsLink post="b2b-software" />
            </ul>
        </Layout>
    );
}


