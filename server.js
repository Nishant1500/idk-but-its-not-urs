const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: true,
  disabledEvents: ["TYPING_START"]
});
const { app } = require('./view/visual.js')
const { readdirSync } = require("fs");
const { join } = require("path");
const { PREFIX } = require("./config.json");

  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`Listening on port ${port}..`));

//CLIENT EVENTS
client.on("ready", () => {
  console.log("Ready to boom your ears | Bot created by ZeroSync");
  client.user.setActivity("Sourced By 0_0#6666");
});

client.on("warn", info => console.log(info));

client.on("error", console.error);

//DEFINIING
client.commands = new discord.Collection();
client.prefix = PREFIX;
client.queue = new Map();
client.vote = new Map();

//LETS LOAD ALL FILES
const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file =>
  file.endsWith(".js")
);
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file));
  client.commands.set(command.name, command);
} //LOADING DONE

//WHEN SOMEONE MESSAGE
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.guild) return;

  if (message.content.startsWith(PREFIX)) {
    //IF MESSSAGE STARTS WITH MINE BOT PREFIX

    const args = message.content
      .slice(PREFIX.length)
      .trim()
      .split(/ +/); //removing prefix from args
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) {
      return;
    }

    try {
      //TRY TO GET COMMAND AND EXECUTE
      client.commands.get(command).execute(client, message, args);
      //COMMAND LOGS
      console.log(
        `${message.guild.name}: ${message.author.tag} Used ${
          client.commands.get(command).name
        } in #${message.channel.name}`
      );
    } catch (err) {
      //IF IT CATCH ERROR
      console.log(err);
      message.reply("I am getting error on using this command");
    }
  }
});

//DONT DO ANYTHING WITH THIS TOKEN lol
client.login(process.env.TOKEN);