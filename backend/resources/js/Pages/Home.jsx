import '@/../css/Pages/Home.scss';
import Navbar from '@/Components/Navbar.jsx';
import { useTranslation } from 'react-i18next';

function ProjectCard({ title, description, image, link, tags }) {
    return (
        <a className="project" href={link}>
            <img src={image} alt={'An image representing ' + title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="tags">
                {tags.map((tag, index) => (
                    <span
                        className={index % 2 === 0 ? 'even' : 'odd'}
                        key={index}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </a>
    );
}

export default function Home({ stats }) {
    const { t } = useTranslation('home');

    return (
        <div id="home">
            <div className="section1">
                <Navbar />
                <div id="hero">
                    <div className="text">
                        <h1>
                            {t('hero.h1.sentence')}
                            <br />
                            <span>{t('hero.h1.highlighted')}</span>
                        </h1>
                        <h2>"{t('hero.h2')}"</h2>
                    </div>

                    <div className="stats">
                        <div className="stat">
                            <strong>{stats.yearsExperience}</strong>
                            <br />
                            <p>{t('hero.stats.experience')}</p>
                        </div>
                        <div className="stat">
                            <strong>{stats.projectCount}</strong>
                            <br />
                            <p>{t('hero.stats.projectCount')}</p>
                        </div>
                        <div className="stat">
                            <strong>{stats.clients}</strong>
                            <br />
                            <p>{t('hero.stats.clients')}</p>
                        </div>
                    </div>

                    <div className="cta-buttons">
                        <a className="primary" href="/services">
                            {t('hero.cta.hire')}
                        </a>
                        <a className="secondary" href="/projects">
                            {t('hero.cta.projects')}
                        </a>
                    </div>
                </div>
            </div>

            <div id="section2">
                <h2>{t('section2.h2')}</h2>
                <div className="projects">
                    {stats.projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            tags={project.tags}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
