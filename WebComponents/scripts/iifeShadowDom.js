(function (undefined) {

    'use strict';
    var importContent = window.document.querySelector("link[id='shadowImporter']").import;
    var template = importContent.querySelector('#perDetails');
    var clone = window.document.importNode(template.content, true);

    var host = window.document.querySelector("#pageContainer");
    var root = host.createShadowRoot();
    root.appendChild(clone);

})();