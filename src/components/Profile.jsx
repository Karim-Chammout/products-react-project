import React from "react";

function Profile(props) {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-6 align-self-center">
          <h1>Profile Page</h1>
          <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo fugiat, totam quos similique autem. Explicabo nostrum omnis dolores eum.</p>
        </div>
        <div className="col-md-6">
          <img src="https://picsum.photos/id/180/500/400" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Profile;