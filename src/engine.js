// JavaScript Document
//import fs from "file-saver";
//consts
const teams = require("/src/js_package/teams.js");
const peeps = require("/src/js_package/Person.js");
//const opp = require("/src/js_package/file_opp.js");
const dyarr = require("/src/js_package/d_arry.js");
const fs = require("fs");

//canvas opps
// const canvas = document.querySelector("canvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
//start for testing

//end

// people buttons
const input = document.getElementById("input");
const input_rank = document.getElementById("input_rank");
// const add_person_btn = document.getElementById("add_person");
const add_rank_btn = document.getElementById("add_rank");
const get_person_list_btn = document.getElementById("get_PersonList");
const get_arry_person_list_btn = document.getElementById("get_employees");
//teamA
const input_teamA = document.getElementById("teamA");
const teamA_btn = document.getElementById("add_to_teamA");
const teamA_print_btn = document.getElementById("print_teamA_btn");
const remove_from_teamA_btn = document.getElementById(
  "A_remove_teamMember_btn"
);
//teamB
const input_teamB = document.getElementById("teamB");
const teamB_btn = document.getElementById("add_to_teamB");
const teamB_print_btn = document.getElementById("print_teamB_btn");
const remove_from_teamB_btn = document.getElementById(
  "B_remove_teamMember_btn"
);
//teamC
const input_teamC = document.getElementById("teamC");
const teamC_btn = document.getElementById("add_to_teamC");
const teamC_print_btn = document.getElementById("print_teamC_btn");
const remove_from_teamC_btn = document.getElementById(
  "C_remove_teamMember_btn"
);
// declared var

// var w = (canvas.width = window.innerWidth),
//   h = (canvas.height = window.innerHeight),
//   ctx = canvas.getContext("2d");

//Invoked
let peep = new peeps.Person_list();
let teamA = new teams.team_list();
let teamB = new teams.team_list();
let teamC = new teams.team_list();
let dyarry = new dyarr.d_array();
//let opps = new opp.file_opp();
var file_people_IN = "/src/data/in/employee/employee.json";
var brave_workspace =
  "/node_modules/|/bower_components/|/.devtools|/.git/|/.sass-cache/|/.hg/|/.idea/|/.svn/|/.cache/|/.project/|/Thumbs.db$|/ehthumbs.db$|/Desktop.ini$|/$RECYCLE.BIN/test.json";
const path = "/src/config.json";

// engine

// add person to a list
add_rank_btn.addEventListener("click", (e) => {
  let value = input.value;
  let value_r = input_rank.value;
  peep.add_people(value, value_r);
  dyarry.addElement(value, value_r);

  // json data
  var jsonData =
    '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';

  // parse json
  var jsonObj = JSON.parse(jsonData);
  console.log(jsonObj);

  // stringify JSON Object
  var jsonContent = JSON.stringify(jsonObj);
  console.log(jsonContent);

  fs.writeFile(brave_workspace, jsonContent, "utf8", function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log("JSON file has been saved.");
  });
}); //end

// check person list
get_person_list_btn.addEventListener("click", (e) => {
  peep.printList();
});

// Print array list, for testing.
get_arry_person_list_btn.addEventListener("click", (e) => {
  dyarry.print_all();
});

// add person to teamA
teamA_btn.addEventListener("click", (e) => {
  let value = input_teamA.value;
  teamA.add_teamMember(value);
});
// check teamA lits
teamA_print_btn.addEventListener("click", (e) => {
  console.log("-------------Team A-----------------------");
  teamA.printList();
  console.log("------------------------------------");
  console.log();
});
// remove team member from teamA
remove_from_teamA_btn.addEventListener("click", (e) => {
  let value = input_teamA.value;
  teamA.removeTeamMember(value);
});

// add person to teamB
teamB_btn.addEventListener("click", (e) => {
  let value = input_teamB.value;
  teamB.add_teamMember(value);
});
// check teamB lits
teamB_print_btn.addEventListener("click", (e) => {
  console.log("-------------Team B-----------------------");
  teamB.printList();
  console.log("------------------------------------");
  console.log();
});
// remove team member from teamB
remove_from_teamB_btn.addEventListener("click", (e) => {
  let value = input_teamB.value;
  teamB.removeTeamMember(value);
});

// add person to teamC
teamC_btn.addEventListener("click", (e) => {
  let value = input_teamC.value;
  teamC.add_teamMember(value);
});
// check teamC lits
teamC_print_btn.addEventListener("click", (e) => {
  console.log("-------------Team C-----------------------");
  teamC.printList();
  console.log("------------------------------------");
  console.log();
});
// remove team member from teamC
remove_from_teamC_btn.addEventListener("click", (e) => {
  let value = input_teamC.value;
  teamC.removeTeamMember(value);
});

// Fetch grabs from data files and
// reads in texts and makes objects of peoples.
// It also creates teams.
// will be implemented diffrently.

// fetch("/src/data/people.json")
//   .then((response) => response.text())
//   .then((data) => {
//     peep.add_people(data, 1);
//     // peep.printList();
//   });

// fetch("./src/data/teamA/team.txt")
//   .then((response) => response.text())
//   .then((data) => {
//     teamA.add_teamMember(data);
//     // console.log("-------------Team A-----------------------");
//     // teamA.printList();
//     // console.log("------------------------------------");
//     // console.log();
//   });

// fetch("./src/data/teamB/team.txt")
//   .then((response) => response.text())
//   .then((data) => {
//     teamB.add_teamMember(data);
//     // console.log("-------------Team B-----------------------");
//     // teamB.printList();
//     // console.log("------------------------------------");
//     // console.log();
//   });

// fetch("/src/data/teamC/team.json")
//   .then((response) => response.text())
//   .then((data) => {
//     teamC.add_teamMember(data);
//     opps.write(data);
//     // console.log("-------------Team C-----------------------");
//     // teamC.printList();
//     // console.log("------------------------------------");
//     // console.log();
//   });

//opps.append();
