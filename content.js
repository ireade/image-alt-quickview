document.addEventListener("mousedown", function (ev) {

    if (ev.button !== 2) return;
    if (ev.target.nodeName !== "IMG") return;

    browser.runtime.sendMessage(null, {
        alt: ev.target.alt
    });

}, true);