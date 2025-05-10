import React,{useState, useEffect,useCallback } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
function News(props) {
  const [articles,setarticles]=useState([]);
  const [loading,setloading]=useState(true);
  const [page,setpage]=useState(1);
  const [totalArticles,settotalArticles]=useState(0);

  const updateNews = useCallback(async ()=> {
    let data=await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2b15a88442494711a8be9c8b5f27e969&page=${page}&pageSize=${props.pageSize}`);
    setloading(true);
    let pasdata= await data.json();
    setarticles(pasdata.articles);
    settotalArticles(pasdata.totalResults);
    setloading(false);
  },[page, props.country, props.category, props.pageSize])


  useEffect(() => {
    
    updateNews();  
 
  },[updateNews]);

 

 

  const fetchMoreData=async()=>{
    setpage(page+1);
    let data=await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2b15a88442494711a8be9c8b5f27e969&page=${page}&pageSize=${props.pageSize}`, {
    headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/json'
    }
})
    let pasdata= await data.json();
    setarticles(articles.concat(pasdata.articles));


  }

    return (
      <>
        <h1 className='text-center mt-5 pt-5'>Top-Headlines</h1>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalArticles}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
          {articles.map((elem)=>{
            return <div className="col-md-4 my-3 " key={elem.url}>
            <NewsItems  title={elem.title} description={elem.description} ImgUrl={elem.urlToImage} newUrl={elem.url} author={elem.author} date={elem.publishedAt} source={elem.source.name}/>
            </div>
          })}
        </div>
        </div>  
        </InfiniteScroll>
        
      </>
    )
}

export default News
