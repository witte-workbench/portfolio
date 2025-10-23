
Array.prototype.random = function(){
  return this[Math.floor(Math.random()*this.length)];
}
for(let div of document.getElementsByClassName('stickyDiv')) {
    div.classList.add([
        "red", "blue", "orange", "green", "purple"
    ].random() + "Sticky");
}