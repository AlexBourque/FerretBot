exports.run = async (client, message) => {
    message.channel.send("but its also a test");
};

exports.conf = {
  name: "example_response",
  regex :/^this\sis\san\sexample$/i,
  permLevel: "User",
  chance:100,
  enabled: true,
  basic: true
};