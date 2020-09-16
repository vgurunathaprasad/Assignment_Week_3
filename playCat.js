const { toRegex } = require("picomatch");

var cat = {
 name: "Fluffy",
 activities: ["play", "eat cat food"],
 catFriends: [
 {
 name: "bar",
 activities: ["be grumpy", "eat bread omblet"],
 weight: 8,
 furcolor: "white"
 }, 
 {
 name: "foo",
 activities: ["sleep", "pre-sleep naps"],
 weight: 3
 }
 ]
}

cat.height = "7cm";
cat.weight = "14kg";

cat.name = "Fluffyy"

for (let i of cat.activities) { console.log(i); }

for(let i  of cat.catFriends) { console.log(i.name); }

let catsWeight = 0
for(let i  of cat.catFriends) { catsWeight+=i.weight; }
console.log(catsWeight);

let totalCatActivities = 0;
for(let i  of cat.catFriends) { totalCatActivities+=i.activities.length }
totalCatActivities += cat.activities.length;
console.log(totalCatActivities);

for(let i  of cat.catFriends) { i.activities.push("act1"); i.activities.push("act2"); }

cat.catFriends[0].furcolor = "Black"