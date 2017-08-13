/****************************************
 *
 *   AleeBot for AleeArmy Community and other servers
 *   Copyright (C) 2017 AleeCorp
 *
 *   This script is made by Alee14 and other people.
 *   Some stuff was made by swawesome95 (no longer a dev), Rain and AKidFromTheUK.
 *   Please say thanks to swawesome95 to laying the basics of this bot (which looks bad), and Rain for improving some of the code.
 *
 * *************************************/
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./absettings.json');

const prefix = "ab:";
const year = "2017";
var abversion = "1.0.8.5";
var logsChannel = "318874545593384970";

client.on('ready', () => {
       console.log("[SUCCESS] AleeBot is now ready! Running version "+ abversion +"!");
       client.user.setGame(`on ${client.guilds.size} servers`);
       client.user.setStatus('online')
   });

client.on("guildMemberAdd", function(member) {
	member.guild.channels.find("name", "welcomes-and-byes").sendMessage(member.toString() + " has joined the server");
});

client.on("guildMemberRemove", function(member) {
	member.guild.channels.find("name", "welcomes-and-byes").sendMessage(member.toString() + " has left the server");
});

/*
function wordFilter(content) {
    var word = content.search(/\b(fuck|fag|faggot|fuck|fuk|fuc|fucc|ho|phuck|hentai|porn|slut|bitch|succ|fucking|shit|ass|asshole|mofo|motherfucker|fucker|damn|hell|dick|cock|sex|cunt|nigger|nigga)+\b/i);

    if (word != -1) {
        return true;
    } else {
        return false;
    }
} */


client.on("guildCreate", guild => {

  // This event triggers when the bot joins a guild.

  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);

  client.user.setGame(`on ${client.guilds.size} servers`);

  guild.defaultChannel.sendMessage(":wave: Hello I am AleeBot thanks for inviting me to your server for help type `ab:help`.")

});



client.on("guildDelete", guild => {

  // this event triggers when the bot is removed from a guild.

  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);

  client.user.setGame(`on ${client.guilds.size} servers`);

});


