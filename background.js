var menuId = "image-alt-quickview";
var defaultTitle = "(Right click image again)"

browser.contextMenus.create({
    "type": "normal",
    "id": menuId,
    "title": defaultTitle,
    "contexts": ["image"]
});

browser.runtime.onMessage.addListener(function(message) {

    browser.contextMenus.update(menuId, {
        "title": message.alt ? "\"" + message.alt + "\"" : "(No alt specified)"
    });

    setTimeout(function() {
        browser.contextMenus.update(menuId, {
            "title": defaultTitle
        });
    }, 1000);

    // See https://github.com/mozilla/webextension-polyfill/issues/130#issue-333539552
    return Promise.resolve({});
});
