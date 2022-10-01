import React, { Component } from 'react'
import Newsitem from './Newsitem'
import loading from './loading-pic.jpg'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class Newscon extends Component {
  article = []
  static defaultProps = {
    category: "general",
  }
  static propsTypes = {
    category: PropTypes.string,
  }
  constructor() {
    super();
    this.state = {
      article: this.article,
      loading: false,
      page: 1,
      totalResults:0
    }
  }
  async update() {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=777d276efb1b464fad086e2b6e1ec7c9&page=${this.state.page}&pageSize=12`;
    // this.setState({
    //   loading: true
    // })
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    })
  }
  async componentDidMount() {
    this.update();
  }
  // preBtn = async () => {
  //   this.setState({ page: this.state.page - 1, })
  //   this.update()

  // }
  // nextBtn = async () => {
  //   console.log(this.state.page)
  //   this.setState({ page: this.state.page + 1, })
  //   this.update();
  // }
  fetchMoreData=async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=777d276efb1b464fad086e2b6e1ec7c9&page=${this.state.page+1}&pageSize=12`;
    // this.setState({
    //   loading: true
    // })cd
    this.setState({page:this.state.page+1})
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: this.state.article.concat(parseData.articles),
      // totalResults: parseData.totalResults,
      // loading: false
    })
  }
  render() {
    return (
      <>
        {/* <div className='container d-flex align-items-center justify-content-center h-50vh'>
          {this.state.loading && <Spinner />}
        </div> */}
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className='container '>
            <div className='row'>
              {this.state.article.map((element) => {
                return <div className='col-md-4' key={element.url}>
                  <Newsitem title={element.title.slice(0, 45)} desc={element.description === null || "" ? element.title.slice(0, 45) : element.description.slice(0, 100)} imgUrl={element.urlToImage === null ? loading : element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} />
                </div>
              })}
            </div>
            </div>
        </InfiniteScroll>
        
            </>
        )
  }
}
