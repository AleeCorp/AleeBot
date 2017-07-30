/****************************************
 *
 *   AleeBot for AleeArmy Community and other servers
 *   Copyright (C) 2017 AleeCorp
 *
 *   This script is made by Alee14 and other people.
 *   Some stuff was made by Victor Tran (vicr123), swawesome95 (no longer a dev), Rain and AKidFromTheUK.
 *   Please say thanks to swawesome95 to laying the basics of this bot, and Rain for improving some of the code.
 *
 * *************************************/
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./absettings.json');

const prefix = "ab:";
var ver = "1.0.7";
var logsChannel = "318874545593384970";

client.on('ready', () => {
       console.log("[SUCCESS] AleeBot is now ready! Running version "+ ver +"!");
    client.setInterval(setGame, 300000);
    setGame();
   });
//Only works for AleeAmry Community I need someone to work it for Public and it's disabled because it crashes AleeBot :(
/*client.on("guildMemberAdd", function(member) {
	member.guild.channels.find("name", "welcomes-and-byes").sendMessage(member.toString() + " Welcome to the AleeArmy!");
});

client.on("guildMemberRemove", function(member) {
	member.guild.channels.find("name", "welcomes-and-byes").sendMessage(member.toString() + " Nice knowing you bye...");
});*/

	function setGame() {
    var presence = {};
    presence.game = {};
    presence.status = "online";
    presence.afk = false;

    switch (Math.floor(Math.random() * 1000) % 27) {
        case 0:
            presence.game.name = "with ban buttons";
            break;
        case 1:
            presence.game.name = "AleeOS or ShiftOS";
            break;
        case 2:
            presence.game.name = "Annoy Alee";
            break;
        case 3:
            presence.game.name = "with an internal bug";
            break;
        case 4:
            presence.game.name = "in the forest";
            break;
        case 5:
            presence.game.name = "bot games";
            break;
        case 6:
            presence.game.name = "with binary code";
            break;
        case 7:
            presence.game.name = "being very cool";
            break;
        case 8:
            presence.game.name = "with supa weapon";
            break;
        case 9:
            presence.game.name = "solving puzzles";
            break;
        case 10:
            presence.game.name = "rewinding time";
            break;
        case 11:
            presence.game.name = "checking archives";
            break;
        case 12:
            presence.game.name = "being unbreakable";
            break;
        case 13:
            presence.game.name = "sandwiches";
            break;
        case 14:
            presence.game.name = "drawing pokemon";
            break;
        case 15:
            presence.game.name = "obsessing";
            break;
        case 16:
            presence.game.name = "the waiting game";
            break;
        case 17:
            presence.game.name = "da VMware World!";
            break;
        case 18:
            presence.game.name = "with hexagons";
            break;
        case 19:
            presence.game.name = "with music";
            break;
        case 20:
            presence.game.name = "being a ninja";
            break;
        case 21:
            presence.game.name = "if money cant buy happiness then why is it so fabulous";
            break;
        case 22:
            presence.game.name = "being awesome";
            break;
        case 23:
            presence.game.name = "AleeCraft";
            break;
        case 24:
            presence.game.name = "AleeChat";
            break;
        case 25:
            presence.game.name = "For help ab:help";
            break;
	case 26:
	    presence.game.name = "trying to DJ";
	    break;
    }
client.user.setPresence(presence);
}
/*
function wordFilter(content) {
    var word = content.search(/\b(fuck|fag|faggot|fuck|fuk|fuc|fucc|ho|phuck|hentai|porn|slut|bitch|succ|fucking|shit|ass|asshole|mofo|motherfucker|fucker|damn|hell|dick|cock|sex|cunt|nigger|nigga)+\b/i);

    if (word != -1) {
        return true;
    } else {
        return false;
    }
} */

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
			.addField('Commands for AleeBot!\n\n',
			'**'+prefix+'profile** Shows your profile pic in a image.\n' +
			'**'+prefix+'git** Shows the repo of AleeBot.\n' +
			"**"+prefix+"ping** Type this command and you'll see ;).\n" +
			'**'+prefix+'owner** Shows who made this bot.\n' +
			'**'+prefix+'suggest** You suggest things (working progress).\n' +
      '**'+prefix+'userinfo** Tells you your info about you.', true)
      .setFooter("AleeBot Copyright 2017. The version that AleeBot's running is " + ver + "!")
			.setColor(0x00FFFF)
			message.channel.sendEmbed(embed);
	}

    if(command === 'profile'){
        message.reply(message.author.avatarURL);
    }

    if(command === 'git'){
        message.channel.send ('Here is the github repo: https://github.com/AleeCorp/AleeBot');
    }

    if(command === 'ping'){
        message.reply('Pong! :ping_pong:');
    }

    if(command === 'owner'){
		message.channel.send ('The person who made this bot is Alee14#9928!');
    }

    if(command === 'suggest'){
        message.reply('Sorry this feature is still being worked on :(');
    }

    if(command === 'userinfo'){
         var embed = new Discord.RichEmbed()
         .setAuthor(message.author.username)
         .setDescription("This is your user info!")
         .setColor(0x00FFFF)
         .addField("Username", `${message.author.username}#${message.author.discriminator}`)
         .addField("Created At", message.author.createdAt)
   			 message.channel.sendEmbed(embed);

    }

    if(command === 'serverinfo'){
      var embed = new Discord.RichEmbed()
      .addField("Coming soon!")
      .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
    }
 });

 process.on('unhandledRejection', function(err, p) { 
   console.log("[ERROR | UNCAUGHT PROMISE] " + err.stack);
});

 client.login (config.token).catch(function() {
       console.log("[ERROR] Login failed. Please contact Alee14#9928 or email him at alee14498@gmail.com.");
   });
