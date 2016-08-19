(function (undefined) {

    'use strict';
    var importHtml = window.document.querySelector('link[id="developer"]');
    var importContent = importHtml.import;
    var template = importContent.querySelector("#myTemplate");
    var clone = window.document.importNode(template.content, true);

    window.document.querySelector("#shell").appendChild(clone);
})();