import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // var [ userInput , setUserInput ] = useState(" ")

  // function inputchangeHandler(event)
  // {
  //   // console.log(event.target);
  //   console.log(event.target.value);
  //   setUserInput (event.target.value);
  // }

  var emojiDictionary = {
    "😊": "smiling",

    "😎": "sunglasses",

    "💗": "Heart",

    "😞": "Disappointed",

    "😉": "Winking ",

    "😳": "Flushed",

    "😐": "Neutral",

    "😠": "Angry"
  };

  var emojisweknow = Object.keys(emojiDictionary);

  const [meaning, setMeaning] = useState(" ");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    // console.log(meaning);

    if (meaning === undefined) {
      meaning = "We don't have this is our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Wassup?</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3> Emoji We know</h3>
      {emojisweknow.map(function (emoji) {
        return (
          <span
            style={{ fontSize: "4rem", padding: "0.5rem", cursor: "pointer" }}
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
