import React, { Component } from 'react'
import "../css/Style.css"

export default class News extends Component {
    render() {
        let { title, Description, imageUrl, NewsUrl, author, time, source } = this.props;
        return (
            <div>
                <div className="card my-3">
                    <img src={imageUrl ? imageUrl : "https://i2-prod.mirror.co.uk/incoming/article28213210.ece/ALTERNATES/s1200d/1_FILES-US-SECURITY-INTERNET-POLITICS-TWITTER-ZATKO-MERGER.jpg"} alt="---" className="card-img-top news_img" />
                    <div className="card-body">
                        <h6 className="card-title">
                            {title}..
                        </h6>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark " style={{zIndex:'1'}}>
                            {source}
                        </span>
                        <p className="card-text p">{Description}..</p>
                        <p className="card-text"><small className="text-muted">Updated By {author} On {time}</small></p>
                        <a href={NewsUrl} rel="noreferrer" target="_blank" className="btn btn-outline-primary px-5 px-1">Show</a>
                    </div>
                </div>
            </div>
        )
    }
}
