let fullStackList = document.getElementById('full-stack-list');
let fullStackDropImg = document.getElementById('drop-fullStack-img');
let fullStackInDrop = 1;
let navItems = document.getElementsByClassName('nav-item');
let skillsLogos = document.getElementsByClassName('skills-logo');
let contactLogos = document.getElementsByClassName('contact-logo');

let dropFullStack = function(){
    if(fullStackInDrop){
        fullStackDropImg.style.transform = 'rotate(180deg)';
        fullStackList.style.display='none';
        fullStackInDrop = 0;
        console.log('sube');
    }
    else{
        fullStackDropImg.style.transform = 'rotate(0deg)';
        fullStackList.style.display='flex';
        fullStackInDrop = 1;
        console.log('baja');
    }
}
let remake = function(event){
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'black';
    event.target.style.fontSize = '28px';
}
let unRemake = function(event){
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
    event.target.style.fontSize = '22px';
}
let remakeSkillImage = function(event){
    event.target.style.width = '70px';
    event.target.style.height = '70px';
}
let unRemakeSkillImage = function(event){
    event.target.style.width = '50px';
    event.target.style.height = '50px';
}

fullStackDropImg.addEventListener('click', dropFullStack);
for (var i=0; i< navItems.length; i++) {
    navItems[i].addEventListener('mouseover',remake);
    navItems[i].addEventListener('mouseleave',unRemake); 
}
for (var i=0; i< skillsLogos.length; i++) {
    skillsLogos[i].addEventListener('mouseover',remakeSkillImage);
    skillsLogos[i].addEventListener('mouseleave',unRemakeSkillImage); 
}
for (var i=0; i< contactLogos.length; i++) {
    contactLogos[i].addEventListener('mouseover',remakeSkillImage);
    contactLogos[i].addEventListener('mouseleave',unRemakeSkillImage); 
}

