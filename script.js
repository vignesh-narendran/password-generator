$(document).ready(function () {
    var capArr = [];
    var symArr = [];
    var numArr = [];
    var finArr = [];
    var passCount = 0;
    var randomNum = 0;
    var thePassword = "";
    asciiToChar = function (min, max, arrName) {
        for (var i = min; i <= max; i++) {
            arrName.push(String.fromCharCode(i));
        }
    };
    asciiToChar(97, 122, finArr);
    asciiToChar(65, 90, capArr);
    asciiToChar(58, 64, symArr);
    asciiToChar(48, 57, numArr);
    $(".copyToClip").click(function () {
        var copyText = document.getElementById("output");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
    });
    $(".genBtn").click(function () {
        finArr = [];
        thePassword = "";
        asciiToChar(97, 122, finArr);
        passCount = $(".passCountBox").val();
        if ($(".caseSenseBox").is(":checked")) {
            finArr = finArr.concat(capArr);
        }
        if ($(".symbolBox").is(":checked")) {
            finArr = finArr.concat(symArr);
        }
        if ($(".numberBox").is(":checked")) {
            finArr = finArr.concat(numArr);
        }
        for (var k = 0; k < passCount; k++) {
            randomNum = Math.floor(Math.random() * Math.floor(finArr.length));
            thePassword = thePassword.concat(finArr[randomNum]);
        }
        $(".output").val(thePassword);
    });
});

//ascii
//symbols 58 - 64
//numbers 48 - 57
//caps 65 - 90
//small 97 - 122