import Navbar from '@/Components/Navbar.jsx';
import { useTranslation } from 'react-i18next';

export default function Home({ stats }) {
    const { t } = useTranslation('home');

    return (
        <div>
            <Navbar />
        </div>
    );
}
