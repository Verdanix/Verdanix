import '@/../css/Pages/ProjectInfo.scss';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { useTranslation } from 'react-i18next';

export default function ProjectInfo({
    meta_title,
    meta_description,
    meta_keywords,
    project_info,
}) {
    const {
        github_link,
        docs_link,
        demo_link,
        image,
        story_description,
        problems_description,
        solutions_description,
        conclusion_description,
    } = project_info;

    const { t } = useTranslation('project_info');

    return (
        <GuestLayout view="projects">
            <div className="info">
                <h1>{meta_title}</h1>
                {image ? (
                    <img className="img" src={image} alt={meta_title} />
                ) : (
                    <div className="img">?</div>
                )}

                <div className="links">
                    <a href="/projects" className="back-link">
                        {t('back')}
                    </a>
                    <a href={github_link}>{t('github')}</a>
                    <a href={docs_link}>{t('docs')}</a>
                    <a
                        href={demo_link}
                        target="_blank"
                        rel="noreferrer nofollow"
                    >
                        {t('demo')}
                    </a>
                </div>

                <div className="content">
                    <h2>{t('story')}</h2>
                    <p>{story_description}</p>
                    <hr />
                    <h2>{t('problems')}</h2>
                    <p>{problems_description}</p>
                    <hr />
                    <h2>{t('solutions')}</h2>
                    <p>{solutions_description}</p>
                    <hr />
                    <h2>{t('conclusion')}</h2>
                    <p>{conclusion_description}</p>
                </div>
            </div>
        </GuestLayout>
    );
}
