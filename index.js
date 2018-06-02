var katzDeliLine = []
function takeANumber(katzDeliLine,name) {
for(var line = 1;line > 0 ; line++) {
 katzDeliLine.push(name);
 var pos = (katzDeliLine.length-1) - line;
return "Welcome, " +name + ". You are number " +pos + " in line."
}
}

function nowServing(katzDeliLine) {
   if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var str = katzDeliLine.slice(0,1);
  return "Currently serving " + str + "."
 
}

function currentLine(katzDeliLine) {
  var current = [];
 if(katzDeliLine.length === 0 ) {
   return "The line is currently empty.";
 }
 
 else {
 for (var i=0; i< katzDeliLine.length ; i++) {
   
   
      current.push(i+1 + ". " +katzDeliLine[i]);
 }
    return "The line is currently: " +current.join(", ");

}
}