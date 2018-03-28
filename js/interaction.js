var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn= document.getElementById('reset');
var recordBtn = document.getElementById('record');
var list = document.getElementById('ulist');


var watch = new stopwatch(timer);


document.addEventListener('keypress', (e) => {
    if(e.keyCode === 115 && !watch.isOn){
      watch.start();
    } else {
      watch.stop();
    }

    if(e.keyCode === 114){
      watch.reset();
    }
    if(e.keyCode === 114){
      watch.reset();
    }


});

toggleBtn.addEventListener('click', () => {
  if(watch.isOn ){
    watch.stop();
 } else {
     watch.start();
 }
});

resetBtn.addEventListener('click', () =>{
    watch.reset();
})


recordBtn.addEventListener('click',() => {
  var x = document.createElement("LI");
  var t = document.createTextNode("");
  x.appendChild(t);
  list.appendChild(x);
  x.textContent = timer.textContent

})
