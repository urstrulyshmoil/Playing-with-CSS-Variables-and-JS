input=document.querySelectorAll('.controls input');
input=Array.from(input)

function handleUpdate(){
       let suffix=this.dataset.sizing || "";
       document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix)
}


input.forEach(ele => {
    ele.addEventListener("change",handleUpdate)
    ele.addEventListener("mousemove",handleUpdate)
}); 