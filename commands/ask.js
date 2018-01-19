exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    if(args.length == 0){
        message.channel.send("You must first ask a question");
    }
    var response = [
                "It is certain",
                "It is decidedly so",
                "Without a doubt",
                "Yes definitely",
                "You may rely on it",
                "As I see it, yes",
                "Most likely",
                "Outlook good",
                "Yes",
                "Signs point to yes",
                "Reply hazy try again",
                "Ask again later",
                "Better not tell you now",
                "Cannot predict now",
                "Concentrate and ask again",
                "Don't count on it",
                "My reply is no",
                "My sources say no",
                "Outlook not so good",
                "Very doubtful"
            ];
    message.channel.send(response[Math.floor(Math.random() * 20)])
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["8ball"],
  permLevel: "User"
};

exports.help = {
  name: "ask",
  category: "Lookup",
  description: "Ask a question, get an answer.",
  usage: "ask 'question'"
};