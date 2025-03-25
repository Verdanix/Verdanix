import ContactForm from '@/Components/ContactForm.jsx';
import Footer from '@/Components/Footer.jsx';
import Navbar from '@/Components/Navbar.jsx';
import Text from '@/Components/Sections/Text.jsx';
import { useTranslation } from 'react-i18next';
import '../../css/Pages/About.scss';

function generateJourneyParagraphs(t) {
    return Array.from({ length: 10000 }, (_, i) => i + 1).map(
        (num) =>
            t(`section2.paragraphs.${num}`, {
                defaultValue: '',
            }) && <Text type="p">{t(`section2.paragraphs.${num}`)}</Text>,
    );
}

function generateAwards(t) {
    return Array.from({ length: 10000 }, (_, i) => i + 1).map(
        (num) =>
            t(`section3.awards.${num}`, {
                defaultValue: '',
            }) && (
                <div className="card">
                    <img
                        src={t(`section3.awards.${num}.icon`)}
                        alt={`section3.awards.${num}.alt`}
                    />
                    <Text type="h3">{t(`section3.awards.${num}.title`)}</Text>
                    <Text type="strong">
                        {t(`section3.awards.${num}.type`)}
                    </Text>
                    <Text type="p">{t(`section3.awards.${num}.year`)}</Text>
                </div>
            ),
    );
}

export default function About() {
    const { t } = useTranslation('about');

    return (
        <div id="about">
            <Navbar view="about" />
            <section className="section1">
                <img
                    src="https://images.deepai.org/art-image/7f5487afe24544ecb641b1db77c823d4/create-an-image-of-a-guy-with-glasses-in-a-suit-stand.jpg"
                    alt={t('section1.alt')}
                />
                <div className="content">
                    <h1>{t('section1.about')}</h1>
                    <Text type="strong">{t('section1.description')}</Text>
                    <div className="buttons">
                        <a className="contact" href="#contact">
                            {t('section1.connect')}
                        </a>
                        <a className="download" href="/cv.pdf">
                            {t('section1.download')}
                        </a>
                    </div>
                </div>
            </section>

            <section className="section2">
                <Text type={'h2'}>{t('section2.h2')}</Text>
                {generateJourneyParagraphs(t)}
            </section>

            <section className="section3">
                <Text type="h2">{t('section3.h2')}</Text>
                <div className="certs">{generateAwards(t)}</div>
            </section>

            <ContactForm t={t} />
            <Footer />
        </div>
    );
}
