exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const thegame = args.join(" ");
  client.user.setGame(thegame);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "goplay",
  category: "Miscelaneous",
  description: "Tell me what to play",
  usage: "goplay 'game'"
};
