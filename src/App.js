import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "🔥": "Fire, Motivated",
  "😜": " Winking Face with Tongue",
  "🤠": " Cowboy Hat Face",
  "😎": " Cool, chill",
  "🤣": "Laughing like a crazy",
  "🙌": "Celelbrate",
  "🎊": "Party Toh Banti hai",
  "☠": "Khatra",
  "😊": "Happy",
  "😯": "Hushed"
};
var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    // console.log(event.target.value);
    var userInput = event.target.value;

    // console.log(emojiDictionary[userInput]);
    var meaning = emojiDictionary[userInput];
    console.log(meaning);
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <input onChange={emojiInputHandler}></input>
      <h2> {meaning}</h2>
      <div>
        {emojisWeKnow.map(function (emoji) {
          return <span onClick={() => emojiClickHandler(emoji)}>{emoji}</span>;
        })}
      </div>
    </div>
  );
}
