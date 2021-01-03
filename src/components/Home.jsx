import React from "react";

function Home(props) {
  return (
    <div>
      <div className="container">
        <div className="row my-3">
          <div className="col-md-6 align-self-center">
            <h1>Home Page</h1>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nam repellendus praesentium adipisci deleniti maxime dicta autem asperiores id commodi.</p>
          </div>
          <div className="col-md-6">
            <img src="https://picsum.photos/id/272/500/400" className="w-100" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;