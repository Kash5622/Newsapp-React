import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title,desc,imgUrl,url,author,date}=this.props
    return (
        <div className='container my-6' >
        <div className="card"  Style={"height: 27rem;margin-top: 2rem;"}>
            <img src={imgUrl} className="card-img-top" alt="..." Style={"height: 10rem;"}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <p class="card-text"><small class="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                    <a href={url} className="btn btn-light">Read More</a>
                </div>
        </div>
    </div>
    )
  }
}