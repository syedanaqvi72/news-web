
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
  let  {title,description, imageUrl, url,author, date }= this.props;

  return (
    <div className="card mb-3">
               <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/779B/production/_129991603_mediaitem129991112.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <div class="card-footer">
      <p className="card-text">
      <a href="https://facebook.com/dawn.com" className="card-link">Facebook</a>
    <a href="https://twitter.com/dawn.com" className="card-link">Twitter</a>
    <a href="https://instagram.com/dawndot.com" className="card-link">Instagram</a>
      <small className="text-muted">By  : {!author?"Unknow": author} <br></br>on : <u>{date}</u></small></p>
    </div>
</div>

    <a href={url} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read More </a><br></br>
    <br></br>
    
   
   
  </div>
</div>
      
    );
  }
}

export default NewsItem;