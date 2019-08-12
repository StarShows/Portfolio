import Link from "next/link";

const linkStyle = {
  marginRight: 15,
  color: '#000000'
};
const headerStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40px'
}

const Header = () => (
  <div style={headerStyle}>
    <Link  href="/">
      <a style={linkStyle} title="Go to the home page">Home</a>
    </Link>
    <Link href="/portfolio">
      <a style={linkStyle} title="Alex's portfolio">Portfolio</a>
    </Link>
    <Link href="/newsblock">
      <a style={linkStyle} title="Just a random newsfeeds from an API">News</a>
    </Link>
    <Link href="/tools">
      <a style={linkStyle} title="Useful scripts, tools and algorithms">Tools</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle} title="About Alex">About</a>
    </Link>
  </div>
);

export default Header;