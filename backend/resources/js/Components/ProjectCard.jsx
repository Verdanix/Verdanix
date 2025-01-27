import '@/../css/Components/ProjectCard.scss';
import { useTranslation } from 'react-i18next';

export default function ProjectCard({ title, img, description, visit, more }) {
    const { t } = useTranslation();
    const moreUrl = `/projects/${more}`;
    const visitUrl = visit ? visit : moreUrl;
    return (
        <div className="projectCard">
            {img ? (
                <img className="cardImg" src={img} alt={title} />
            ) : (
                <div className="cardImg"> ? </div>
            )}
            <div className="content">
                <h3>{title}</h3>
                <p>
                    {description.length > 50
                        ? `${description.substring(0, 47)}...`
                        : description}
                </p>
                <div className="links">
                    <a href={visitUrl}>{t('projects.visit')}</a>
                    <a href={moreUrl}>{t('projects.more')}</a>
                </div>
            </div>
        </div>
    );
}
