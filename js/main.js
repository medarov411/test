
hideInfoBtn = document.querySelector(".for_click");
hidePadding = document.querySelector(".sidebar__menu");
textHide = document.getElementsByClassName("sidebar__text");
menuHide = document.querySelector(".sidebar__title");


hideInfoBtn.addEventListener("click", function() {
    hidePadding.classList.toggle("for__hide");
    for(let i = 0; i < textHide.length; i += 1) {
        textHide.item(i).classList.toggle("for__text");
    }
    
    menuHide.classList.toggle("for__text");
   
});

switchHide = document.querySelector(".switch-btn");
sidebarHide = document.querySelector(".sidebar");

switchHide.addEventListener("click", function() {
    sidebarHide.classList.toggle("sidebar__hidden");
    
});


clickModalFirst = document.querySelector(".mobile__holder_1");
firstModal = document.querySelector(".first__modal");
thirdModal = document.querySelector(".third__modal");
firstCloser = document.querySelector(".first__closer");
secondModal = document.querySelector(".second__modal");
activeDiv = document.querySelector(".mobile__item_1")
activeDiv2 = document.querySelector(".mobile__item_4")
activeDiv3 = document.querySelector(".mobile__item_5")

clickModalFirst.addEventListener("click", function(){
    activeDiv.classList.add("active");
    activeDiv2.classList.remove("active");
    activeDiv3.classList.remove("active");
    secondModal.classList.remove("visible");
    thirdModal.classList.remove("visible");
    firstModal.classList.add("visible");
    firstCloser.addEventListener("click", function (){
        firstModal.classList.remove("visible");
        secondModal.classList.remove("visible");
        thirdModal.classList.remove("visible");
        activeDiv2.classList.remove("active");
        activeDiv3.classList.remove("active");
        activeDiv.classList.remove("active");
    })
});


clickModalSecond = document.querySelector(".mobile__holder_5");
secondModal = document.querySelector(".second__modal");
thirdModal = document.querySelector(".third__modal");
firstModal = document.querySelector(".first__modal");
secondCloser = document.querySelector(".second__closer");
activeDiv = document.querySelector(".mobile__item_1")
activeDiv2 = document.querySelector(".mobile__item_4")
activeDiv3 = document.querySelector(".mobile__item_5")


clickModalSecond.addEventListener("click", function(){
    activeDiv3.classList.add("active");
    activeDiv2.classList.remove("active");
    activeDiv.classList.remove("active");
    firstModal.classList.remove("visible");
    thirdModal.classList.remove("visible");
    secondModal.classList.add("visible");
    secondCloser.addEventListener("click", function (){
        secondModal.classList.remove("visible");
        firstModal.classList.remove("visible");
        third.classList.remove("visible");
        activeDiv2.classList.remove("active");
        activeDiv3.classList.remove("active");
        activeDiv.classList.remove("active");
    })
});

clickModalThird = document.querySelector(".mobile__holder_4");
thirdModal = document.querySelector(".third__modal");
secondModal = document.querySelector(".second__modal");
firstModal = document.querySelector(".first__modal");
secondCloser = document.querySelector(".second__closer");
activeDiv = document.querySelector(".mobile__item_1")
activeDiv2 = document.querySelector(".mobile__item_4")
activeDiv3 = document.querySelector(".mobile__item_5")

clickModalThird.addEventListener("click", function(){
    activeDiv2.classList.toggle("active");
    activeDiv3.classList.remove("active");
    activeDiv.classList.remove("active")
    firstModal.classList.remove("visible");
    secondModal.classList.remove("visible");
    thirdModal.classList.toggle("visible");
    secondCloser.addEventListener("click", function (){
        thirdModal.classList.remove("visible");
        secondModal.classList.remove("visible");
        firstModal.classList.remove("visible");
        activeDiv2.classList.remove("active");
        activeDiv3.classList.remove("active");
        activeDiv.classList.remove("active");
    })
});