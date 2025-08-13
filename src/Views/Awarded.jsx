import ArticleBody from "../Components/Awarded/ArticleBody";
import ArticleHeader from "../Components/Awarded/ArticleHeader";
import { PublicLayout } from "../Layouts/PublicLayout";
import "../assets/styles/base.css";
import "../assets/styles/components.css";
import {awardedData} from "../data.js";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Awarded() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { idYear, idArticle } = useParams();
    console.log(idYear, idArticle);

    const articleData = awardedData.find(item => item.id === parseInt(idYear))?.awardeds.find(article => article.id === parseInt(idArticle));
    console.log(articleData);
    return (
        <PublicLayout>
            <>
                <ArticleHeader imgURL={articleData?.imageUrl} name={articleData?.name} altText={`Imagen de ${articleData?.name}`} institution={articleData?.institution} area={articleData?.area} />
                <ArticleBody imgURL={articleData?.imgArticle} altImg={`Imagen de ${articleData?.name}`}
                    phrase= {articleData?.phrase}
                    article={articleData?.article}
                    author={articleData?.author}
                    isMan={articleData?.isManAuthor}
                />
            </>
        </PublicLayout>

    );
}