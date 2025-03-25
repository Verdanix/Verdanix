import '@/../css/Components/Sections/Text.scss';

export default function Text({ children, type }) {
    if (type === 'h1') {
        return <h1>{children}</h1>;
    } else if (type === 'h2') {
        return <h2>{children}</h2>;
    } else if (type === 'h3') {
        return <h3>{children}</h3>;
    } else if (type === 'p') {
        return <p>{children}</p>;
    } else if (type === 'strong') {
        return <p>{children}</p>;
    }
}
