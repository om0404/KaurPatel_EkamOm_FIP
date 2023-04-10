console.log('javascript is running!');
let logo = document.querySelector('#logo');
function logid(){
    console.log(this.id);
}
logo.addEventListener('click',logid);

member.forEach(hero => hero.addEventListener('click', loadHeroData));



