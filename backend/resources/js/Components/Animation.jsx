import '../../css/Components/StarAnimation.scss';

export function StarAnimation() {
    return (
        <div className="stars">
            {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="star"></div>
            ))}
        </div>
    );
}
