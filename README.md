# ProfileGen
Generates a GitHub profile for the user
As a job searcher in the tech industry, I need a quick and easy way to display a concise resume of my GitHub so that potential employers can see some of my work and stats.

First, clone the GitHub repo, then open the terminal. 
You will have to run the following installations:
  
  npm install
  
  npm install github-scraper
  
  npm install axios
  
  npm install inquirer
  
  npm install {{{pdf converter}}}
  
Then, run node index.js 

The terminal should then ask for a GitHub username to generate results, then a preferred text color, and finally a background color for the info cards.

This process will create an HTML file, which then will create a pdf file.
