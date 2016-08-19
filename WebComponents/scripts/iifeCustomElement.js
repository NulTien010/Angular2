(function(undefined) {

    'use strict';

    console.log("Custom Element script started ...");

    // Get custom element template
    var thisDoc = window.document.currentScript.ownerDocument;
    var template = thisDoc.querySelector("#customCardTemplate");

    var customCardPrototype = Object.create(HTMLElement.prototype);

    // bind callbacks
    customCardPrototype.attachedCallback = function() {
        console.log("Custom Element started attachedCallback ...");
    }

    customCardPrototype.createdCallback = function() {
        console.log("Custom Element started createdCallback ...");

        var root = this.createShadowRoot();
        root.appendChild(window.document.importNode(template.content, true));

        // data Binding
        var detailsContainer = root.getElementById("detailsContainer");
        var spans = detailsContainer.querySelectorAll("span");

        spans[0].querySelector("strong").innerText = this.getAttribute("data-name");
        spans[1].querySelector("strong").innerText = this.getAttribute("data-address");
        spans[2].querySelector("strong").innerText = this.getAttribute("data-phone");
        spans[3].querySelector("strong").innerText = this.getAttribute("data-company");
        spans[4].querySelector("img").setAttribute("src", this.getAttribute("data-img-src"));
        spans[4].querySelector("img").setAttribute("alt", this.getAttribute("data-name"));

        console.log("Custom Element completed createdCallback");
    }

    // register component to DOM
    var customCard = window.document.registerElement("contact-card",
    {
        prototype: customCardPrototype
    });

    console.log("Custom Element script completed.");
})();