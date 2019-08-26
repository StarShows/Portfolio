import fetch from "isomorphic-unfetch";
import Layout from "../../comps/CoolLayout";

const NewsBlock = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <h3>{props.show.genres}</h3>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium}></img>
  </Layout>
);

NewsBlock.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();
  
    console.log(`Fetched show: ${show.name}`);
  
    return { show };
  };
  
  export default NewsBlock;