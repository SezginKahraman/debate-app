const generateRandomUsername = () => {
    const adjectives = ["Quick", "Lazy", "Happy", "Sad", "Angry"];
    const nouns = ["Fox", "Dog", "Cat", "Bear", "Lion"];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdjective}${randomNoun}${Math.floor(Math.random() * 1000)}`;
  };
  
  export default generateRandomUsername;