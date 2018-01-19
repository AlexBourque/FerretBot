exports.run = async (client, message) => {
    message.channel.send("<:Wynaut:307667365729009674>");
};

exports.conf = {
  name: "y_response",
  regex :/^y\su\sdo\sdis$/i,
  permLevel: "User",
  chance:100,
  enabled: false,
  basic: true
};