const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util");
const fs = require('fs');
const pdf = require('html-pdf');
var gs = require('github-scraper');
const writeFileAsync = util.promisify(fs.writeFile);
const gsPromise = util.promisify(gs);
var github;