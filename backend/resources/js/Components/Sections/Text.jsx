import '@/../css/Components/Sections/Text.scss';

export default function Text({children, className, type}) {
    if (type === 'h1') {
        return <h1 className={className}>{children}</h1>;
    } else if (type === 'h2') {
        return <h2 className={className}>{children}</h2>;
    } else if (type === 'h3') {
        return <h3 className={className}>{children}</h3>;
    } else if (type === 'p') {
        return <p className={className}>{children}</p>;
    } else if (type === 'strong') {
        return <strong className={className}>{children}</strong>;
    }
}
