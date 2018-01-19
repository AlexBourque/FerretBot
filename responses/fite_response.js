exports.run = async (client, message) => {
    var ready = ["A good day for a swell battle!",
                 "This match will get red hot!",
                 "Here's a real high-class bout!",
                 "A great slam and then some!",
                 "A brawl is surely brewing!"]
    var wallop = [  "And begin!",
                    "Now go!",
                    "Here goes!",
                    "You're up!",
                    "It's on!"  ]
    message.channel.send(ready[Math.floor(Math.random()*5)]+" "+wallop[Math.floor(Math.random()*5)]);
};

exports.conf = {
  name: "fite_response",
  regex :/^fite\sme$/i,
  permLevel: "User",
  chance:100,
  enabled: true,
  basic: true
};