import { StarAnimation } from '@/Components/Animation.jsx';
import Footer from '@/Components/Footer.jsx';
import Navbar from '@/Components/Navbar.jsx';

export default function GuestLayout({
    children,
    view,
    animation = <StarAnimation />,
}) {
    return (
        <>
            {animation}
            <Navbar view={view} />
            {children}
            <Footer></Footer>
        </>
    );
}
