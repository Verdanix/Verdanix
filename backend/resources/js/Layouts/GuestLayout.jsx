import Navbar from '@/Components/Navbar.jsx';

export default function GuestLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            {/* TODO: ADD OTHER SECTIONS */}
        </>
    );
}
