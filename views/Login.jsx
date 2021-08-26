import React from "react";
import Layout from "./Layout.jsx";

const Template = (props) => {
  return (
    <Layout title="Welcome !!!">
      <h1> Login</h1>
      <form action="/login" method="post">
      <input type="text" placeholder="username" name="username"/>
        <input type="password" placeholder="password" name="password"/>
       <div> 
       <input type="submit" value="login"/>
       </div> 
      </form>
    </Layout>
  );
};

export default Template;
