#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander = require("commander");
commander
    .command('login')
    .description('login to pubnub - sets the session key in .pubnub-session-key')
    .option('-u, --username <username>', 'The pubnub user to authenticate as')
    .option('-p, --password <password>', 'The pubnub user\'s password')
    .action(function (options) {
    console.log('asdasda: %s', options);
});
commander.parse(process.argv);
console.log("trol");
//# sourceMappingURL=index.js.map