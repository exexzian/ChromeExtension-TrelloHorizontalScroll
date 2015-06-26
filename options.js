var currentScrollValue;
document.getElementById("scrollerInput").onmousemove = function() {
    currentScrollValue = this.value;
    document.getElementById('scrollerValue').innerHTML = currentScrollValue;


};

document.getElementById("scrollerInput").onmouseleave = function() {
    chrome.storage.sync.set({
        "currentScrollValue": currentScrollValue
    }, function() {
        if (chrome.runtime.error) {
            console.log("Runtime error.");
        }
    });

}
