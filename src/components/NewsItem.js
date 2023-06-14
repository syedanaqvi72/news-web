import React from 'react'

const NewsItem =(props)=>{

  let  {title,description, imageUrl, url,author, date }= props;

  return (
      <div className="my-3">
               <div className="card">
                <div style={{
                  display:'flex',
                  justifyContent:'flex-end',
                  position:'absolute',
                  right:0
                }}>
  <span className='badge rounded-pill bg-dander'>{source}</span>
  <div className="card-body">
  <img src={!imageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/779B/production/_129991603_mediaitem129991112.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
  <br></br>
<a className="btn btn-primary btn-sm" href="https://facebook.com/dawn.com" role="button" width="6" height="6">Facebook</a>
<a className="btn btn-primary btn-sm" href="https://twitter.com/dawn.com" role="button" width="6" height="6">twitter</a>
<a className="btn btn-primary btn-sm" href="https://instagram.com/dawndot.com" role="button" width="6" height="6">Instagram</a>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>  
      <p className="card-text">
      <small className="text-muted">By  :<b> {!author?"Unknow": author}</b> <br></br>on : {new Date(date).toGMTString()}</small></p>
      <a href={url} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read More </a>
    </div>
   
  </div>
</div>
</div>
      </div>
      
    );
  }


export default NewsItem;