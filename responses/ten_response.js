exports.run = async (client, message) => {
    message.channel.send("Equals one");
};

exports.conf = {
  name: "ten_response",
  regex :/^10\/10$/i,
  permLevel: "User",
  chance:100,
  enabled: true,
  basic: true
};