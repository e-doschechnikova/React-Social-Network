import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 1 },
  { id: 2, message: "It's my first post!", likesCount: 12 },
  { id: 3, message: "Oh, no! I'm lost!", likesCount: 6 },
  { id: 4, message: "Where am I?", likesCount: 60 },
];

let dialogs = [
  { id: 1, name: "Lama" },
  { id: 2, name: "Lama Husband" },
  { id: 3, name: "Lama Mama" },
  { id: 4, name: "Lama Papa" },
  { id: 5, name: "Lama Ira" },
  { id: 6, name: "Lama Egor" },
];

let messages = [
  { id: 1, message: "Hi!" },
  { id: 2, message: "Where are you?" },
  { id: 3, message: "OK!" },
  { id: 4, message: "See you later!" },
  { id: 5, message: ";)" },
  { id: 6, message: "Bye!" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
