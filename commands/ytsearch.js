const keys = require('../keys.json');
const youtubeSearch = require('youtube-search');
const opts = {
  maxResults: 1,
  key: keys.gkey
};

exports.run = async (client, message, args, level) => {
    var query = args.join(" ");
    youtubeSearch(query, opts, function(err, results) {
        if(err) return console.log(err);
        message.channel.send(results[0].link);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["vidsearch","videoseach","youtube"],
  permLevel: "User"
};

exports.help = {
  name: "ytsearch",
  category: "Lookup",
  description: "Tell me what kind of video you want to see",
  usage: "ytsearch query"
};
    
