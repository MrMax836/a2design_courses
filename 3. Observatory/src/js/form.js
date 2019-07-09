// import jsCalendar from '/jsCalendar.js';

function getCurDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    return today = mm + '/' + dd + '/' + yyyy;
};

// jsCalendar--------------------------------------------

var totalCost;

function checkChild(fields) {
    var elem = document.getElementsByClassName("warning")[0];
    if (fields[fields.length - 1].value > 0 && totalCost == 0) {
        elem.style.display = "block";
        setTimeout(function() {
            elem.style.display = "none";
        }, 3000);
    };
};

function calculateCost(ticketsField) {
    var fields = ticketsField.getElementsByClassName("field");
    var subtotalBlock = document.getElementsByClassName("form__subtotal")[0];
    var tmp = 0;
    for (var i = 0; i < fields.length; i++) {
        
        if (fields[i].value != 0) {
            tmp += Number(fields[i].parentNode.parentNode.getElementsByClassName("cost")[0].textContent) *
            fields[i].value;
        }
    };
    totalCost = tmp;
    if (totalCost == 0) {
        subtotalBlock.style.display = "none";
        checkChild(fields);
        return;
    }
    
    var subtotalCost = subtotalBlock.getElementsByClassName("form__subtotal__cost")[0];
    subtotalCost.textContent = totalCost;
    subtotalBlock.style.display = "block";
};

function initForm() {
    totalCost = 0;
    // Изменить размеры календаря = ширине input
    // TODO
    
    // dropdown selector выбора ТУРА
    var selector = document.getElementsByClassName("form__label__input select")[0];
    var selectorDrop = document.getElementsByClassName("dropdown selector")[0];
    
    selector.addEventListener("click", function() {
        if (selectorDrop.style.display == 'block') {
            selectorDrop.style.display = 'none';
            return;
        }
        selectorDrop.style.display = 'block';
    });

    var selectorItems = document.getElementsByClassName("selector-item");
    for (var i = 0; i < selectorItems.length; i++) {
        selectorItems[i].addEventListener("click", function() {
            selector.placeholder = this.getElementsByClassName("content")[0].textContent; /* Need to change code   */
            
            // ниже костыль
            var detailsBlock = document.getElementsByClassName("details_block")[0]; 
            detailsBlock.style.display = "block";
            
            detailsBlock.getElementsByClassName("details_block__content")[0].textContent = this.getElementsByClassName("details")[0].textContent;
        });
    };

    // dropdown ticket
    var ticket = document.getElementsByClassName("form__label__input ticket")[0];
    var counterDrop = document.getElementsByClassName("dropdown counter")[0];
    
    ticket.addEventListener("click", function() {
        if (counterDrop.style.display == 'block') {
            counterDrop.style.display = 'none';
            return;
        }
        counterDrop.style.display = 'block';
    });

    var counterItems = document.getElementsByClassName("counter-item");

    for (var i = 0; i < counterItems.length; i++) {
        var buttonMinus = counterItems[i].getElementsByClassName("minus")[0];
        buttonMinus.addEventListener("click", function() {
            var field = this.parentNode.getElementsByClassName("field")[0];
            if (field.value >=1) {
                field.value--;
                calculateCost(counterDrop);
                return;
            }
            field.value = 0;
            calculateCost(counterDrop);
        });
        var buttonPlus = counterItems[i].getElementsByClassName("plus")[0];
        buttonPlus.addEventListener("click", function() {
            var field = this.parentNode.getElementsByClassName("field")[0];
            if (field.value < 9) {
                field.value++;
                calculateCost(counterDrop);
                return;
            }
            // drop maxValue
            field.value = 9;
            calculateCost(counterDrop);
        });
    };
};

window.onload = document.addEventListener('DOMContentLoaded', initForm());

