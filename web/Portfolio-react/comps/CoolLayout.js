import Header from './Header';

const layoutStyle = {
    padding: 20,
    border: '1px solid #DDD',
    backgroundColor: '#000000',
    color: '#ffffff'
};

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);
// Export the layout
export default Layout;