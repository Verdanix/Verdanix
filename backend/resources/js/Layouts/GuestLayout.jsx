import Footer from '@/Components/Footer.jsx';
import Navbar from '@/Components/Navbar.jsx';

export default function GuestLayout({ children, view }) {
    return (
        <>
            <Navbar view={view} />
            {children}
            <Footer></Footer>
        </>
    );
}
