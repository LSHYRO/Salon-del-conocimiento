export default function Author({ authorName, isMan }) {
    return (
        <div className="author-card">
            {isMan ? (
                <h2>AUTOR:</h2>
            ) : (
                <h2>AUTORA:</h2>
            )}
            <p>{authorName}</p>
        </div>

    );
}