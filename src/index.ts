#!/usr/bin/env node
import * as commander from "commander";
import * as co from "co";
import * as prompt from "co-prompt";

commander
    .command('login')
    .description('login to pubnub - sets the session key in .pubnub-session-key')
    .option('-u, --username <username>', 'The pubnub user to authenticate as')
    .option('-p, --password <password>', 'The pubnub user\'s password')
    .action((options: any) => {
        console.log('asdasda: %s', options);
    })

commander.parse(process.argv);
console.log("trol");