// Open & Close Search START
function openSearch(){
  document.getElementById("searchBar").style.display = "block";
  document.getElementById("theMenuNav-subOne").style.display = "none";
}

function closeSearch(){
  document.getElementById("searchBar").style.display = "none";
  document.getElementById("theMenuNav-subOne").style.display = "block";
}

function openSearch2(){
  document.getElementById("searchBar2").style.display = "block";
  document.getElementById("menuScroll-subOne").style.display = "none";
}

function closeSearch2(){
  document.getElementById("searchBar2").style.display = "none";
  document.getElementById("menuScroll-subOne").style.display = "block";
}

function openSearch3(){
  document.getElementById("searchBar3").style.display = "block";
  document.getElementById("mobileMenuMain").style.display = "none";
}

function closeSearch3(){
  document.getElementById("searchBar3").style.display = "none";
  document.getElementById("mobileMenuMain").style.display = "block";
}

function openSearch4(){
  document.getElementById("searchBar4").style.display = "block";
  document.getElementById("menuOne-overlay").style.display = "none";
}

function closeSearch4(){
  document.getElementById("searchBar4").style.display = "none";
  document.getElementById("menuOne-overlay").style.display = "block";
}

function openSideMenuList(){
  document.getElementById("mobileMenuOne-overlay").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeSideMenuList(){
  document.getElementById("mobileMenuOne-overlay").style.display = "none";
  document.body.style.overflow = "initial";
}
// Open & Close Search END



// Menu Scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if ( document.documentElement.scrollTop <= 200) 
  {
    

    document.getElementById("menuScroll").style.backgroundColor = "transparent";
    document.getElementById("menuScroll").style.top = "-200px";

  }else if( prevScrollpos > currentScrollPos)
  {
    document.getElementById("menuScroll").style.top = "0px";
    document.getElementById("menuScroll").style.backgroundColor = "#fff";
    document.getElementById("menuScroll").style.boxShadow = "0 0 20px 0px rgb(0 0 0 / 20%)";
    // document.getElementsByClassName("menuScroll-aLink").style.color = "#000";

    var cols = document.getElementsByClassName('menuScroll-aLink');
        for(i = 0; i < cols.length; i++) {
          cols[i].style.color = '#000';
        }  
  }
  else 
  {
    document.getElementById("menuScroll").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}






