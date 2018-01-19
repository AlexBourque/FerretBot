exports.run = async (client, message) => {
    message.channel.send("Thank you for purchesing the 'insult us' DLC, that will cost you 5.99 USD");
};

exports.conf = {
  name: "ea_response",
  regex :/^gj\sea$/i,
  permLevel: "User",
  chance:100,
  enabled: true,
  basic: true
};