window.onload = function() {
    var elements = document.querySelectorAll("input[type='taginput']");
    //elements[0].addEventListener("keypress", eventHandler);
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.addEventListener("keyup", createTag);
        insertRemoveAll(element);
    }

    /* Event Handler */
    function createTag(ev) {
        let tags = this.parentNode.querySelectorAll(".tag");
        if (this.value !== ""){
            let removeAllButton = this.parentNode.querySelector(".removeAll");
            removeAllButton.style.visibility = "visible";
        }
        if (ev.which == 186 && tags.length !== 5) {
            if (this.value.trim() !== ";") {
                let span = document.createElement("span");
                span.classList.add("tag");
                span.innerHTML = this.value.slice(0, -1);
                this.value = '';
                this.parentNode.insertBefore(span, this);
                insertCloseButton(span);
                let elementsWidth = 0;
                let spanElements = this.parentNode.querySelectorAll(".tag");
                let originWidth = this.offsetWidth;
                for(let i = 0; i < spanElements.length; i++){
                    elementsWidth = spanElements[i].offsetWidth;
                }
                this.style.width = (originWidth - elementsWidth) + "px";
            }
        }
        
    }

    function insertCloseButton(element) {
        let closeSpan = document.createElement("span");
        closeSpan.classList.add("closeTag");
        closeSpan.innerHTML = " x";
        closeSpan.addEventListener("click", closeTag);
        element.insertBefore(closeSpan, null);
    }
    
    /* Event Handler */
    function closeTag(){
        this.parentNode.parentNode.removeChild(this.parentNode);
        //inputField.style.width = "";
    }
    
    function insertRemoveAll(element){
        let spanRemoveAll = document.createElement("span");
        spanRemoveAll.classList.add("removeAll");
        spanRemoveAll.innerHTML = " x";
        spanRemoveAll.addEventListener("click", removeAll);
        element.parentNode.appendChild(spanRemoveAll);
    }
    
    /* Event Handler */
    function removeAll(){
        let spans = this.parentNode.querySelectorAll(".tag");
        let inputField = this.parentNode.querySelector("input[type='taginput']");
        for(let i = 0; i < spans.length; i++){
            let closeTag = spans[i].querySelector(".closeTag");
            closeTag.click();
        }
        inputField.value = "";
        this.style.visibility = "hidden";
        inputField.style.width = "";
    }
};