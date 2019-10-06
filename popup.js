const elements = {
    threadUrl: 'threadUrl',
    threadTitle: 'threadTitle',
    lastPostDate: 'lastPostDate',
    firstPostDate: 'firstPostDate',
    repliesCount: 'repliesCount',
    threadListNP: 'threadListNP'
}

let currentlySelectedElement = elements.threadUrl;

$(document).ready(function() {

    Object.keys(elements).forEach(el => {

        const htmlElement = document.getElementById(el);

        htmlElement.addEventListener('focus', () => {
            currentlySelectedElement = el;
        });
    })


});


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

    document.getElementById(currentlySelectedElement).value = message.data;

});