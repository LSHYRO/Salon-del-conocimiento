export default function ArticleHeader({ imgURL, altText, name, institution, area }) {
    return (
        <section className="third-bg-color">
            <div className="article-header">
                <img src={imgURL} alt={altText}></img>
                <div className="text-section-div">
                    <div className="awarded-name-div primary-bg-color">
                        <h1>{name}</h1>
                    </div>
                    <div className="awarded-info-div">
                        <div className="awarded-info-item">
                            <h2>INSTITUCIÓN: </h2>
                            <p>{institution}</p>
                        </div>
                        <div className="awarded-info-item">
                            <h2>ÁREA: </h2>
                            <p>{area}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}