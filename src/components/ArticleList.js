import Article from './Article'

function ArticleList({posts, id}){
  const articles = posts.map(post => (
    // console.log(post)
    <Article title={post.title} date={post.date} preview={post.preview} key={post.id}/>
  ))

  return <main>{articles}</main>
}
    
export default ArticleList