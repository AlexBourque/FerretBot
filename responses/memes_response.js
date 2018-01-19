exports.run = async (client, message) => {
    message.channel.send("The DNA of the soul. They shape our will. They are the culture. They are everything we pass on. Envy, greed, despair: all memes, all passed on. You can't fight nature, Jack!");
};

exports.conf = {
  name: "memes_response",
  regex :/^memes$/i,
  permLevel: "User",
  chance:100,
  enabled: true,
  basic: true
};