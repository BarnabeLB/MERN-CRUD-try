import React from "react";
import Layout from "./Layout.jsx"; 

const Index = (props) => {
  return (
    <Layout title="Welcome !!!">
      <h1>See below there's your fingers</h1>
      <ul>
        {props.things.map(thing => (<li>
          <h3>{thing.name}</h3>
          <h4>{thing.type}</h4>
        </li>))}
      </ul>
      <h1>Add something</h1>
      <form action="/pet/add" method="post">
        
        <input type="text" placeholder="things name" name="name"/>
        <input type="text" placeholder="things type" name="type"/>
       <div> 
       <input type="submit" value="create thing"/>
       </div> 
      </form>
    </Layout>
  );
}

export default Index;
