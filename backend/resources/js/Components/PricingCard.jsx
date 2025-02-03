import '@/../css/Components/PricingCard.scss';
import { generateListItems } from '@/common.jsx';

export default function PricingCard({ tier, translator: t }) {
    return (
        <div className="card">
            <div className="content">
                <h2>{t(`tier.${tier}`)}</h2>
                <h3>{t(`tier.${tier}.price`)}</h3>
                <p>{t('starting_price')}</p>
                <strong>{t(`tier.${tier}.description`)}</strong>
                <ul className="features">
                    {generateListItems(t, `tier.${tier}.features`)}
                </ul>
            </div>
            <a href={`/order/${tier}`}>{t('order')}</a>
        </div>
    );
}
