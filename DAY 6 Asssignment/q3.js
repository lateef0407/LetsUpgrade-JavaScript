let name = prompt("Plaese Enter Your Name", "Anonymuos");

let h1_id = document.querySelector("#name");

h1_id.innerHTML = "Welcome " + name;

let h2_id = document.getElementById("dtime");



function checkTime(i) 
{
    if (i < 10) 
    {
      i = "0" + i;
    }
    return i;
}
  
function startTime() 
{
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('dtime').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
      startTime()
    }, 500);
}
startTime();

document.body.classList.toggle("dark_mode");
