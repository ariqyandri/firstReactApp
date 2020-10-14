import React, { useState, useEffect } from "react";
// import Timeout from "await-timeout";
import ArticleCard from "./ArticleCard";
import axios from "axios";
import Timeout from "await-timeout";

export default function ArticleList() {
  const [articles, set_articles] = useState();

  useEffect(() => {
    async function someDataFetching() {
      console.log("I'd gonna fetch some data!");
      await Timeout.set(2000);
      const page = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      console.log("Got back:", page.data);
      set_articles(page.data);
    }
    someDataFetching();
  }, []);

  return (
    <div>
      <button onClick={() => set_articles([])}>Clear Articles</button>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      <p>
        {articles === undefined ? (
          <p>Loading...</p>
        ) : (
          articles.map((article) => {
            return (
              <div>
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  content={article.body}
                />
              </div>
            );
          })
        )}
      </p>
    </div>
  );
}
