/**
 * Created by jguido on 4/27/19.
 */

'use strict';

document.addEventListener('DOMContentLoaded', function(){
    //document.body.style.backgroundColor = '#87cefa';

    // Select a random mission
    let mission = Math.floor(Math.random() * heraldryTable.length);

    // Insert Name
    let missionName = document.getElementById("mission-name");
    //missionName.insertAdjacentHTML("afterbegin", randomMissionName());
    missionName.insertAdjacentHTML("afterbegin", heraldryTable[mission].name);

    // Insert Patch
    let missionPatch = document.getElementById("patch");
    let imgPath = "/patches/" + heraldryTable[mission]["patchFilename"];
    let imgURL = chrome.runtime.getURL(imgPath);
    missionPatch.src = imgURL;
    console.log(imgURL);

    // Insert Description
    let missionNumber = document.getElementById("mission-description");
    missionNumber.insertAdjacentText(
        "afterBegin", heraldryTable[mission].description
    );

    // Insert Date
    let missionDate = document.getElementById("mission-date");
    missionDate.insertAdjacentHTML(
        "afterBegin", heraldryTable[mission].date
    );

    // Insert Additional Content Link
    let moreInfoLink = document.getElementById("more-info-link");
    moreInfoLink.href = heraldryTable[mission].link;
    moreInfoLink.insertAdjacentHTML(
        "beforeend", heraldryTable[mission].name
    );

    // Insert Year
    let myFooter = document.getElementById("footer-text");
    let currentYear = new Date();
    myFooter.insertAdjacentHTML(
        "afterBegin", currentYear.getFullYear()
    )
});