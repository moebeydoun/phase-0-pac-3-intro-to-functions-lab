function shout(string) {
    // todo
}function shout(string) {
    return string.toUpperCase();
  }function whisper(string) {
    return string.toLowerCase();
  }function logShout(string) {
    console.log(string.toUpperCase()) 
  }function logWhisper(string) {
    console.log(string.toLowerCase())
  }function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    }
    // You can add an alternative response for when the input is not in lowercase
    if (string === string.toUpperCase()) {
        return "YES INDEED!"
    }if (string === "Let's have dinner together!") {
        return "I would love to!"
    }
  }


  let string = "hello"
  console.log(string === string.toLowerCase())
  console.log("luis" === "moe")
  // Test the function
//   const inputString = "hello";
//   const result = sayHiToHeadphonedRoommate(inputString);
//   console.log(result); // This should print "I can't hear you!"
