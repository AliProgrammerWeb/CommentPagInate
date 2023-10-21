import { useContext } from "react";
import NewsData from "./context/data";
import NewsImage from "./newsImage";
import TimestampViewer from "./timestampViewer";
import Link from "next/link";


function RecommendedArticles() {

    const newsData= useContext(NewsData)
    const news=newsData.recommendedArticles

    return ( 
        <div className="grid grid-cols-4 gap-7">
            {
                news.map((article) =>(
                    <div>
                        <Link href="/articles/[slug]" as={`/articles/${article.slug}`}>
                            <NewsImage firstName={article.author.first_name} lastName={article.author.last_name} img={article.image}/>
                        </Link>
                        <Link className="pt-2 text-slate-700 text-lg cursor-pointer" href="/articles/[slug]" as={`/articles/${article.slug}`} >{article.title}</Link>
                        <TimestampViewer published_at={article.published_at} read_time={article.read_time} likes={article.likes} views={article.views}/>
                        <Link className=" text-gray-900 text-[14px] cursor-pointer" href="/articles/[slug]" as={`/articles/${article.slug}`} >{article.description}</Link>
                    </div>
                ))
            }
            
        </div>
     );
}

export default RecommendedArticles;