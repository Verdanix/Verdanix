import ContactForm from '@/Components/ContactForm.jsx';
import Footer from '@/Components/Footer.jsx';
import Navbar from '@/Components/Navbar.jsx';
import Text from '@/Components/Sections/Text.jsx';
import { useTranslation } from 'react-i18next';
import '../../css/Pages/About.scss';

function generateJourneyParagraphs(t) {
    return Array.from({ length: 10 }, (_, i) => i + 1).map(
        (num) =>
            t(`section2.paragraphs.${num}`, {
                defaultValue: '',
            }) && <Text type="p">{t(`section2.paragraphs.${num}`)}</Text>,
    );
}

function generateAwards(t) {
    return Array.from({ length: 25 }, (_, i) => i + 1).map(
        (num) =>
            t(`section3.awards.${num}`, {
                defaultValue: '',
            }) && (
                <div className="card">
                    <img
                        src={t(`section3.awards.${num}.icon`)}
                        alt={t(`section3.awards.${num}.alt`)}
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

function generateExperience(t) {
    const color = (num) => (num % 2 === 0 ? ' even' : ' odd');
    return Array.from({ length: 80 }, (_, i) => i + 1).map(
        (num) =>
            t(`section4.experiences.${num}`, {
                defaultValue: '',
            }) && (
                <div className={'card' + color(num)}>
                    <div className="indicator">
                        <div className={'circle' + color(num)}></div>
                        <div className={'line' + color(num)}></div>
                    </div>
                    <div className="content">
                        <Text type="h3">
                            {t(`section4.experiences.${num}.title`)}
                        </Text>
                        <Text type="strong">
                            {t(`section4.experiences.${num}.org`)} -{' '}
                            {t(`section4.experiences.${num}.dates.start`)} -{' '}
                            {t(`section4.experiences.${num}.dates.end`)}
                        </Text>
                        <Text type="p">
                            {t(`section4.experiences.${num}.description`)}
                        </Text>
                    </div>
                </div>
            ),
    );
}

function generateSkills(t, prefix) {
    return Array.from({ length: 80 }, (_, i) => i + 1).map(
        (num) =>
            t(`${prefix}.skills.${num}`, {
                defaultValue: '',
            }) && (
                <div className="skill">
                    <img
                        src={t(`${prefix}.skills.${num}.icon`)}
                        alt={t(`${prefix}.skills.${num}.alt`)}
                    />
                    <Text type="h3">{t(`${prefix}.skills.${num}.title`)}</Text>
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
                    src="/images/about/me.png"
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

            <section className="section4">
                <Text type="h2">{t('section4.h2')}</Text>
                <div className="experiences">{generateExperience(t)}</div>
            </section>

            <section className="skills">
                <Text type="h2">{t('section5.h2')}</Text>

                <div className="content">{generateSkills(t, 'section5')}</div>
            </section>

            <section className="skills">
                <Text type="h2">{t('section6.h2')}</Text>
                <div className="content">{generateSkills(t, 'section6')}</div>
            </section>

            <ContactForm t={t} />
            <Footer />
        </div>
    );
}
