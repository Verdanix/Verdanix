import HeroSection from '@/Components/HeroSection.jsx';
import ProjectCard from '@/Components/ProjectCard.jsx';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { useTranslation } from 'react-i18next';
import '../../css/Pages/Projects.scss';

export default function Projects({ projects, stats }) {
    const { t } = useTranslation('projects');

    const getProjectCards = (projects) => {
        return projects.map((project, index) => (
            <ProjectCard
                key={index}
                title={project.title}
                img={project.image}
                description={project.description}
                visit={project.visit_url}
                more={project.more_url}
            />
        ));
    };

    return (
        <GuestLayout view="projects">
            <HeroSection stats={stats} translator={t} />
            <hr />
            <section>
                <h2>{t('featured_projects')}</h2>
                <div className="cards">
                    {getProjectCards(projects.featured)}
                </div>
            </section>
            <section>
                <h2>{t('client_projects')}</h2>
                <div className="cards">{getProjectCards(projects.client)}</div>
            </section>
        </GuestLayout>
    );
}
