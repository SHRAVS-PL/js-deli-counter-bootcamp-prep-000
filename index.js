var katzDeliLine = []
function takeANumber(katzDeliLine,name) {
for(var line = 1;line > 0 ; line++) {
 katzDeliLine.push(name);
return "Welcome, " +name + ". You are number " + line + " in line"
}
}

function nowServing(katzDeliLine) {
  
  var str = katzDeliLine.slice(1);
  return "Currently serving " + str + "."
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
}