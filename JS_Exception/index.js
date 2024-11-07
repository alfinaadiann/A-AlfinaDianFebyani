//Callback
  function myFirst() {
     myDisplayer("Good bye");
    }

    function mySecond(callback) { 
        myDisplayer("Hello"); callback();
    
    }

    function myDisplayer(message) { 
        console.log(message);
     }

    mySecond(myFirst);

// setTimeout
    console.log("Paragraf 1");
    setTimeout(() => {
      console.log("Paragraf 2");
    }, 4000);
    console.log("Paragraf 3");
    console.log("Paragraf 4");
    console.log("Paragraf 5");
    console.log("Paragraf 6");
    console.log("Paragraf 7");

//kedua setTimeout    
    console.log("I print first");
    setTimeout(() => {
      console.log("I print after 3 seconds");
    }, 3000);
    console.log("I print second!");

//setInterval
    function setTime() {
        const header = document.getElementById("header");
        header.textContent = new Date().toString();
      }
      setInterval(setTime, 1000);
      console.log("Program Finish");

 //studycase - Error Handling   
 