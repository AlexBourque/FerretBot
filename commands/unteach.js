const fs = require("fs");

exports.run = async (client, message, [name, ...rest], level) => { 
  if(!client.responses.get(name)){
    message.channel.send("No response with that name exists.");
    return;
  } else if (!client.responses.get(name).conf.basic){
      message.channel.send("This response wasn't taught.");
      return;
  }
  let filename = `responses/${name}.js`

  try
  {
    client.unloadResponse(name);
    fs.unlinkSync(filename);
    client.responses.delete(name);
  }
  catch (e)
  {
    message.channel.send(`An error occurred, sorry. :${e}`);
    return;
  }

  message.channel.send("Succesfully removed the response");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "unteach",
  category: "System",
  description: "Unteach me somthing I have been taught.",
  usage: "unteach responseName"
};
