import Layout from "../comps/CoolLayout";
import Link from "next/link";

const ToolsLink = props => (
  <li>
    <Link href="/tools/[tool]" as={`/tools/${props.tool}`}>
      <a>{props.tool}</a>
    </Link>
  </li>
);

export default function Tools() {
  return (
    <Layout>
      <h1>Useful tools</h1>
      <ul>
        <ToolsLink tool="Weather" />
        <ToolsLink tool="Domain Counter" />
        <ToolsLink tool="Translation" />
        <Link href="/tools/AnimatedSvgs">
          <a title="Animated SVGs collection">
            Animated SVGs
          </a>
        </Link>
      </ul>
    </Layout>
  );
}
