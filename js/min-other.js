var delivery=document.querySelector(".button-delivery"),deliverySub=document.querySelector(".sub-list"),guarantee=document.querySelector(".button-guarantee"),guaranteeSub=document.querySelector(".sub-menu-2"),credit=document.querySelector(".button-credit"),creditSub=document.querySelector(".sub-menu-3"),current=document.querySelector(".current-delivery"),currentLink=document.querySelector(".current-delivery-link"),btnOne=document.querySelector("#btn-1"),btnTwo=document.querySelector("#btn-2"),sliderFirst=document.querySelector(".slide-1"),sliderSecond=document.querySelector(".slide-2");delivery.addEventListener("click",function(e){e.preventDefault(),creditSub.classList.remove("service-show"),guaranteeSub.classList.remove("service-show"),deliverySub.classList.add("service-show")}),guarantee.addEventListener("click",function(e){e.preventDefault(),deliverySub.classList.remove("service-show"),creditSub.classList.remove("service-show"),current.classList.remove("current-delivery"),currentLink.classList.remove("current-delivery-link"),guaranteeSub.classList.add("service-show")}),credit.addEventListener("click",function(e){e.preventDefault(),deliverySub.classList.remove("service-show"),guaranteeSub.classList.remove("service-show"),current.classList.remove("current-delivery"),currentLink.classList.remove("current-delivery-link"),creditSub.classList.add("service-show")}),btnTwo.addEventListener("click",function(e){sliderSecond.classList.add("slider-name-show"),sliderFirst.classList.add("slider-name-off"),sliderFirst.classList.remove("slider-name-show")}),btnOne.addEventListener("click",function(e){sliderSecond.classList.add("slider-name-off"),sliderFirst.classList.add("slider-name-show"),sliderSecond.classList.remove("slider-name-show")});