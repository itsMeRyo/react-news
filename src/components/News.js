import { useEffect, useState } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";

function News(props) {
  const { country, category, pageSize } = props;

  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [pg, setPg] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

  useEffect(() => {
    async function urlFetch() {
      window.scrollTo(0, 0);
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=a7650615037543878a8247d94f0b7fa5&page=1&pageSize=${pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles);
      setTotalArticles(parsedData.totalResults);
      setLoading(false);
    }
    urlFetch();
  }, [country, category, pageSize]);

  async function handleNext() {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=a7650615037543878a8247d94f0b7fa5&page=${
      pg + 1
    }&pageSize=${pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setPg(pg + 1);
    setArticles(parsedData.articles);
    setLoading(false);
  }

  async function handlePrevious() {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=a7650615037543878a8247d94f0b7fa5&page=${
      pg - 1
    }&pageSize=${pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setPg(pg - 1);
    setArticles(parsedData.articles);
    setLoading(false);
  }

  return (
    <>
      {/* headline */}
      <div className="container my-3">
        <div className="text-center headline">
          <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
        </div>
        {loading ? <Loading /> : null}
        <div className="row">
          {!loading
            ? articles.map((items, id) => {
                return (
                  <div className="col-md-4 col-sm-6 col-xs-12" key={items.url}>
                    <NewsItem
                      title={
                        (items.title ? items.title.slice(0, 45) : "") + ".."
                      }
                      description={
                        (items.description
                          ? items.description.slice(0, 85)
                          : "") + "..."
                      }
                      imageURL={
                        items.urlToImage
                          ? items.urlToImage
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/120px-No_image_available.svg.png"
                      }
                      newsURL={items.url}
                    />
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <div className="container-fluid page-button my-4 mx-2">
        <button
          disabled={pg <= 1}
          className="btn-sm btn btn-color mx-5 "
          onClick={handlePrevious}
        >
          &larr; Previous
        </button>
        <div className="page-count">{pg}</div>
        <button
          disabled={!(pg + 1 <= Math.ceil(totalArticles / 12))}
          className="btn-sm btn btn-color mx-5"
          onClick={handleNext}
        >
          Next &rarr;
        </button>
      </div>
    </>
  );
}
export default News;
