// Getting Discord.js and Cron
const Discord = require('discord.js');
const cron = require('cron');
const config = require('./config.json');
const token = (config.token)
const alt1 = (config.alt1)
const alt2 = (config.alt2)
const alt3 = (config.alt3)
        
// Creating a discord client
const main = new Discord.Client();
const account1 = new Discord.Client();
const account2 = new Discord.Client();
const account3 = new Discord.Client();
    
// We need to run it just one time and when the client is ready
// Because then it will get undefined if the client isn't ready
main.once("ready", () => {
  console.log(`Logged in as ${main.user.tag}`);
   
  //second minute hour day month week
  let scheduledMessageMain = new cron.CronJob('20 48 13 * * *', () => {
  // This runs every day at 10:30:00, you can do anything you want
  // Specifing your guild (server) and your channel
     main.channels.get('816634959548252193').send('pls buy sugar');
    }, null, true, 'Europe/London');
        
    // When you want to start it, use:
	scheduledMessageMain.start()
});

// We need to run it just one time and when the client is ready
// Because then it will get undefined if the client isn't ready
account1.once("ready", () => {
  console.log(`Logged in as ${account1.user.tag}`);
   
  //second minute hour day month week
  let scheduledMessageAlt1 = new cron.CronJob('25 48 13 * * *', () => {
  // This runs every day at 10:30:00, you can do anything you want
  // Specifing your guild (server) and your channel
     account1.channels.get('816634959548252193').send('pls buy sugar');
    }, null, true, 'Europe/London');
        
    // When you want to start it, use:
	scheduledMessageAlt1.start()
});

// We need to run it just one time and when the client is ready
// Because then it will get undefined if the client isn't ready
account2.once("ready", () => {
  console.log(`Logged in as ${account2.user.tag}`);
   
  //second minute hour day month week
  let scheduledMessageAlt2 = new cron.CronJob('34 48 13 * * *', () => {
  // This runs every day at 10:30:00, you can do anything you want
  // Specifing your guild (server) and your channel
     account2.channels.get('816634959548252193').send('pls buy sugar');
    }, null, true, 'Europe/London');
        
    // When you want to start it, use:
	scheduledMessageAlt2.start()
});

// We need to run it just one time and when the client is ready
// Because then it will get undefined if the client isn't ready
account3.once("ready", () => {
  console.log(`Logged in as ${account3.user.tag}`);
   
  //second minute hour day month week
  let scheduledMessageAlt3 = new cron.CronJob('40 48 13 * * *', () => {
  // This runs every day at 10:30:00, you can do anything you want
  // Specifing your guild (server) and your channel
     account3.channels.get('816634959548252193').send('pls buy sugar');
    }, null, true, 'Europe/London');
        
    // When you want to start it, use:
	scheduledMessageAlt3.start()
});

if (token !== "") {
	main.login(token);
} else {
	console.log("no main token provided")
}
if (alt1 !== "") {
	account1.login(alt1);
} else {
	console.log("no alt1 token provided")
}
if (alt2 !== "") {
	account2.login(alt2);
} else {
	console.log("no alt2 token provided")
}
if (alt3 !== "") {
	account3.login(alt3);
} else {
	console.log("no alt3 token provided")
}
