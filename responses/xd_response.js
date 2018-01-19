exports.run = async (client, message) => { // eslint-disable-line no-unused-vars
   message.channel.send("ecks dee");
};

exports.conf = {
  name: "xd_response",
  regex: /^XD$/,
  permLevel: "User",
  chance: 100,
  enabled: true,
  basic: false
};