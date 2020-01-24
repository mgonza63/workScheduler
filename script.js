$(document).ready(function(){  
       
    var datePlacement = $("#date");
    var timePlacement = $("#time");
    var letter;
    const storageData =  [ 
        {
            id: "textfieldA",
            text: $("#inputTextA").val()
        },
        {
            id: "textfieldB",
            text: "userInputB"
        },
    ]
    
    
    // display date and time
    datePlacement.append(moment().format("dddd, MMMM Do YYYY"));
    timePlacement.append(moment().format("h:mm:ss a"));

    // timer type setup to update the date time
    var datetime = null,
        date = null;

    // display updated time
    var update = function () {
        date = moment(new Date())
        datetime.html(date.format('h:mm a'));
    };
    // update date
  
        datetime = $('#time')
        update();
        setInterval(update, 1000);
 
    
    $("[id^=lock]").on("click", function () {
        var id = this.id,
            letter = id.substr(id.length - 1);

        localStorage.setItem("input", $("#inputText" + letter).val());
 



    });
    localStorage.getItem("input");
    var a = localStorage.getItem("input");
    $(`#inputText${letter}`).text(a);

        
    var hours = new Date().getHours();
    console.log(hours);

    if (hours === 9) {
        $("todoA").css("background-color", "red");
        $("#inputTextA").css("background-color", "red");
    }
    if (hours > 9) {
        $("#todoA").css("background-color", "lightgray");
        $("#inputTextA").css("background-color", "lightgray");
    };
    if (hours === 10) {
        $("todoB").css("background-color", "red");
        $("#inputTextB").css("background-color", "red");
    }
    if (hours > 10) {
        $("#todoB").css("background-color", "lightgray");
        $("#inputTextB").css("background-color", "lightgray");
    };
    if (hours === 11) {
        $("todoC").css("background-color", "red");
        $("#inputTextC").css("background-color", "red");
    }
    if (hours > 11) {
        $("#todoC").css("background-color", "lightgray");
        $("#inputTextC").css("background-color", "lightgray");
    };
    if (hours === 12) {
        $("todoD").css("background-color", "red");
        $("#inputTextD").css("background-color", "red");
    }
    if (hours > 12) {
        $("#todoD").css("background-color", "lightgray");
        $("#inputTextD").css("background-color", "lightgray");
    };
    if (hours === 13) {
        $("todoE").css("background-color", "red");
        $("#inputTextE").css("background-color", "red");
    }
    if (hours > 13) {
        $("#todoE").css("background-color", "lightgray");
        $("#inputTextE").css("background-color", "lightgray");
    };
    if (hours === 14) {
        $("todoA").css("background-color", "red");
        $("#inputTextA").css("background-color", "red");
    }
    if (hours > 14) {
        $("#todoF").css("background-color", "lightgray");
        $("#inputTextF").css("background-color", "lightgray");
    };
    if (hours === 15) {
        $("todoG").css("background-color", "red");
        $("#inputTextG").css("background-color", "red");
    }
    if (hours > 15) {
        $("#todoG").css("background-color", "lightgray");
        $("#inputTextG").css("background-color", "lightgray");
    };
    if (hours === 16) {
        $("todoH").css("background-color", "red");
        $("#inputTextH").css("background-color", "red");
    }
    if (hours > 16) {
        $("#todoH").css("background-color", "lightgray");
        $("#inputTextH").css("background-color", "lightgray");
    };
    if (hours === 17) {
        $("todoI").css("background-color", "red");
        $("#inputTextI").css("background-color", "red");
    }
    if (hours > 17) {
        $("#todoI").css("background-color", "lightgray");
        $("#inputTextI").css("background-color", "lightgray");
    };

});
