import Navbar from '@/Components/Navbar.jsx';
import Footer from '@/Components/Footer.jsx';

export default function GuestLayout({ children, view }) {
    return (
        <>
            <Navbar view={view} />
            {children}
            <Footer></Footer>
        </>
    );
}
