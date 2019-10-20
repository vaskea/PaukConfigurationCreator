const elements = {
    threadUrl: 'threadUrl',
    threadTitle: 'threadTitle',
    lastPostDate: 'lastPostDate',
    firstPostDate: 'firstPostDate',
    repliesCount: 'repliesCount',
    threadListNP: 'threadListNP',
    author: 'author',
    authorUrl: 'authorUrl',
    avatarUrl: 'avatarUrl',
    postdate: 'postdate',
    postTitle: 'postTitle',
    postbody: 'postbody',
    html: 'html',
	signature: 'signature',
    postListNp: 'postListNp'
};

const lockedStatus = {
    threadUrl: false,
    threadTitle: false,
    lastPostDate: false,
    firstPostDate: false,
    repliesCount: false,
    threadListNP: false,
    author: false,
    authorUrl: false,
    avatarUrl: false,
    postdate: false,
    postTitle: false,
    postbody: false,
    html: false,
	signature: false,
    postListNp: false
}

let currentlySelectedElement = elements.threadUrl;

$(document).ready(function() {

    Object.keys(elements).forEach(el => {

        const htmlElement = document.getElementById(el);

        htmlElement.addEventListener('focus', () => {
            currentlySelectedElement = el;
        });

        const elementButton = document.getElementById(el + 'Button');

        if(elementButton) {
            elementButton.addEventListener('click', () => toggleLockButton(el, elementButton));
        }
        
    })


});

function toggleLockButton(element, elementButton) {

    lockedStatus[element] = !lockedStatus[element];
    elementButton.className === "btn btn-success lock-button" ? elementButton.className = "btn btn-danger lock-button" : elementButton.className = "btn btn-success lock-button";
    elementButton.innerText === 'Lock' ? elementButton.innerText = 'Unlock' : elementButton.innerText = 'Lock';

}


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

    if(!lockedStatus[currentlySelectedElement]) {
        document.getElementById(currentlySelectedElement).value = message.data;
    }

});