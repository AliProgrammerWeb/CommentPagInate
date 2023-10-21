import axios from "axios";
import { useState } from "react";
import React, { useEffect } from 'react'
import NewsData from "./context/data";
import MostVisited from "./mostVisited";
import ParentComponent from "./recomndedArticles";
import RecommendedArticles from "./recomndedArticles";

function News() {

    const [mostVisited,setMostVisited]= useState([]);
    const [recommendedArticles,setRecommendedArticles] = useState([])

    useEffect(() => {
        axios.get('https://api.engenesis.ororra.com/v1/articles')
        .then(response => {
            setMostVisited(response.data.data.most_visited);
            setRecommendedArticles(response.data.data.recommended_articles.data)
          })
        .catch(error => console.log('Error is:',error))
      })
    return (
        <NewsData.Provider
        value={{
            mostVisited:mostVisited,
            recommendedArticles:recommendedArticles
        }}>
          <div className="mb-10">
              <div className="block  py-4 mb-3">
                <h1 className="text-3xl font-light">Most Visited</h1>
              </div>
              <MostVisited />
          </div>
            <div>
              <div className="block  py-4 mb-3">
                <h1 className="text-3xl font-light">Recommended Article</h1>
              </div>
              <RecommendedArticles/>
            </div>
        </NewsData.Provider>
     );
}

export default News;