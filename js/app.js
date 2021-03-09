const category_title = document.querySelectorAll('.category__title');
const allCategories = document.querySelectorAll('.all');

for(let i=0; i<category_title.length;i++){
    category_title[i].addEventListener('click',filterCategory.bind(this, category_title[i]));
}
function filterCategory(item){
    changeActivePosition(item);
    for(let i = 0; i < allCategories.length; i++){
        if(allCategories[i].classList.contains(item.attributes.id.value)){
            allCategories[i].style.display = "block";
            allCategories[i].style.alignItems="center";
        } else {
            allCategories[i].style.display = "none";
        }
    }
}
function changeActivePosition(activeItem){
    for(let i = 0; i < category_title.length; i++){
        category_title[i].classList.remove('active');
    }
    activeItem.classList.add('active');
};

//canvas animation

const w = document.getElementsByClassName("skills").style.width;
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];
const numberOfPraticles = 100;

//get mouse position

const mouse = {
    x:null,
    y:null
}

window.addEventListener('mousemove',(event)=>{
    mouse.x = event.x;
    mouse.y = event.y;
    //console.log(mouse.x, mouse.y);
});

setInterval(()=>{
    mouse.x = undefined;
    mouse.y = undefined;
},200);

//Creating Particles

class Particle{
    constructor(x, y, size, color, weight){
        this.x = x;
        this.y = y,
        this.size = size,
        this.color = color,
        this.weight = weight
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update(){
        this.size -=0.05;
        if(this.size < 0){
            this.x = (mouse.x + ((Math.random() * 20) - 10));
            this.y = (mouse.y + ((Math.random() * 20) - 10));
            this.size = (Math.random() * 10) + 2;
            this.weight = (Math.random() * 2) - 0.5;
        }
        this.y +=this.weight;
        this.weight +=0.2;
        
        if(this.y > canvas.height - this.size){
            this.weight *= -1;

        }
    }
}

// to randomly generate particles

function init(){
    particleArray = [];
    for(let i=0; i < numberOfPraticles; i++){
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let size = (Math.random() * 5) + 2;
        let color = '#F07707'
        let weight = 1;
        particleArray.push(new Particle(x, y, size, color, weight)); 
    }
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i=0; i < particleArray.length; i++){
        particleArray[i].update();
        particleArray[i].draw();
    }
    requestAnimationFrame(animate);
}

init();
animate();



