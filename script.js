var i;
var divs = [];
var gridContainer = document.querySelector('.grid-container');
for(i=1;i<17;i++){
    var j;
    for(j=1;j<17;j++){
       divs[i,j] = document.createElement('div');
       divs[i,j].setAttribute('id', (`${i}-${j}`));
       divs[i,j].classList.add('inside-container');
       gridContainer.appendChild(divs[i,j]);
    } 
}
divs = document.querySelectorAll('.inside-container')
divs.forEach(div => div.addEventListener("mouseover", (e)=>{
    e.target.classList.add("black");
}))
