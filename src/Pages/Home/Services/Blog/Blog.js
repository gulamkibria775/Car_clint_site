import React from "react";
import useTitle from "../../../../hook/useTitle";
import "./Blog.css";

export default function Blog() {
  useTitle('Blog');
  return (
    <div className="blog">
      <div className="p-3 text-justify">
        <h1 className="text-2xl mb-4">Different between SQL and NoSQL</h1>
        <p>
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable. SQL databases are table-based, while NoSQL
          databases are document, key-value, graph, or wide-column stores. SQL
          databases are better for multi-row transactions, while NoSQL is better
          for unstructured data like documents or JSON
        </p>
      </div>

      <div className="p-3 text-justify">
        <h1 className="text-2xl mb-4">what is Jwt and how does it work?</h1>
        <p>
          What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard
          (RFC 7519) for securely transmitting information between parties as
          JSON object. It is compact, readable and digitally signed using a
          private key/ or a public key pair by the Identity Provider(IdP)
        </p>
      </div>

      <div className="p-3 text-justify">
        <h1 className="text-2xl mb-4">what is differnt javascript and nodejs?</h1>
        <p>
          We use JS mainly to write scripts on a website that makes web pages
          more dynamic in nature. It is a runtime environment for Javascript
          that lets a user run this programming language on the server-side as
          well. We can only run JS on browsers. NodeJS helps us run JS outside
          the browser as well.
        </p>
      </div>

      <div className="p-3 text-justify">
        <h1 className="text-2xl mb-4">How does nodejs handle multiple requests at the same time?</h1>
        <p>
          Multiple clients make multiple requests to the NodeJS server. NodeJS
          receives these requests and places them into the EventQueue . NodeJS
          server has an internal component referred to as the EventLoop which is
          an infinite loop that receives requests and processes them. This
          EventLoop is single threaded
        </p>
      </div>
    </div>
  );
}
