import Navbar from '@/Components/Navbar.jsx';
import Text from '@/Components/Sections/Text.jsx';
import { useTranslation } from 'react-i18next';

export default function Pricing() {
    const { t } = useTranslation('pricing');
    return (
        <div id="pricing">
            <Navbar view="pricing" />
            <div className="content">
                <Text type="h1">{t('h1')}</Text>
                <Text type="h2">{t("h2")}</Text>
                <div className="cards">

                </div>
            </div>
        </div>
    );
}
