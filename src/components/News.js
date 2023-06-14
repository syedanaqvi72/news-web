import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) =>{


  const [articles, setArticles] = useState([]);
  const[loading, setLoading] = useState(true)
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults]= useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  const updateNews= async ()=>{
    this.prop.setPrpgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        setLoading({loading:true});
        let data =await fetch (url);
        props.setProgress(30);
        let parsedData=await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
      
        props.setProgress(30);}

        useEffect(() => {
          updateNews();
        }, []);
        
 

   handlePrevClick = async () => {
    setState({ page: this.state.page - 1 });

    this.updateNews();}

  const handleNextClick = async () => {
    setState({ page: this.state.page + 1 });

    this.updateNews();}

    fetchMoreData = async ()=>{
    setState({page:this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

      let data= await fetch (url);
      let parsedData =await data.json()
      setState({articles:this.state.articles.concat(parsedData.articles),
        totalResults:parsedData.totalResult
      })
    };}
      return(
        
<h1 className='text-cemter' style={( margin: '35px  0px')}>News web -Top{this.capitalizeFirstLetter(props.category)}headlines </h1>    
{this.state.loading &&<Spinner/>}
<InfiniteScroll
  dataLength={this.state.articles.length}
  next={this.fetchMoreData}
  hasMore={this.state.articles.length !== this.state.totalResults}
  loader={<Spinner />}>



   <div className="container">
    <div className="row">
      {this.state.articles.map((element)=>{
        return<div className='col-md-4'key={element.url}>
    
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  url={element.url}
                  author={element.author}
                  date={element.publishedAt} />
              </div>
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>
              &larr; Previous
            </button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>
              Next &rarr;
            </button>
          </div>
        </div>
    

News.defaultProps={
  country:'us',
  pageSize: 8,
  category:'general',
}

News.propTypes={
  country:"PropTypes.string",
  pageSize:PropTypes.number,
  category:PropTypes.string,
}


export default News;



