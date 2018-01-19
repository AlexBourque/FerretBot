const keys = require('../keys.json');
const GoogleSearch = require('google-search');
const googleSearch = new GoogleSearch({
  key: keys.gkey,
  cx: keys.gcx
});


exports.run = async (client, message, args, level) => {
    var indexNum = Math.floor(Math.random() * 10) + 1;
    var totalNum = 1;
    var i = 0;
    for (i = 0; i < args.length; ++i){
        if(/^-i=\d$/.test(args[i])){
            indexNum = parseInt(args[i].slice(3));
        }
        else if(/^-n=\d$/.test(args[i])){
            totalNum = parseInt(args[i].slice(3));
        }
        else break;
    }
    const terms = args.slice(i).join(" ");
    if (terms.length == 0){
        message.channel.send("requieres terms");
        return;
    }
    console.log(i);
    googleSearch.build({
            q: terms,
            start: indexNum,
            excludeTerms: ".svg",
            gl: 'countryCA',
            lr: "lang_en",
            num: totalNum, 
            searchType: 'image',
        }, function(error, response) {
            var msg = []; 
            for(var j = 0; j < response.items.length; ++j){
                msg.push(response.items[j].link);
            }
            message.channel.send(msg.join("\n"))
        });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["isearch","imgsrch","imgs"],
  permLevel: "User"
};

exports.help = {
  name: "imagesearch",
  category: "Lookup",
  description: "Tell me what kind of image you want to see",
  usage: "imagesearch [-i=(exct index to start at, ussally random) | -n=(number of results to display)] query"
};
    
