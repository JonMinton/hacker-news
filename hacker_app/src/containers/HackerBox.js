import React, { useState, useEffect } from 'react';


import Articles from "../components/Articles";
import FilterBox from "../components/FilterBox";

const HackerBox = () => {

    const [articleIds, setArticleIds] = useState([])
    const [articles, setArticles] = useState([])
    const [currentSearch, setCurrentSearch] = useState('')
    const [activeArticles, setActiveArticles] = useState([])

    useEffect(() => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json" )
            .then(res => res.json())
            .then(data => setArticleIds(data))
    }, [] )

    useEffect(() => {


        const urlPromises = articleIds.map(id =>  {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                .then(res => res.json())
        })

        Promise.all(urlPromises)
            .then(data => {
                setArticles(data)
                setActiveArticles(data)
            })
    }, [articleIds])

    useEffect( () => {


        const termToSearchFor = currentSearch.toLowerCase()

        const allFilteredArticles = articles.filter(article => {
            return article.title.toLowerCase().match(termToSearchFor)
        })

        console.log(`After filtering there are ${allFilteredArticles.length} articles`)
        allFilteredArticles.map(article => console.log(article.id))
        setActiveArticles(allFilteredArticles)
    }, [currentSearch])

    const handleSearchChange = (val) => {
        setCurrentSearch(val)
    }


    return (
        <div className = "HackerBox">
            <h2>HackerBox</h2>
            <FilterBox handleSearchChange={handleSearchChange}/>
            {articles.length  ? <Articles articles={activeArticles}/> : null}
        </div>
      );
}
 
export default HackerBox;