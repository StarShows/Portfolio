import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link  href="/">
      <a style={linkStyle} title="Go to the home page">Home</a>
    </Link>
    <Link href="/portfolio">
      <a style={linkStyle} title="Alex's portfolio">Portfolio</a>
    </Link>
    <Link href="/tools">
      <a style={linkStyle} title="Useful scrits, tools and algorythms">Tools</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle} title="About Alex">About</a>
    </Link>
  </div>
);

export default Header;
