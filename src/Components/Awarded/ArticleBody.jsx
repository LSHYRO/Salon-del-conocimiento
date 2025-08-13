import Author from "./author";

export default function ArticleBody({ imgURL, altImg, phrase, article, author, isMan }) {
    // Divide el texto del artículo en párrafos usando "|" como salto de línea
    const paragraphs = article.split('|');

    return (
        <section className="secondary-bg-color">
            <div className="article-body-div ">
                <div className="article-text">
                    <h3>
                        {phrase}
                    </h3>
                    {paragraphs.map((text, idx) => (
                        <p key={idx}>
                            {text}
                        </p>
                    ))}
                    <img src={imgURL} alt={altImg} />
                </div>
                <Author authorName={author} isMan={isMan} />
            </div>
        </section>
    );
}