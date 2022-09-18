import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import About from './About'
import ArticleList from './ArticleList'
// console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* You're on your own from here! Follow the deliverables; test things out in the browser as you write your code; and good luck! */}
      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;

// Components

  // <App />
    // <Header />
      // return <header>
        // <h1>props.name 

    // <About />
      // return <aside>
        // <img> src = prop.image / default val = "https://via.placeholder.com/215" / alt="blog logo"
        // <p>props.about

    // <ArticleList />
      // return <main>
        // arr of <Article /> components(1 per post) / inc. unique key props

      // <Article />
        // return <article>
          // <h3>props.title</h3>
          // <small>props.date / default val = "January 1, 1970"
          // <p>props.preview</p>

        // BONUS: 'Minutes to Read'

      





// Props