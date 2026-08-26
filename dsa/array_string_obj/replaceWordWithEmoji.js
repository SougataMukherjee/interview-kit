function replaceWithEmoji(text) {
  const words = text.split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();

    if (emojiMap[word]) {
      words[i] = emojiMap[word];
    }
  }
  return words.join(' ')
}
 const emojiMap = {
  // Emotions
  happy: "😊",
  sad: "😢",
  love: "❤️",
  angry: "😠",
  // Greetings
  hello: "👋",
  bye: "👋",
  goodnight: "🌙",
  night: "🌙",
};

console.log(replaceWithEmoji('happy birthday'))//😊 birthday
console.log(replaceWithEmoji('hello world'))//👋 world
console.log(replaceWithEmoji('hi there!'))//hi there!