import React, { Component } from 'react'
import News from './News'
import Loader from './Loader'
export default class MainNews extends Component {


    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loader: false,
            page: 1,
            shown: 15
        }
        let title = this.props.category
        document.title = `${title} NewsMan`;
    }


    async componentDidMount() {
        this.DataLoad();
    }


    async DataLoad() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=15`;
        this.setState({ loader: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            pageSize: parsedData.totalResults,
            loader: false
        })
    }


    Next = async () => {
        this.setState({
            page: this.state.page + 1,
            shown: this.state.shown + 15,
        })
        this.DataLoad();
    }


    Prev = async () => {
        this.setState({
            page: this.state.page - 1,
            shown: this.state.shown - 15,
        })
        this.DataLoad();
    }


    render() {
        return (
            <div>
                <div className="container mt-5" style={{ minHeight: '500px' }}>
                    <h6 className="text-primary text-center pt-3 pb-3 h5 text-uppercase" style={{ textShadow: '0px 1px 2px black' }}>
                    <span className="h4 text-dark">NewsMan - </span>
                    {this.props.category} Top HeadLines</h6>
                    {this.state.loader && <Loader />}
                    
                    <div className="row">
                        {!this.state.loader && this.state.articles.map((article) => {
                            return <div className="col-md-4" key={article.url}>
                                <News title={article.title ? article.title.slice(0, 50) : "No article"} Description={article.description ? article.description.slice(0, 140) : "No description"} imageUrl={article.urlToImage} NewsUrl={article.url} author={article.author ? article.author : 'Unknown'} time={article.publishedAt.slice(0, 10)} source={article.source.name} />
                            </div>
                        })}
                    </div>
                </div>

                <div className="container my-5">
                    <div className="d-flex justify-content-between">
                        <div className="previous"><button disabled={this.state.page <= 1} onClick={this.Prev} className="btn btn-dark shadow-none text-uppercase">&laquo; Previous</button></div>
                        <div className="next"><button onClick={this.Next} disabled={(this.state.shown-15 > this.state.pageSize)} className="btn btn-dark shadow-none text-uppercase">Next &raquo;</button></div>
                    </div>
                </div>
            </div>
        )
    }
}
