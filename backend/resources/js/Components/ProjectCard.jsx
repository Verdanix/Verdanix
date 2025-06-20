import '@/../css/Components/ProjectCard.scss';
import { useEffect, useState } from 'react';

async function getImages(id) {
    try {
        const response = await fetch(route('projects.getImages', { id }));

        return await response.json();
    } catch (error) {
        console.error(error);
        return {};
    }
}

export default function ProjectCard({ project }) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchImages() {
            const images = await getImages(project.id);
            setImages(images);
        }

        fetchImages();
    }, [project.id]);

    return (
        <a className="project" href={`/projects/${project.slug}`}>
            <img
                src={images[0]?.url || '/placeholder.png'}
                alt={images[0]?.alt_text || 'Placeholder'}
            />
            <div className="content">
                <strong>{project.title}</strong>
                <p>{project.description.substring(0, 50)}...</p>
            </div>
            <div className="stack">
                {Array.isArray(project.tech_stack) &&
                    project.tech_stack.slice(0, 4).map((tag, index) => {
                        return (
                            <span
                                key={index}
                                className={`tag ${index % 2 === 0 ? 'even' : 'odd'}`}
                            >
                                {tag.name}
                            </span>
                        );
                    })}
            </div>
        </a>
    );
}
