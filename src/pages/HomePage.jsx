import React from 'react';

const HomePage = (props) => {
    return ( <div classeName="jumbotron">
    <h1 classeName="display-3">Hello, world!</h1>
    <p classeName="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr classeName="my-4"/>
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p classeName="lead">
      <a classeName="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div> );
}
 
export default HomePage;