client.on("message", function(message){
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
/*	if (wordFilter(message.content))
	{
		message.delete();
		client.channels.get('318874545593384970').sendMessage(":information_source: " + message.author.username + " just swore!");
		console.log("[INFO] " + message.author.username + " just swore!");
		switch (Math.floor(Math.random() * 1000) % 3) {
		message.reply("You have been caught swearing.");
		message.author.send("You have been caught swearing in AleeArmy Community.");
	} */

	 if (command === 'help'){
		 var embed = new Discord.RichEmbed()
      .setTitle('Commands for AleeBot ' + abversion )
      .setDescription('Every command you put in this bot must start with `ab:`')
	            .addField('Fun Stuff:', 'attack\nask\nship',true)
      .addField('Info:', 'userinfo\nserverinfo',true)
      .addField('Link:', 'botinvite\nserverinvite\ngit',true)
      .addField('Owner Only:', 'say\neval',true)
      .addField('Monitor:', 'ping\nuptime',true)
      .addField('Etc:', 'avatarurl\nowner\nsuggest', true)
			.setFooter("AleeBot "+ abversion +" Copyright "+ year +". Created By Alee14", "https://cdn.discordapp.com/avatars/282547024547545109/6c147a444ae328c38145ef1f74169e38.png?size=2048")
			.setColor("#7af442")
			message.channel.sendEmbed(embed);

	}

    if(command === 'avatarURL'){
        message.reply(message.author.avatarURL);
    }

    if(command === 'git'){
        message.channel.send ("Here's the github repo: https://github.com/AleeCorp/AleeBot");
    }

    if(command === 'ping'){
        message.reply(`Pong! :ping_pong: \`${Date.now() - message.createdTimestamp} ms\``);
    }

    if(command === 'owner'){
		message.channel.send ('The person who made this bot is Alee14#9928!');
    }

    if(command === 'suggest'){
        message.reply('Sorry this feature is still being worked on :(');
    }

    if(command === 'uptime'){
      //This command was ported from AstralMod
      var timeString; // What we'll eventually put into the message

      var uptime = parseInt(client.uptime); // Get uptime in ms

      uptime = Math.floor(uptime / 1000); // Convert from ms to s

      var uptimeMinutes = Math.floor(uptime / 60); // Get the uptime in minutes

      var minutes = uptime % 60;

      var hours = 0;

      while (uptimeMinutes >= 60) {

      hours++;

      uptimeMinutes = uptimeMinutes - 60;

}



if (uptimeMinutes < 10) {

    timeString = hours + ":0" + uptimeMinutes // We need to add an additional 0 to the minutes

} else {

    timeString = hours + ":" + uptimeMinutes // We don't need to add an extra 0.

}



message.reply(":clock1: AleeBot has been up for " + timeString + " hours.");

commandProcessed = true;
    }

    if(command === 'userinfo'){
         var embed = new Discord.RichEmbed()
         .setAuthor(message.author.username)
         .setDescription("This is your user info!")
         .setColor("#7af442")
         .addField("Username", `${message.author.username}#${message.author.discriminator}`)
         .addField("Created At", message.author.createdAt)
   			 message.channel.sendEmbed(embed);

    }

    if(command === 'serverinfo'){
      var embed = new Discord.RichEmbed()
      .addField("Coming soon!")
      .setColor("#7af442")
      message.channel.sendEmbed(embed);
    }

    if (command === 'botinvite'){
      message.reply(':arrow_left: Continue in DMs.');
      message.author.sendMessage("AleeBot on your server? Great! Here's the link: https://goo.gl/KDQyrp");
    }

    if (command === 'serverinvite'){
      message.reply(':arrow_left: Continue in DMs.');
      message.author.sendMessage("You want a invite to the AleeArmy server? Here's the link: https://discord.gg/JqgXrAJ");

    }

    if(command === 'mod'){
      message.reply("This is working progress if you want to help do **"+prefix+"git** then go to the site and start a pull request")
      if(!message.member.roles.some(r=>["Admin", "Moderator","Co-Owner", "AleeBot Creator", "Staff", "Owner","King Alee"].includes(r.name)) )
      return message.reply("Hey! You're not a staff!");
      message.channel.send ('```Commands for Staff!\n\n' +
                  'ab:kick Kicks people\n' +
                  'ab:ban Bans People\n' +
                  "ab:rm Removes the message with a amount\n" +
                  'Please note that we are still working on this feature!```');
    }

    if(message.content == 'AleeBot sucks' || message.content == 'aleebot sucks' || message.content == 'AleeBot Sucks'){
      switch (Math.floor(Math.random() * 1000) % 3) {
      case 0:
      message.reply('Why you hate me .-.');
      break;
      case 1:
      message.reply('Okay but why you hate me?');
      break;
        }
    }

    if(command === 'attack'){
      //This command was ported from AstralMod

                            if (command.indexOf("@everyone") == -1) {

                                if (command.indexOf("@here") == -1) {

                                    message.channel.send("<@" + message.author.id + "> :right_facing_fist: " + args);

                                } else {

                                message.reply("Nice try, but I ain't going to interrupt everyone who is online at this time. Kinda nice to not be bothered.");

                                }

                            } else {

                                message.reply("Nice try, but I ain't going to interrupt everyone. Kinda nice to not be bothered.");

                            }

                            commandProcessed = true;
                        }
      if(command === 'ask'){
        var abaskanswer = [
          "Yes.",
          "No.",
          "Maybe.",
          "I don't know?",
          "Hmm let me think :thinking:",
          ":red_circle: ERROR 3029131 OVERFLOW!!!!"
        ];
        if (args[1]) {
           message.channel.sendMessage(abaskanswer[Math.floor(Math.random() * abaskanswer.length)]);
        } else {
          message.channel.sendMessage("Sorry, I don't know what your saying.")
        }

      }
// Owner is only allow to do this
    if(command === 'say'){
      if(message.author.id !== config.ownerID) return;
      message.channel.sendMessage(args.join(" "));
      message.delete();

    }
  if(command === 'eval'){
  if(message.author.id !== config.ownerID) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
       }
     }
    if(command === 'ship'){
      message.channel.send(":ship: "+ message.author.username + " x " + message.guild.members.random().displayName);
    }
 });

const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

 process.on('unhandledRejection', function(err, p) {
   console.log("[ERROR | UNCAUGHT PROMISE] " + err.stack);
});

 client.login (config.token).catch(function() {
       console.log("[ERROR] Login failed. Please contact Alee14#9928 or email him at alee14498@gmail.com.");
   });
