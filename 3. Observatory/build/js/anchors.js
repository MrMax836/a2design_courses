// Get width of element, without padding
// return number
function getWidth(elem) {
    try {
        el = window.getComputedStyle(elem, null)
            .getPropertyValue('width');
    } catch(e) {
        el = elem.currentStyle.width;
    }
    return el;
};

// get position of element relative to a parent container
function getCoordinates(elem) {
    var childPosLeft = parseInt(elem.offsetLeft, 10);
    var childPosRight = parseInt(getWidth(elem), 10) + childPosLeft;
    return { left: childPosLeft, 
            right: childPosRight };

};

// Count index of child
function getChildIndex(child) {
    var i = 0;
    while( (child = child.previousSibling) != null ) {
        i++;
    }
    return i;
}

//глобальная переменная - текущий якорь
var currentAnchor = document.getElementsByClassName('anchors-item')[0];
window.onload =  document.addEventListener('DOMContentLoaded', initAnchorBorder());

function initAnchorBorder() {
    var anchorBorder = document.getElementsByClassName('anchors-border_item')[0];
    // Получаю координаты теукущего якоря
    var currentAnchorCoordinates = getCoordinates(currentAnchor);
    
    anchorBorder.style.width = 
        (currentAnchorCoordinates.right - currentAnchorCoordinates.left + "px");
}

function transformBorder(focusedAnchor) {
    // Получаю индекс якоря, на который нажали
    var newIndex = getChildIndex(focusedAnchor);

    var curIndex = getChildIndex(currentAnchor);
    // Получаю координаты якоря, на который нажали
    var anchorCoordinates = getCoordinates(focusedAnchor);
    // Получаю координаты теукущего якоря
    var currentAnchorCoordinates = getCoordinates(currentAnchor);

    // Присваиваю значения глобальной переменной
    var newLeft = anchorCoordinates.left;
    var oldRight = currentAnchorCoordinates.right;
    var newRight = anchorCoordinates.right;

    currentAnchor = focusedAnchor;
    var elem = document.getElementsByClassName('anchors-border_item')[0];

    if (newIndex > curIndex) {
        elem.style.width = 
             newRight + "px";

        setTimeout(function() {
            elem.style.transform = 
                "translate("+ newLeft + "px" + ", 0)";
            var newWidth =  newRight -
                 newLeft;
            elem.style.width = newWidth + "px";
        }, 150);
    }
    if (newIndex < curIndex) {
        var newWidth =  oldRight -
             newLeft;
        elem.style.width = newWidth + "px";
        elem.style.transform = 
                "translate(" +  newLeft + "px"+", 0)";
        setTimeout(function() {
            var newWidth =  newRight -
                 newLeft;
            elem.style.width = newWidth + "px";
        }, 150);
    }
};


// For footer anchor
var jsUse = document.getElementsByClassName("js-use");

var anchorFooter

for (var i = 0; i < jsUse.length; i++) {
    var tmp = jsUse[i];
    if (tmp.classList.contains("anchor_footer")) {
        anchorFooter = tmp;
    }
};

var myScrollFunc = function() {
    var y = window.scrollY;
    if (y >= 700) {
        anchorFooter.classList.add("show");
        return;
    }
    anchorFooter.classList.remove("show");
};

var goUp = function() {
    window.scrollTo(0, 0);
};

window.onload =  document.addEventListener("scroll", myScrollFunc),
                anchorFooter.addEventListener("click",  goUp);
                document.addEventListener('DOMContentLoaded', function() {
                    var height = document.getElementsByClassName("anchor_footer")[0].offsetHeight;
                    document.getElementsByClassName("wrapper")[0].style.paddingBottom = height +"px";
                });


