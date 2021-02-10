
const express = require("express");
const app = express();
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/dreams", (request, response) => {
  response.json(dreams);
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});



const fs = require("fs");
const Discord = require ("discord.js")
const moment = require ("moment")
const client = new Discord.Client();
const prefix = "j!";


client.login("");
client.on("ready", async () => {
  console.log(`Logged in as ${client.user.username}!`);
  client.user.setStatus("ONLINE");
  client.user.setActivity(`j!help`, { type: "WATCHING" });
  client.guilds.cache.forEach(g => {
    if (g.member(client.user).hasPermission("ADMINISTRATOR")) {
      g.fetchInvites().then(guildInvites => {});
    }
  });
});

//////////





client.on("message", message => {
  if (message.content === prefix + "about") {
    const embed = new Discord.MessageEmbed()
    .setDescription(`                         
**[ invite ]**
**[ click here ](https://discord.com/api/oauth2/authorize?client_id=799228179784794183&permissions=8&scope=bot)** 
**[ support ]**
**[ click here ](https://discord.gg/3wykSpqjZq)**`)
      .setColor("BLACK")
    
      .addField("`my name`", `** ${client.user.tag} **`, true)

      .addField("`Server`", `**${client.guilds.cache.size} Server**`, true)
    
     .addField("`Usres`",  `**${client.users.cache.size}  Users**`, true)
    
    
     .addField( "`developer bot` ",`<@681553671364018196>`,true)


      .setImage("https://cdn.discordapp.com/attachments/696796419595567108/741981480653291570/image0-40.gif"
      );
    
    message.channel.send(embed);
    message.react("<a:jano_27:799630916820795422>");
  }
});



client.on("message", message => {
  if (message.content === prefix + "invite") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--><a:jano_10:799629559217389608> <a:jano_24:799630717507862558> click touch for link bot <a:jano_24:799630717507862558> <a:jano_10:799629559217389608><--=")
      .setURL(
        "https://discord.com/api/oauth2/authorize?client_id=799228179784794183&permissions=8&scope=bot"
      );
    message.channel.send(embed);
     message.react("<a:jano_27:799630916820795422>");
  }
});

///////




////// code invite vr 12 by jano///////
const invites = {};
const wait = require("util").promisify(setTimeout);
client.on("ready", () => {
  wait(1000);
  client.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  }); 
});
///////////////////
client.on("guildMemberAdd", member => {
  member.guild.fetchInvites().then(guildInvites => {
    const gamer = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses);
    const inviter = client.users.cache.get(invite.inviter.id);
    const channel = member.guild.channels.cache.find(
      channel => channel.name === "𝐈𝐧𝐯𝐢𝐭𝐞𝐬" 
    );
    channel.send(
      `__**<@${member.id}> **|invite kra la layan** | <@${inviter.id}> | **Zhmaray henan** |${invite.uses}**__`
    );
  });
});
////////////////






