exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if(message.mentions.users[0]) {
    message.channel.send("They have: " + client.userstats.get(message.mentions.users[0].id).points + " points!");
  }
  message.channel.send("You have: " + client.userstats.get(message.author.id).points + " points!");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "points",
  category: "lookup",
  description: "I will tell you how many points you have.",
  usage: "points"
};
