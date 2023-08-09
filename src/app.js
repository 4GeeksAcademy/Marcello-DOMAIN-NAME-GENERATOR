//write your code here
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon", "lastOfUs"];
let extensions = ["com", "net", "us", "io"];
let phrase = "";
for (let i = 0; i < pronoun.length; i++) {
  for (let y = 0; y < adj.length; y++) {
    for (let x = 0; x < noun.length; x++) {
      for (let z = 0; z < extensions.length; z++) {
        let domain;
        if (noun[x].toLowerCase().endsWith(extensions[z])) {
          domain = noun[x].slice(0, -extensions[z].length);
        } else {
          domain = noun[x];
        }
        console.log(`${pronoun[i]}${adj[y]}${domain}.${extensions[z]}`);
      }
    }
  }
}