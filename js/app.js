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