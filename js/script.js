var interval = setInterval(timestamphome, 1000);
function timestamphome(){
    var date;
    date =  new Date();
    var time = document.getElementById('digitalClock');
    time.innerHTML = date.toLocaleTimeString();
}
var winfeature = 'location=no,toolbar=no,menubar=no,scrollbars=no, directories=0, status=1,resizable=no';
window.open('Time.html', 'null','_blank', winfeature);