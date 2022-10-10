/**/
var qr;
/**/

/**/
function random(length){
    /**/
    var result = "";
    /**/
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    /**/
    var n = characters.length;
    /**/
    for ( var i = 0; i < length; i++){
        /**/
        result += characters.charAt(Math.floor(Math.random() * n));
        /**/
    }
    /**/
    return result;
    /**/
}

/**/
function update(){
    /**/
    var text = $("#randomize").is(":checked") ? random($("#length").val()) : $("#text").val();
    /**/
    var elapsed = 0;
    /**/
    var t0 = new Date();
    /**/
    qr = new QR("target", text, $("#foreground").val(), $("#background").val(), $("#correction").val());
    /**/
    var t1 = new Date();
    /**/
    elapsed += t1 - t0;
    /**/
    $("#text").val(qr.text);
    /**/
    $("#length").val(qr.text.length);
    /**/
    console.log("Version: " + qr.version);
    console.log("Elapsed: " + elapsed + "ms");
    /**/
}

/**/
function download(){
    /**/
    qr.download("filename");
    /**/
}

/**/
update();
/**/

/**/
$("#foreground").on("input", function(){ update(); });
$("#background").on("input", function(){ update(); });
/**/

/**/
$("#randomize").on("change", (e) => {
    /**/
    $("#" + ["text", "length"][0]).prop("disabled", e.currentTarget.checked === true);
    $("#" + ["text", "length"][1]).prop("disabled", e.currentTarget.checked !== true);
    /**/
});