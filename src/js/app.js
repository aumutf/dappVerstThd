import * as flsFunctions from "./modules/functions.js";

import 'emoji-picker-element';
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

import GifPicker from 'gifpicker';
//import 'gifpicker/dist/style.css';

flsFunctions.isWebp();
polyfillCountryFlagEmojis();
console.log(GifPicker);

const postText = document.querySelector("#postText");
document.querySelector('emoji-picker')
  .addEventListener('emoji-click', event => {
    //console.log(event.detail);
    postText.value += event.detail.emoji.unicode;
  });

  const showEmojiPicker = document.querySelector("#showEmojiPicker");
  const emojiPicker = document.querySelector("emoji-picker");
  showEmojiPicker.addEventListener("click", e => {
    emojiPicker.classList.toggle("hide");
  });

  document.addEventListener("click", e => {
    if (e.target.id != "postText" && e.target.id != "showEmojiPicker" && e.target.tagName != "EMOJI-PICKER") {
        emojiPicker.classList.add("hide");
    }
    
  });