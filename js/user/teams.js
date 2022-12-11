const newTeamDialog = document.querySelector(".container .dialog-bg");
const newTeamButton = document.getElementById("new-team");
const newTeamCreateButton = document.getElementById("create");
const cancelButton = document.getElementById("cancel");
var teamListLen = document.querySelectorAll(".container .cont-wrap .teams-list li").length;
const teamList = document.querySelector(".container .cont-wrap .teams-list");
const teamsMenuItems = document.querySelectorAll(".container .cont-wrap .teams-list .list-item");
var teamsLen = teamsMenuItems.length;



newTeamButton.addEventListener("click", (e) =>{
  newTeamDialog.querySelector("input#team-id").value = "";
  newTeamDialog.querySelector("input#team-name").value = "";
  newTeamDialog.querySelector("textarea").value = "";
  newTeamDialog.querySelector("input#team-id").style.border = "1px solid var(--blue-clr)";
  newTeamDialog.querySelector("input#team-name").style.border = "1px solid var(--blue-clr)";

  newTeamDialog.style.display = "flex";
});

newTeamCreateButton.addEventListener("click", (e) =>{
  var val1 = newTeamDialog.querySelector("input#team-id").value;
  var val2 = newTeamDialog.querySelector("input#team-name").value;
  newTeamDialog.querySelector("input#team-id").style.border = "1px solid var(--blue-clr)";
  newTeamDialog.querySelector("input#team-name").style.border = "1px solid var(--blue-clr)";
  if(val1.length !== 0 && val2.length !== 0){
    var thisID = `team${++teamsLen}`;
    teamList.insertAdjacentHTML("beforeend", `
      <li class="list-item" id="${thisID}">
        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>People Circle</title><path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm-3.68 152.11c.21-1.2.44-2.4.71-3.59a66.46 66.46 0 0116.29-31.21c12.89-13.73 31.16-21.31 51.45-21.31a74.05 74.05 0 0125.06 4.26 66.69 66.69 0 0126.27 17.2 68.15 68.15 0 0118 42.14 78.46 78.46 0 010 11.4 86.19 86.19 0 01-8.2 31q-.76 1.59-1.59 3.15c-1.11 2.07-2.3 4.1-3.58 6.06a79.47 79.47 0 01-8.63 11c-13.12 14-29.92 21.73-47.31 21.73a59.61 59.61 0 01-19.17-3.18 63.47 63.47 0 01-6.1-2.43 70.76 70.76 0 01-22.07-16.12 83.76 83.76 0 01-22-51.32q-.27-3.88-.18-7.68a75.62 75.62 0 011.05-11.08zm-149.73 24.34a59.87 59.87 0 015.2-20.64 56.76 56.76 0 012.78-5.3 54.49 54.49 0 017.19-9.56 55.62 55.62 0 0114-10.82 56.84 56.84 0 018.11-3.64 63.85 63.85 0 0133.35-2.39 57 57 0 0130.78 17 57.86 57.86 0 0115.41 38.62c.05 2.11 0 4.23-.15 6.38a71.58 71.58 0 01-6 23.84 69.49 69.49 0 01-5.73 10.42 65.39 65.39 0 01-15.76 16.57c-1.5 1.07-3.06 2.07-4.67 3.07a54.21 54.21 0 01-10 4.65 49.31 49.31 0 01-16.2 2.76c-.93 0-1.86 0-2.78-.08a47.6 47.6 0 01-5.48-.62 51.19 51.19 0 01-5.35-1.23 53.54 53.54 0 01-7.72-2.89c-.84-.39-1.66-.8-2.48-1.23-18-9.49-31.57-29.16-34.23-52.12-.12-1.05-.22-2.1-.29-3.16a66.59 66.59 0 01.02-9.63zm53.92 178.6a177.27 177.27 0 01-61.94-70.65 4 4 0 011.62-5.26C117.67 316.69 141.4 311 163.82 311c17 0 30.7 2 42.69 5.88a8 8 0 012.59 13.77c-23.35 19-38.4 42.54-45.47 70.75a2.77 2.77 0 01-4.22 1.65zM256 432a175.12 175.12 0 01-65.7-12.72 4 4 0 01-2.4-4.46c.4-2.05.84-3.92 1.23-5.48 7.12-28.43 24.76-52 51-68.18 23.29-14.35 53-22.25 83.52-22.25 31.16 0 60 7.58 83.48 21.91a2.72 2.72 0 01.91 3.67A176.1 176.1 0 01256 432z"/><path d="M161 295.28a47.6 47.6 0 01-5.48-.62 47.6 47.6 0 005.48.62zM134.64 178.13a55.62 55.62 0 00-14 10.82 54.49 54.49 0 00-7.19 9.56 54.49 54.49 0 017.19-9.56 55.62 55.62 0 0114-10.82zM216.17 257.89a71.58 71.58 0 006-23.84c.15-2.15.2-4.27.15-6.38q.08 3.15-.15 6.38a71.58 71.58 0 01-6 23.84zM134.64 178.13a56.84 56.84 0 018.11-3.64 56.84 56.84 0 00-8.11 3.64zM150.21 293.43a53.54 53.54 0 01-7.72-2.89 53.54 53.54 0 007.72 2.89zM105.78 237.19c2.66 23 16.26 42.63 34.23 52.12-18.01-9.49-31.57-29.16-34.23-52.12zM254.34 219a83.76 83.76 0 0022 51.32 70.76 70.76 0 0022.07 16.12 70.76 70.76 0 01-22.07-16.12 83.76 83.76 0 01-22-51.32q-.27-3.88-.18-7.68-.09 3.75.18 7.68zM304.5 288.82a63.47 63.47 0 01-6.1-2.43 63.47 63.47 0 006.1 2.43zM255.93 196.54a66.46 66.46 0 0116.29-31.21 66.46 66.46 0 00-16.29 31.21zM375 165.46a68.15 68.15 0 0118 42.14 68.15 68.15 0 00-18-42.14 66.69 66.69 0 00-26.27-17.2 66.69 66.69 0 0126.27 17.2zM393 219a86.19 86.19 0 01-8.2 31 86.19 86.19 0 008.2-31zM254.16 211.27a75.62 75.62 0 011.06-11.14 75.62 75.62 0 00-1.06 11.14zM383.19 253.16zM206.88 189.05a57.86 57.86 0 0115.41 38.62 57.86 57.86 0 00-15.41-38.62 57 57 0 00-30.78-17 57 57 0 0130.78 17zM190 288a54.21 54.21 0 01-10 4.65 54.21 54.21 0 0010-4.65zM105.49 224.45a59.87 59.87 0 015.2-20.64 59.87 59.87 0 00-5.2 20.64zM194.68 284.88C193.17 286 191.61 287 190 288c1.61-1 3.17-2 4.68-3.12zM216.17 257.89a69.49 69.49 0 01-5.73 10.42 69.49 69.49 0 005.73-10.42zM110.69 203.81a56.76 56.76 0 012.78-5.3 56.76 56.76 0 00-2.78 5.3zM194.68 284.88a65.39 65.39 0 0015.76-16.57 65.39 65.39 0 01-15.76 16.57z"/></svg>
        <h2>${newTeamDialog.querySelector("input[type=text]").value}</h2>
      </li>
    `);
    document.querySelector(`.container .cont-wrap .teams-list li#${thisID}`).addEventListener("click", (e) => {
      location.href=`../../pages/team/${thisID}.html`;
    });

    newTeamDialog.style.display = "none";
  } else if (val1.length === 0){
    if(val2.length === 0){
      newTeamDialog.querySelector("input#team-id").style.border = "2px solid red";
      newTeamDialog.querySelector("input#team-name").style.border = "2px solid red";
    } else {
      newTeamDialog.querySelector("input#team-id").style.border = "2px solid red";
    }    
  } else {
    newTeamDialog.querySelector("input#team-name").style.border = "2px solid red";
  }
});

cancelButton.addEventListener("click", (e) =>{
  newTeamDialog.style.display = "none";
});


teamsMenuItems.forEach((item) => {
  item.addEventListener("click", (e) =>{
    location.href=`../../pages/team/${item.id}.html`;
  });
});