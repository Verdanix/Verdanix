import '@/../css/Pages/Project.scss';
import Footer from '@/Components/Footer.jsx';
import Navbar from '@/Components/Navbar.jsx';
import { useTranslation } from 'react-i18next';

function extractStack(stack) {
    const tech_stack = {};
    stack.forEach((item) => {
        tech_stack[item['type-name']] = [];
    });

    stack.map((item) => {
        tech_stack[item['type-name']].push(item.name);
    });

    return tech_stack;
}

export default function Project({ project, images }) {
    const { t } = useTranslation('project');
    const tech_stack = extractStack(project.tech_stack);
    return (
        <>
            <div id="project">
                <Navbar view="projects" />
                <div className="content">
                    <h1>{project.title}</h1>
                    <div className="images">
                        <iframe
                            src={project.video}
                            title={t('demonstration')}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                        {Array.isArray(images) &&
                            images.map((image, index) => {
                                return (
                                    <img
                                        key={index}
                                        src={image.url}
                                        alt={image.alt_text}
                                    />
                                );
                            })}
                    </div>
                    <h2>{project.description}</h2>

                    <div className="info">
                        <div className="proscons">
                            <div className="procon">
                                <div className="title">
                                    <img
                                        src={t('challenges.header.icon')}
                                        alt={t('challenges.header.alt')}
                                    />
                                    <h3>{t('challenges.title')}</h3>
                                </div>
                                <div className="text">
                                    <ul className="challenges">
                                        {JSON.parse(project.challenges).map(
                                            (challenge, index) => (
                                                <li key={index}>
                                                    <img
                                                        src={t(
                                                            'challenges.bullet.icon',
                                                        )}
                                                        alt={t(
                                                            'challenges.bullet.alt',
                                                        )}
                                                    />
                                                    {challenge}
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="procon">
                                <div className="title">
                                    <img
                                        src={t('solutions.header.icon')}
                                        alt={t('solutions.header.alt')}
                                    />
                                    <h3>{t('solutions.title')}</h3>
                                </div>
                                <div className="text">
                                    <ul className="solutions">
                                        {JSON.parse(project.solutions).map(
                                            (solution, index) => (
                                                <li key={index}>
                                                    <img
                                                        src={t(
                                                            'solutions.bullet.icon',
                                                        )}
                                                        alt={t(
                                                            'solutions.bullet.alt',
                                                        )}
                                                    />
                                                    {solution}
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="stack">
                            <div className="title">
                                <img
                                    src={t('stack.img')}
                                    alt={t('stack.alt')}
                                />
                                <h2>{t('stack.title')}</h2>
                            </div>
                            {Object.keys(tech_stack).map((key, index) => (
                                <div className="tech">
                                    <h4 key={index}>{key}</h4>
                                    <div className="tags">
                                        {Object.values(tech_stack[key]).map(
                                            (value2, index2) => (
                                                <span
                                                    key={index2}
                                                    className={
                                                        index % 2 === 0
                                                            ? 'even'
                                                            : 'odd'
                                                    }
                                                >
                                                    {value2}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
