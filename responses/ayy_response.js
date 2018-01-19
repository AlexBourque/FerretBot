exports.run = async (client, message) => {
    message.channel.send("lmao");
};

exports.conf = {
  name: "ayy_response",
  regex :/^Ayy$/i,
  permLevel: "User",
  chance:100,
  enabled: true,
  basic: true
};