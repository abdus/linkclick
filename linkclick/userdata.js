"use strict"

let siteName1, siteName2, siteName3, siteName4, siteName5, siteName6, siteName7, siteName8, siteName9;
let siteAddress1, siteAddress2, siteAddress3, siteAddress4, siteAddress5, siteAddress6, siteAddress7, siteAddress8, siteAddress9;


/*   Invoke Function  */
updateFields();



function updateFields(){
    chrome.storage.sync.get('siteName1', function(data){
        document.getElementById('link1-name').value = data.siteName1;
    });
    chrome.storage.sync.get('siteAddress1', function(data){
        document.getElementById('link1-url').value = data.siteAddress1;
    });
    chrome.storage.sync.get('siteName2', function(data){
        document.getElementById('link2-name').value = data.siteName2;
    });
    chrome.storage.sync.get('siteAddress2', function(data){
        document.getElementById('link2-url').value = data.siteAddress2;
    });
    chrome.storage.sync.get('siteName3', function(data){
        document.getElementById('link3-name').value = data.siteName3;
    });
    chrome.storage.sync.get('siteAddress3', function(data){
        document.getElementById('link3-url').value = data.siteAddress3;
    });
    chrome.storage.sync.get('siteName4', function(data){
        document.getElementById('link4-name').value = data.siteName4;
    });
    chrome.storage.sync.get('siteAddress4', function(data){
        document.getElementById('link4-url').value = data.siteAddress4;
    });
    chrome.storage.sync.get('siteName5', function(data){
        document.getElementById('link5-name').value = data.siteName5;
    });
    chrome.storage.sync.get('siteAddress5', function(data){
        document.getElementById('link5-url').value = data.siteAddress5;
    });
    chrome.storage.sync.get('siteName6', function(data){
        document.getElementById('link6-name').value = data.siteName6;
    });
    chrome.storage.sync.get('siteAddress6', function(data){
        document.getElementById('link6-url').value = data.siteAddress6;
    });
    chrome.storage.sync.get('siteName7', function(data){
        document.getElementById('link7-name').value = data.siteName7;
    });
    chrome.storage.sync.get('siteAddress7', function(data){
        document.getElementById('link7-url').value = data.siteAddress7;
    });
    chrome.storage.sync.get('siteName8', function(data){
        document.getElementById('link8-name').value = data.siteName8;
    });
    chrome.storage.sync.get('siteAddress8', function(data){
        document.getElementById('link8-url').value = data.siteAddress8;
    });
    chrome.storage.sync.get('siteName9', function(data){
        document.getElementById('link9-name').value = data.siteName9;
    });
    chrome.storage.sync.get('siteAddress9', function(data){
        document.getElementById('link9-url').value = data.siteAddress9;
    });
}



let name1, name2, name3, name4, name5, name6, name7, name8, name9;
let url1, url2, url3, url4, url5, url6, url7, url8, url9;


/*   DOM EVENT LISTENERS   */
document.getElementById('submit-form').addEventListener("click", saveUserData);



function saveUserData(){
    name1 = document.getElementById('link1-name').value;
    chrome.storage.sync.set({'siteName1': name1});
    url1 = document.getElementById('link1-url').value;
    chrome.storage.sync.set({'siteAddress1': url1});
    name2 = document.getElementById('link2-name').value;
    chrome.storage.sync.set({'siteName2': name2});
    url2 = document.getElementById('link2-url').value;
    chrome.storage.sync.set({'siteAddress2': url2});
    name3 = document.getElementById('link3-name').value;
    chrome.storage.sync.set({'siteName3': name3});
    url3 = document.getElementById('link3-url').value;
    chrome.storage.sync.set({'siteAddress3': url3});
    name4 = document.getElementById('link4-name').value;
    chrome.storage.sync.set({'siteName4': name4});
    url4 = document.getElementById('link4-url').value;
    chrome.storage.sync.set({'siteAddress4': url4});
    name5 = document.getElementById('link5-name').value;
    chrome.storage.sync.set({'siteName5': name5});
    url5 = document.getElementById('link5-url').value;
    chrome.storage.sync.set({'siteAddress5': url5});
    name6 = document.getElementById('link6-name').value;
    chrome.storage.sync.set({'siteName6': name6});
    url6 = document.getElementById('link6-url').value;
    chrome.storage.sync.set({'siteAddress6': url6});
    name7 = document.getElementById('link7-name').value;
    chrome.storage.sync.set({'siteName7': name7});
    url7 = document.getElementById('link7-url').value;
    chrome.storage.sync.set({'siteAddress7': url7});
    name8 = document.getElementById('link8-name').value;
    chrome.storage.sync.set({'siteName8': name8});
    url8 = document.getElementById('link8-url').value;
    chrome.storage.sync.set({'siteAddress8': url8});
    name9 = document.getElementById('link9-name').value;
    chrome.storage.sync.set({'siteName9': name9});
    url9 = document.getElementById('link9-url').value;
    chrome.storage.sync.set({'siteAddress9': url9});
}