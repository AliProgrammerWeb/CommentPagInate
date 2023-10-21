import { useContext } from "react";
import NewsData from "./context/data";
import NewsImage from "./newsImage";
import TimestampViewer from "./TimestampViewer";
import Link from "next/link";

function MostVisited() {
    const news=useContext(NewsData)
    const mostVisited = news.mostVisited;
    return ( 
        <div className="grid grid-cols-4 gap-7">
            {
                mostVisited.map((article) => (
                    <div>
                        <Link href="/articles/[slug]" as={`/articles/${article.slug}`}>
                            <NewsImage firstName={article.author.first_name} lastName={article.author.last_name} img={article.image}/>
                            <TimestampViewer published_at={article.published_at} read_time={article.read_time} likes={article.likes} views={article.views}/>
                        </Link>
                    </div>
                ))
            }
        </div>
     );
}

export default MostVisited;