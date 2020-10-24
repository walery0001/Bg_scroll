/*menu1 2 3*/
const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');
const menu3 = document.getElementById('menu3');
const allMenu = document.querySelector(".allMenu");
/*navbar*/
const navBtnAll = document.querySelector(".navBtn");
const navBtn = document.querySelectorAll(".navBtn");

const btn1 = document.getElementById('menu1a');
const btn2 = document.getElementById('menu1b');
// top btn
const topBtn = document.querySelector('.hideBtn');
//elements height
const heightMenu = menu2.getBoundingClientRect().height;
const heightnavBtn = navBtnAll.getBoundingClientRect().height;
const NavbarPlusMenu = heightMenu + heightnavBtn;
const NavbarPlusMenu3 = heightMenu + heightMenu + heightnavBtn;




//scroll change background
window.addEventListener('scroll', function(){
	//height from the top
const allY = window.pageYOffset;
const heightAllMenu = allMenu.getBoundingClientRect().top;
	if(heightAllMenu < -51){
	menu1.animate({backgroundColor:'rgba(211, 54, 54, 1)'},{duration:2000,fill:'forwards'});
}else{	menu1.animate({backgroundColor:'rgba(82, 90, 255, 1)'},{duration:2000,fill:'forwards'});}

if(heightAllMenu < -1030){
	menu2.animate({backgroundColor:'rgba(211, 182, 54, 1)'},{duration:2000,fill:'forwards'});

}else{	menu2.animate({backgroundColor:'rgba(211, 54, 54, 1)'},{duration:2000,fill:'forwards'});}

//btn On
if(allY > 75){
	topBtn.classList.add('topBtn')	
}else{
	topBtn.classList.remove('topBtn')
}
//end btn top

});


//menus click 
navBtn.forEach(function(btn){
	btn.addEventListener('click', function(e){

let firstMnu = e.target.id
const element = document.getElementById(firstMnu);
//if(element === menu1a){window.scrollTo({left:0, top:top,behavior:"smooth"});};
	if(element === menu1b){window.scrollTo({left:0, top:NavbarPlusMenu ,behavior:"smooth"});};
		if(element === menu1c){window.scrollTo({left:0, top:NavbarPlusMenu3 ,behavior:"smooth"})};
	
	})
});

topBtn.addEventListener('click', function(){
	window.scrollTo({left:0,top:0, behavior:'smooth'});
})

// video play
const video = document.querySelector('.video');
const videoContainer = document.querySelector('.videoContainer');
video.addEventListener('timeupdate', function(){
	if(video.currentTime >= 10){
		videoContainer.remove();
	}
})
