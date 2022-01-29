import Navbar from '../navbar/Navbar';

const Layout = (props) => {
    return (
        <div>
            <Navbar></Navbar>
            <main className="">
                {props.children}
            </main>
        
        </div>
    );
}

export default Layout;