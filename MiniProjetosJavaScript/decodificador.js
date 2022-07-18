var separator = " ";
var definitions = [
    { def : "a", temp : "a" },
    { def : "b", temp : "b" },
    { def : "c", temp : "c" },
    { def : "d", temp : "d" },
    { def : "e", temp : "e" },
    { def : "f", temp : "f" },
    { def : "g", temp : "g" },
    { def : "h", temp : "h" },
    { def : "i", temp : "i" },
    { def : "j", temp : "j" },
    { def : "k", temp : "k" },
    { def : "l", temp : "l" },
    { def : "m", temp : "m" },
    { def : "n", temp : "n" },
    { def : "o", temp : "o" },
    { def : "p", temp : "p" },
    { def : "q", temp : "q" },
    { def : "r", temp : "r" },
    { def : "s", temp : "s" },
    { def : "t", temp : "t" },
    { def : "u", temp : "u" },
    { def : "v", temp : "v" },
    { def : "w", temp : "w" },
    { def : "x", temp : "x" },
    { def : "y", temp : "y" },
    { def : "z", temp : "z" },
    { def : "0", temp : "0" },
    { def : "1", temp : "1" },
    { def : "2", temp : "2" },
    { def : "3", temp : "3" },
    { def : "4", temp : "4" },
    { def : "5", temp : "5" },
    { def : "6", temp : "6" },
    { def : "7", temp : "7" },
    { def : "8", temp : "8" },
    { def : "9", temp : "9" },
    { def : " ", temp : " " },
];
 
if(localStorage.getItem("encdecdef") === null){
    savedef();
}else{
    definitions = JSON.parse(localStorage.getItem("encdecdef"));
}
 
function savedef(){
    for(var i = 0; i < $(".defi").length; i++){
        definitions[i].temp = $(".defi:eq("+i+")").val();
    }
    loaddef();
    localStorage.setItem("encdecdef", JSON.stringify(definitions));
    $("#currentdef").html(JSON.stringify(definitions));
}
 
function loaddef(){
    for(var i = 0; i < $(".defi").length; i++){
        $(".defi:eq("+i+")").val(definitions[i].temp);
    }
}
 
loaddef();

function encrypt(){
    $("#result").html("");
    var txtinput = $("#txtinput").val().toLowerCase();
    for(var i = 0; i < txtinput.length; i++){
        for(var x = 0; x < definitions.length; x++){
            if(definitions[x].def == txtinput[i]){
                $("#result").append(definitions[x].temp + separator);
            }
        }
    }
}
function decrypt(){
    $("#result").html("");
    var txtinput = $("#txtinput").val().toLowerCase();
    txtinput = txtinput.split(separator);
    for(var i = 0; i < txtinput.length; i++){
        for(var x = 0; x < definitions.length; x++){
            if(definitions[x].temp == txtinput[i]){
                $("#result").append(definitions[x].def);
            }
        }
    }
}