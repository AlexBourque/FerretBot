const fs = require("fs");
const ottloc = require("../keys.json");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  var ottarray = fs.readdirSync(ottloc.otterlocation);
  const filepath = ottloc.otterlocation + ottarray[Math.floor(Math.random() * (ottarray.length-1))];
  message.channel.sendMessage("💕 here is ur ott 💕", {
            file: filepath
        });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["otter","giveotter","gibott"],
  permLevel: "User"
};

exports.help = {
  name: "otterpls",
  category: "Lookup",
  description: "I give you an otter",
  usage: "otterpls"
};
