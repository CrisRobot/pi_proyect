const container = document.querySelector('.sortoptions');
const sort = document.querySelector('.sort');
const miDiv = document.querySelector('#container');


const handle = () => {
    if(container.dataset.toggle == 'collapsed'){
        container.dataset.toggle =''
    } else{
        container.dataset.toggle = 'collapsed'
    }
}

sort.addEventListener('click', handle);