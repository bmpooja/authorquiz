import React from "react";

function AuthorQuiz({highlight,...turnData}) {
  console.log("Authorquiz:" +highlight)
  return (
    <div className="container fluid">
      <Hero />
      <Turn {...turnData} highlight={highlight} />
      <Continue />
      <Footer />
    </div>
  );
}

function Book({title ,onClic}){
  
  return(
    <div className= "jumbotron" 
      style={{backgroundColor:"#d6e6f7" ,fontSize: "30px"}}
      onClick={onClic(title)}>
      <h4>{title}</h4>
    </div>  
  )
}

function Turn({ turnData ,highlight,onAnswerSelected}) {
  console.log(turnData.author);
  console.log(onAnswerSelected)
  console.log("highlight :" +highlight)
  function heighlightToBgcolor(highlight){
    const mapping = {
      'none':'',
      'correct':'green',
      'wrong' :'red'

    }
    return mapping[highlight]
  }
  console.log("background : " +heighlightToBgcolor(highlight))
  return (
    <div className="row turn" style={{ background: heighlightToBgcolor(highlight) }}>
      <div className="col-4 offset-1">
        <img src={turnData.author.imageUrl} />
      </div>
      <div className="col-6">
        {turnData.author.books.map(title => <Book 
        title={title} key={title} onClic={onAnswerSelected}/>
          )}

      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="row">
      <div className="jumbotron offset-1 col-10">
        <h1 style={{ textAlign: "center" }}> AuthorQuiz </h1>
        <p>Select the book written by author shown</p>
      </div>
    </div>
  );
}

function Continue() {
  return <div></div>;
}
function Footer() {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted-credit">
          All images are from{" "}
          <a href="http://commons.wikimedia.org/wiki/Main_Page">
            Wikimedia commons
          </a>
          and are in the public domin
        </p>
      </div>
    </div>
  );
}

export default AuthorQuiz;
