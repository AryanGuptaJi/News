import React, { Component } from 'react'

export class NewsItem extends Component {
     
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
            <span className="badge bg-primary" >{source}</span>
          </div>
            <img src={!imageUrl?"https://c.ndtvimg.com/2018-10/dl56ce8_google-generic-reuters_625x300_08_October_18.jpg":imageUrl} className="card-img-top" style={{height: '221px'}} alt="..."/>
            <div className="card-body" style={{height: '270.33px'}}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-warning">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>  
      </div>
    )
  }
}


export default NewsItem