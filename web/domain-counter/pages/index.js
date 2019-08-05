import Layout from "../comps/CoolLayout";
import Link from "next/link";
import fetch from 'isomorphic-unfetch';

const Index = props => (
    <Layout>
        <h1> Welcome to Alex's portfolio website </h1>
        <ul>
            {props.planets.map(planet => (
                <li key={planet.id}>
                    <Link href="/newsblocks/[post]" as={`/newsblocks/${planet.id}`}>
                        <a>{planet.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

Index.getInitialProps = async function() {
    const result = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=qGTopLth5OWVsNEKgWIDiLs7PDPsUM5aox53E1BC');
    const data = await result.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        planets: data.map(entry => entry.planet)
    };
};
export default Index;