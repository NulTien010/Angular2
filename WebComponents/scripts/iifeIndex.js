(function () {

    'use strict';
    var template = window.document.querySelector("#myTemplate");
    var clone = window.document.importNode(template.content, true);

    window.document.getElementById("shell").appendChild(clone);
})();