// @ts-check
// vendors
import React, { useState } from "react";

import InputEmoji from "react-input-emoji-native";

/**
 * @typedef {import('react-input-emoji').MetionUser} MetionUser
 */

const mockUsers = [
  {
    id: "1",
    name: "Stacey Fleming",
    image: "https://randomuser.me/api/portraits/women/73.jpg"
  },
  {
    id: "2",
    name: "Rachel Marshall",
    image: "https://randomuser.me/api/portraits/women/0.jpg"
  },
  {
    id: "3",
    name: "Bernice Patterson",
    image: "https://randomuser.me/api/portraits/women/35.jpg"
  }
];

const ExampleInput = () => {
  const [text, setText] = useState("");

  /**
   * Handle text change
   * @param {string} text
   */
  function handleTextChange(text) {
    setText(text);
  }

  /**
   *
   * @param {string} text
   * @return {Promise<MetionUser[]>}
   */
  async function searchMention(text) {
    if (!text) {
      return [];
    }

    const filteredText = text.substring(1).toLocaleLowerCase();

    return mockUsers.filter(user => {
      if (user.name.toLocaleLowerCase().startsWith(filteredText)) {
        return true;
      }

      const names = user.name.split(" ");

      return names.some(name =>
        name.toLocaleLowerCase().startsWith(filteredText)
      );
    });
  }

  return (
    <InputEmoji
      value={text}
      onChange={handleTextChange}
      cleanOnEnter
      onEnter={text => {
        console.log("enter", text);
      }}
      placeholder="Type a message"
      keepOpenend
      disableRecent
      maxLength={1200}
      searchMention={searchMention}
    />
  );
};

export default ExampleInput;
