var popupWindow = window.open(
	chrome.extension.getURL("selector_popup.html"),
	"selectorPopup",
	"width=455,height=700"
);
window.close();