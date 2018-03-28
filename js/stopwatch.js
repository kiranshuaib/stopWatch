console.log("hi");
  function stopwatch(elem){
       var time = 0;//time in milliseconds
       var interval;
       var offset;

       function update(){
         time+= delta();
         var formattedtime = timeFormatter(time);
         elem.textContent = formattedtime;
         // console.log(formattedtime);
       };


       function delta(){
         var now = Date.now();
          var timePassed = now - offset;
          offset = now;
          return timePassed;
       };
       function timeFormatter(timeInMilliseconds){
         var time = new Date(timeInMilliseconds);
         var minutes = time.getMinutes().toString();
         var seconds = time.getSeconds().toString();
         var milliseconds = time.getMilliseconds().toString();

         if(minutes.length < 2)
         minutes = '0'+ minutes;

         if(seconds.length < 2)
         minutes = '0'+ seconds;

         while(milliseconds.length < 3)
         milliseconds = '0'+ milliseconds;

         return `${minutes} : ${seconds} . ${milliseconds} `
       };


       this.isOn = false; // to check if the stopwatch is currently running

       this.start = function(){
         if(!this.isOn){
           interval = setInterval(update,10);
           offset = Date.now();
           this.isOn = true;
         }
       };

       this.stop = function(){
         if (this.isOn){
           clearInterval(interval);
           interval = null;
           this.isOn = false;
         }
       };
       this.reset = function(){
         time = 0;
         location.reload();
       };

       this.record = function(){
         while (this.isOn = true){
         var x = document.createElement("LI");
         var t = document.createTextNode("");
         x.appendChild(t);
         list.appendChild(x);
         x.textContent = timer.textContent
       }
       };


}
