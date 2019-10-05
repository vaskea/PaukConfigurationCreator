const elements = {
    threadUrl: 'threadUrl',
    threadTitle: 'threadTitle',
    lastPostDate: 'lastPostDate',
    firstPostDate: 'firstPostDate',
    repliesCount: 'repliesCount'
}

let currentlySelectedElement = elements.threadUrl;

$(document).ready(function() {

    
    const threadUrl = document.getElementById('threadUrl');

    threadUrl.addEventListener('focus', () => {
        console.log('focused');
    });

});



chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log('received from content', message);
    console.log('received from content', sender);
   
    const currentElement = document.getElementById(currentlySelectedElement).value = message.data;
});