exports.run = async (client, message) => {
    message.channel.send("<:Wynaut:307667365729009674>");
};

exports.conf = {
  name: "ynot_response",
  regex :/^y\s(tho|(you|u)\sdo\s(dis|this))$/i,
  permLevel: "User",
  chance:100,
  enabled: true,
  basic: true
};