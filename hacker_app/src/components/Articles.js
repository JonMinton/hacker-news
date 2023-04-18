import Article from "./Article";

const Articles = ({articles}) => {

    const articleItems = () => {
        return articles ? articles.map((article, index) => {
            return (<Article key = {index} article = {article} /> )
        }) : 
        null
    }

    return (
        <div className = "Articles">
            <h3>Articles</h3>
            <p>There are {articles.length} articles</p>
            <ul>
                {articleItems()}
            </ul>
        </div>

      );
}
 
export default Articles;