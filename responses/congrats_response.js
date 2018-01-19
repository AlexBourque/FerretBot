exports.run = async (client, message) => {
    message.channel.send("https://imgur.com/a/Qlpzj");
};

exports.conf = {
  name: "congrats_response",
  regex :/^congrats$/i,
  permLevel: "User",
  chance:100,
  enabled: true,
  basic: true
};