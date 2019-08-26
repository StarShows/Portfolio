import Layout from "../comps/CoolLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const cardStyle = {
  backgroundColor: "#711324",
  border: "solid 1px #e0e0e0",
  borderRadius: "4px",
  padding: "5px",
  color: '#ffffff'
};
const cardLayout = {
  display: "grid",
  gridGap: "10px 20px",
};

const cardLayoutInner = {
  cursor: "pointer"
};




const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <div style={cardLayout}>
      {props.shows.map(show => (
        <div style={cardLayoutInner}>
          <Link href="/newsblocks/[id]" as={`/newsblocks/${show.id}`}>
            <div key={show.id} style={cardStyle}>
              <Link href="/newsblocks/[id]" as={`/newsblocks/${show.id}`}>
                <img src={show.image.medium} />
              </Link>
              <Link href="/newsblocks/[id]" as={`/newsblocks/${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </Layout>
);

function getPosts() {
  return [
      { id: 'avis-portfolio', title: 'Welcome to Avis react portfolio'},
      { id: 'tech-stacks', title: 'Tech Stacks im good with'},
      { id: 'previous-projects', title: 'Projects made by Avi Tannenbaum'}
  ];
}
export default function NewsFeed() {
  return (
<Layout>
  <h1>Avi's NewsFeed</h1>
  <ul>
    {getPosts().map(news => (
      <li key={news.id}>
        <Link href="/newsblocks/[id]" as={`/newsblocks/${news.id}`}>
          <a>{news.title}</a>
        </Link>
      </li>
    ))}
  </ul>
      {/* The next.js way of styling */}
      <style jsx>
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
        }
      </style>
</Layout>
  );
} 
// Add a static async function to fetch data from tvmaze and return them as props.
Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;
