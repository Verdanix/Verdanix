import '@/../css/Components/Navbar.scss';
import AuthNavbar from '@/Components/AuthNavbar.jsx';
import Footer from '@/Components/Footer.jsx';

export default function AuthenticatedLayout({
    children,
    view,
    animation = null,
}) {
    return (
        <>
            {animation}
            <AuthNavbar view={view} />
            {children}
            <Footer />
        </>
    );
}
