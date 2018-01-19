exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const themsg = args.join(" ");
    message.channel.send(themsg);
    message.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "say",
  category: "Miscelaneous",
  description: "Tell me what to say.",
  usage: "say"
};
