import Navbar from '@/Components/Navbar.jsx';

export default function Home({
    meta_title,
    meta_description,
    meta_keywords,
    meta_twitter_card,
}) {
    return (
        <>
            <Navbar view="home" />
        </>
    );
}
