import '../../css/Pages/Gallery.scss';
import Footer from '@/Components/Footer.jsx';
import Navbar from '@/Components/Navbar.jsx';
import ProjectCard from '@/Components/ProjectCard.jsx';
import Text from '@/Components/Sections/Text.jsx';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from "@/Components/ContactForm.jsx";

async function getProjects(category) {
    try {
        const response = category
            ? await fetch(route('projects.getCategory', { category }))
            : await fetch(route('projects.getAll'));

        return await response.json();
    } catch (error) {
        console.error(error);
        return {};
    }
}

async function search(query) {
    try {
        const response = await fetch(route('projects.search', { query }));
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default function Gallery({ categories }) {
    const { t } = useTranslation('projects');
    const [projects, setProjects] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (query.trim() === '') {
            getProjects().then(setProjects);
        } else {
            search(query).then(setProjects);
        }
        console.log(projects);
    }, [query]);

    const [selected, setSelected] = useState('all');
    const className = (id) => `${selected === id ? 'selected' : ''}`;
    categories = [{ id: 'all', name: t('all_projects') }, ...categories];
    return (
        <div id="projects">
            <Navbar view="projects" />
            <div className="body">
                <div className="header">
                    <div className="bar">
                        <div className="left">
                            <Text type="h2">{t('title')}</Text>
                            <Text type="h3">{t('description')}</Text>
                        </div>
                        <span className="right">
                            <input
                                type="text"
                                placeholder={t('search')}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </span>
                    </div>
                    <div className="buttons">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={className(category.id)}
                                onClick={() => {
                                    getProjects(
                                        category.id === 'all'
                                            ? null
                                            : category.id,
                                    ).then(setProjects);
                                    setSelected(category.id);
                                }}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
                {projects.length === 0 && (
                    <h1 className="error">{t('no_projects')}</h1>
                )}
                {projects.featured && (
                    <div className="type">
                        <Text type="h2">{t('types.featured')}</Text>
                        <div className="projects">
                            {projects.featured?.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                        </div>
                    </div>
                )}
                {projects.client && (
                    <div className="type">
                        <Text type="h2">{t('types.client')}</Text>
                        <div className="projects">
                            {projects.client?.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                        </div>
                    </div>
                )}
                {projects.personal && (
                    <div className="type">
                        <Text type="h2">{t('types.personal')}</Text>
                        <div className="projects">
                            {projects.personal?.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                        </div>
                    </div>
                )}
                {projects.research && (
                    <div className="type">
                        <Text type="h2">{t('types.research')}</Text>
                        <div className="projects">
                            {projects.research?.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <ContactForm t={t}/>
            <Footer />
        </div>
    );
}
