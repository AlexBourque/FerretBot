const fs = require("fs");

exports.run = async (client, message, [name, ...args], level) => { 
  var respArr = [];
  var regexArr = [];
  var i = 0;
  var chance = args[i++]
  for(; i< args.length; ++i){
    if(args[i] == "|") break;
    regexArr.push(args[i]);
  }
  for(++i; i< args.length; ++i){
    respArr.push(args[i]);
  }
  
  var regex = regexArr.join("\\s");
  var resp = respArr.join(" ");

  if (/[\`\"]/.test(args.join(" "))) {
    message.channel.send("For safety reasons, response cannot include the following: \" or \`");
    return;
  }
  
  if(client.responses.get(name)){
    message.channel.send("A response with that name already exists.");
    return;
  } else if (client.commands.get(name)){
    message.channel.send("Responses cannot share names with commands");
    return;
  }
  let filename = `responses/${name}.js`
  try
  {
    let fd = fs.openSync(filename, "a")
    fs.writeFileSync(fd,`exports.run = async (client, message) => {\n    message.channel.send(\"${resp}\");\n};\n\nexports.conf = {\n  name: \"${name}\",\n  regex :/^${regex}$/i,\n  permLevel: "User",\n  chance:${chance},\n  enabled: true,\n  basic: true\n};`)
    fs.closeSync(fd);
    client.loadResponse(name);
  }
  catch (e)
  {
    message.channel.send(`An error occurred, sorry. :${e}`);
    return;
  }
  message.channel.send("Succesfully added the response");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "teachsimple",
  category: "System",
  description: "Teach me to say something. \n REGEXP: \n A regexp is a way to valadate strings, full info can be found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions \n Examples: \n /foo/ : any string contaning \"foo\" \n /foo/i : same as above, but case insensative \n /^foo$/ : the string is exactly \"foo\"",
  usage: "teach name regexp chance response..."
};
