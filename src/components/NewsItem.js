import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
  let  {title,description, imageUrl, url, author, date}= this.props;

  return (
      <div className="my-3">
               <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
  <img src={!imageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/779B/production/_129991603_mediaitem129991112.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
   
    <a href={url} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read More
    </a>
    <a href="/" className="card-link">facebook</a>
    <a href="/" className="card-link">instagram</a>
    <a href="/" className="card-link">twitter</a>
  </div>
</div>
</div>
      </div>
      
    );
  }
}

export default NewsItem;