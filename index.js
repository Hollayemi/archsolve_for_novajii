var prevScrollpos = window.pageYOffset;
  window.onscroll= function(){
      var currentScrollPos = window.pageYOffset;
      if(currentScrollPos > 200){
          document.querySelector(".headerBtum").style.width="100%";
          document.querySelector(".headerBtum2").style.width="100%";
          
      }else{
        document.querySelector(".headerBtum").style.width="0%";
        document.querySelector(".headerBtum2").style.width="0%";
      }
      prevScrollpos=currentScrollPos;
  }

  document.querySelector('.marker').addEventListener('click', function(){
      if(document.querySelector('.location').style.visibility != "visible"){
        document.querySelector('.location').style.visibility = "visible"
        document.querySelector('.location').style.marginTop = "0px"
        document.querySelector('.location').style.opacity = "1"
      }else{
        document.querySelector('.location').style.visibility = "hidden"
        document.querySelector('.location').style.marginTop = "-8px"
        document.querySelector('.location').style.opacity = "0"
      }

  })