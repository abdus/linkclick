let siteName1, siteName2, siteName3, siteName4, siteName5, siteName6, siteName7, siteName8, siteName9;
let siteAddress1, siteAddress2, siteAddress3, siteAddress4, siteAddress5, siteAddress6, siteAddress7, siteAddress8, siteAddress9;

function retriveData(){
    chrome.storage.sync.get('siteName1', function(data){
        document.getElementsByTagName('a')[0].innerHTML = data.siteName1;
    });
    chrome.storage.sync.get('siteAddress1', function(data){
        document.getElementsByTagName('a')[0].href = data.siteAddress1;
    });
    chrome.storage.sync.get('siteName2', function(data){
        document.getElementsByTagName('a')[1].innerHTML = data.siteName2;
    });
    chrome.storage.sync.get('siteAddress2', function(data){
        document.getElementsByTagName('a')[1].href = data.siteAddress2;
    });
    chrome.storage.sync.get('siteName3', function(data){
        document.getElementsByTagName('a')[2].innerHTML = data.siteName3;
    });
    chrome.storage.sync.get('siteAddress3', function(data){
        document.getElementsByTagName('a')[2].href = data.siteAddress3;
    });
    chrome.storage.sync.get('siteName4', function(data){
        document.getElementsByTagName('a')[3].innerHTML = data.siteName4;
    });
    chrome.storage.sync.get('siteAddress4', function(data){
        document.getElementsByTagName('a')[3].href = data.siteAddress4;
    });
    chrome.storage.sync.get('siteName5', function(data){
        document.getElementsByTagName('a')[4].innerHTML = data.siteName5;
    });
    chrome.storage.sync.get('siteAddress5', function(data){
        document.getElementsByTagName('a')[4].href = data.siteAddress5;
    });
    chrome.storage.sync.get('siteName6', function(data){
        document.getElementsByTagName('a')[5].innerHTML = data.siteName6;
    });
    chrome.storage.sync.get('siteAddress6', function(data){
        document.getElementsByTagName('a')[5].href = data.siteAddress6;
    });
    chrome.storage.sync.get('siteName7', function(data){
        document.getElementsByTagName('a')[6].innerHTML = data.siteName7;
    });
    chrome.storage.sync.get('siteAddress7', function(data){
        document.getElementsByTagName('a')[6].href = data.siteAddress7;
    });
    chrome.storage.sync.get('siteName8', function(data){
        document.getElementsByTagName('a')[7].innerHTML = data.siteName8;
    });
    chrome.storage.sync.get('siteAddress8', function(data){
        document.getElementsByTagName('a')[7].href = data.siteAddress8;
    });
    chrome.storage.sync.get('siteName9', function(data){
        document.getElementsByTagName('a')[8].innerHTML = data.siteName9;
    });
    chrome.storage.sync.get('siteAddress9', function(data){
        document.getElementsByTagName('a')[8].href = data.siteAddress9;
    });
}
retriveData();
