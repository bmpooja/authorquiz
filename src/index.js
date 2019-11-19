import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./bootstrap.min.css";
import PropPractice from "./component/PropPractice";
//import AuthorQuiz from "./component/AuthorQuiz";
import { shuffle, sample } from "underscore";
import { Dashboard, Character, Characters } from "./component/RoutingComponent";
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";

const authors = [
  {
    name: `Mark Twain`,
    imageUrl: `images/author/MarkTwain.jpg`,
    imageSource: `wikimedia Commons`,
    books: [
      "Advantures of Huckleberry Finn",
      "Roughing It3",
      "Life on the Missisipi"
    ]
  },
  {
    name: `Charles Dicken`,
    imageUrl: `images/author/MarkTwain.jpg`,
    imageSource: `wikimedia Commons`,
    books: ["David Copperfield", "A tale of two Cities"]
  }
];

// function getTurnData(authors) {
//   const allBooks = authors.reduce(function(p, c, i) {
//     return p.concat(c.books);
//   }, []);
//   const fourRandomBooks = shuffle(allBooks).slice(0, 4);
//   const answer = sample(fourRandomBooks);
//   return {
//     books: fourRandomBooks,
//     author: authors.find(author => author.books.some(title => title === answer))
//   };
// }

// const state = {
//   turnData: getTurnData(authors),
//   // turnData : {
//   //   author :authors,
//   //   books: authors.books,
//   // },
//   highlight: ""
// };

// function onAnswerSelected(answer) {
//   console.log("answer :" + answer);
//   console.log("book :" + state.turnData.author.books);
//   let booksArray = String(state.turnData.author.books).split(",");
//   console.log(booksArray);
//   const isCorrect = booksArray.some(book => book === answer);
//   console.log("isCorrect :" + isCorrect);
//   state.highlight = isCorrect ? "correct" : "wrong";

//   //render()
// }
//function render(){
// ReactDOM.render(
//   <AuthorQuiz {...state} onAnswerSelected={onAnswerSelected} />,
//   document.getElementById("root")
// );
//}
// render()

//ReactDOM.render(<PropPractice />,document.getElementById('root') )

//ReactDOM.render(<PropPractice a={4} b={2} />,document.getElementById('root') )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//render()
let colors = ["Gray", "Green"];
console.log("Characters :" +Object.values(Characters))
ReactDOM.render(
  <BrowserRouter>
    <div>
      <aside>
        <ul>
          {Object.keys(Characters).map(name =>
            // ["top/left/", "top/right/", "bottom/left/", "bottom/right/"].map(
              ["bottom/left/", "bottom/right/"].map(  
            (corner, index) => (
                <li>
                  <Link to={corner + (name) + "/" + colors[index]}>
                    {corner + name + "/" + colors[index]}
                  </Link>
                </li>
              )
            )
          )}
        </ul>
      </aside>
      <main>
        <Route path=" " component={Dashboard} />
        <Route path="/top" render={() => <div>Something at the top</div>} />
        <Route
          path="/bottom"
          render={() => <div>Something at the bottom</div>}
        />
      </main>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
