const fs = require("fs");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  var ottarray = fs.readdirSync("C:/Users/SirOtter/Pictures/otters/");
  const filepath = "C:/Users/SirOtter/Pictures/otters/" + ottarray[Math.floor(Math.random() * (ottarray.length-1))];
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
