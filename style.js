
Array.prototype.random = function(){
  return this[Math.floor(Math.random()*this.length)];
}
for(let div of document.getElementsByClassName('stickyDiv')) {
    div.classList.add([
        "red", "blue", "orange", "green", "purple"
    ].random() + "Sticky");
    let rand = Math.ceil(Math.random()*3);
    div.style.setProperty('--mask', 'url("images/sticky_note' + rand + '.svg")');
    div.style.transform = `translate(${Math.round((Math.random()-0.5)*15)}px, ${Math.round((Math.random()-0.5)*15)}px)`;
}
if (localStorage.getItem("font")=="accessible") {
    document.body.classList.add("typewritten");
}
