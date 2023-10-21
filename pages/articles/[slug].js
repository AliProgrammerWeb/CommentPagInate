import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import DescriptionArtinle from "@/components/article/descriptionArticle";
import AboutAuthor from "@/components/article/aboutAuthor";
import Content from "@/components/article/content";
import Comments from "@/components/article/comments";

function Article() {
  const router = useRouter();
  const { slug } = router.query;
  const [article, setArticle] = useState(null);
  const [views, setViews] = useState([]);

  useEffect(() => {
    if (slug) {
      axios
        .get(`https://api.engenesis.ororra.com/v1/articles/${slug}`)
        .then((response) => {
          setArticle(response.data.data.article);
          setViews(response.data.data.creator_courses.data);
          console.log(`https://api.engenesis.ororra.com/v1/articles/${slug}`)
        })
        .catch((error) => console.log("Error is:", error));
    }
  }, [slug]);

  if (!article) {
    return (
      <main className="min-h-screen flex justify-center items-center">
        Loading...
      </main>
    );
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-start justify-between pb-10   bg-white container max-w-4xl mx-auto`}
    >
      <div className="bg-black text-white pt-14 px-28 pb-5 w-full">
        <DescriptionArtinle
          img={article.visual_content}
          title={article.title}
          content={article.description}
          first_name={article.author.first_name}
          last_name={article.author.last_name}
          views={article.views}
          publish_date={article.publish_date}
          likes={article.likes}
          read_time={article.read_time}
          avatar={article.author.avatar}
        />
      </div>
      <div className="px-28 w-full">
        <Content content={article.content} />
        <hr className="border-t-2 w-full border-gray-300 " />
        <AboutAuthor
          img={article.author.avatar}
          first_name={article.author.first_name}
          last_name={article.author.last_name}
          description={article.description}
          fo
        />
        <hr className="border-t-2 w-full border-gray-300 " />
        <div className="">
          <h1 className="text-2xl text-gray-500 my-8  text-slate-700">
            Comments
          </h1>
          <Comments  articleid={article.id}/>
          {console.log(views)}
        </div>
      </div>
    </main>
  );
}

export default Article;
