import React from "react"; 

const Layout = (props) => {
  return (
    <html>
      <head>
        <title>Bob le plop </title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"/>
        </head>
        <body>
            <h1>{props.title}</h1>
            <main>{props.children}</main>
        </body>
      
    </html>
  );
};

export default Layout; 
