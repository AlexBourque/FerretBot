exports.run = async (client, message) => { // eslint-disable-line no-unused-vars
  
  var score = Math.floor(Math.random() * 30 + 1);
   var scapgoat;
   var scapid;
   var username = message.channel.members.get(message.author.id).nickname || message.author.username;
   let scapgoatuser = message.channel.members.filter(m => m.id != message.author.id && !m.user.bot).random();
   if (scapgoatuser == null) return;
   scapgoat = scapgoatuser.nickname || scapgoatuser.user.username;
   scapid = scapgoatuser.id;  

   var msgs = [
    {msg:"Very good. You’ve really come together as a team. Thanks to the one of you who appears to be doing all of the work.", id:message.author.id, mult:1},
    {msg:"To reiterate: This is not a competition. Still, if it were, "+username+" would be winning. It's not, though.", id:message.author.id, mult:1},
    {msg:"You have a gift for these tests. That’s not just flattery. You are great at science.", id:message.author.id, mult:1},
    {msg:+scapgoat+", please disregard the following statement: "+username+", you have been a shining light in an otherwise ungodly morass of incompetence.", id:message.author.id, mult:1},
    {msg:"It would be pointless for either of us to hurt "+scapgoat+"’s feelings. But it’s clear to everyone monitoring the server who would be carrying who here.", id:message.author.id, mult:1},
    {msg:scapgoat+", just look at how much better you are than "+username+". "+username+", you are very good at being an example.", id:message.author.id, mult:5},
    {msg:username+" just taught "+scapgoat+" a valuable lesson in trust.", id:message.author.id, mult:1},
    {msg:username+", now you're just being cruel.", id:message.author.id, mult:5},
    {msg:username+"! "+scapgoat+" has always been my favorite. Until now.", id:message.author.id, mult:0.1},
    {msg:username+", to be clear. I was just asking "+scapgoat+" if they trusted you. I trust you. You are my favorite cooperative testing subject.", id:message.author.id, mult:1},

    {msg:username+", "+scapgoat+" and I were just discussing your behavior on the last few messages. I have to agree.", id:message.author.id, mult:-1},//author minus
    {msg:"Credit where credit's due: you're all doing a great job of disappointing me. I just hate "+username+" a little more.", id:message.author.id, mult:-5},
    {msg:"I've been doing some reading. Did you know that the phrase "+username+" is derived from the same Latin root as the word traitor?", id:message.author.id, mult:-1},
    {msg:"Keep it up and you will lose 500 points.", id:message.author.id, mult:-5},
    {msg:"We all agree you should stop.", id:message.author.id, mult:-1},
    {msg:username+", it's not nice to make fun of "+scapgoat+" like that.", id:message.author.id, mult:-0.1},
    {msg:scapgoat+", I agree. I never noticed that about "+username+" before.", id:message.author.id, mult:-1},
    {msg:"I don't want to drive a wedge between all of you, but I've been studying "+username+"'s performance, and I don't know how to put this... I'm certain you're trying very hard.", id:message.author.id, mult:-1},
    {msg:"Did you think that would be funny?", id:message.author.id, mult:1},
    {msg:"I don't know what you think you are doing, but I don't like it. I want you to stop.", id:message.author.id, mult:-1},
    {msg:"I’ve been listening to "+username+" talk and I don’t know how all of you put up with it, I really don’t. You all have the patience of a saint.", id:message.author.id, mult:-1},
    {msg:"That isn't science.", id:message.author.id, mult:-1},
    {msg:"Your failing does not make this science.", id:message.author.id, mult:-1},
    {msg:username+", "+scapgoat+" is smart. The lesson on trust only needs to be taught once.", id:message.author.id, mult:-1},
    {msg:"Are you doing that just to aggravate me?", id:message.author.id, mult:-1},
    {msg:"Oops. My hand sliped.", id:message.author.id, mult:-100},
    
    {msg:"Clearly that was "+scapgoat+"'s fault.", id:scapid, mult:-7},
    {msg:"I can't bite my tongue anymore: You would be better on your own. "+scapgoat+" is dragging you down. There. I've said it.", id:scapid, mult:-2},
    
    {msg:"As an impartial collaboration facilitator, it would be unfair of me to name my favorite member of this server. However, it’s perfectly fair to hint at it in a way that my least favorite member probably isn't smart enough to understand. Rhymeswithg"+scapgoat.slice(1).replace(/\s/, "")+". "+username+" you are doing very well.", id:message.author.id, mult:0},
    {msg:"I’m shocked you’d say that, "+scapgoat+". If you sabatouged them—I’m sorry. Wrong feed. Carry on, "+username+". Good work.", id:message.author.id, mult:0},
    {msg:"I can’t keep quiet about this. I think "+scapgoat+" is actively trying to sabotage your success. Let’s keep this between us.", id:scapid, mult:0},
    {msg:"Correct "+username+", "+scapgoat+" can't hear you... They did what? Are you sure?... Thank you, that was very brave of you to tell me.", id:scapid, mult:0},
    {msg:"Am I interrupting your important conversation?", id:message.author.id, mult:0},
    {msg:"I would prefer to speak to one of you in private but since that is not an option here, I will speak in code that only one of you will understand. "+username+": "+scapgoat+" is plotting to destroy you.", id:message.author.id, mult:0},
    {msg:"Watching you try to sabotage one other, I'm amazed you're still on friendly terms.", id:message.author.id, mult:0},
    {msg:username+", how well do you really know "+scapgoat+"? Do you trust "+scapgoat+"? What if I told you, you aren't "+scapgoat+"'s first cooperative partner?", id:message.author.id, mult:0},
   ]

   msgobj = msgs[Math.floor(Math.random()*msgs.length)];
   score = Math.round(score*msgobj.mult);
   message.channel.send(msgobj.msg);
   let oldscore = client.userstats.get(msgobj.id);
   if(msgobj.msg == "Oops. My hand sliped."){  
    score = ((oldscore.points < 0 ) ? -1 : 1)*2*oldscore.points;
   }
   oldscore.points += score;
   client.userstats.set(msgobj.id,oldscore);
   if(score > 0){
     message.channel.send((scapid==msgobj.id ? scapgoat : username) + " is awarded "+score+" points!");
   } else if (score < 0){
      score *= -1;
      message.channel.send((scapid==msgobj.id ? scapgoat : username) + " is penalized "+ score +" science collaboration points.");  
   }
};

exports.conf = {
  name: "glados_response",
  regex: /^.*$/, //also known as all messages
  permLevel: "User",
  chance: 1,
  enabled: true,
  basic: false
};