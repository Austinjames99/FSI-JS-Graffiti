// Select some elements...
const header = document.querySelector('#page-header');
header.style.textAlign = 'left';

const dogImages = document.querySelectorAll('.dog-image');
    for(let i = 0; i < dogImages.length; i++){
        dogImages[i].style.borderRadius = '50px';
        dogImages[i].style.borderStyle = 'solid';
        dogImages[i].style.borderColor = 'red'
        
} 

let footer = document.querySelector('.footer');
    footer.style.borderStyle = 'solid'


const dogName = document.querySelectorAll('.dog-name')
    for(let i = 0; i < dogName.length; i++){
            dogName[i].style.color = 'blue';

    }


const dogDesc = document.querySelectorAll('.dog-description');
    for(let i = 0; i < dogDesc.length; i++){
        dogDesc[i].style.borderStyle = 'dashed';
        dogDesc[i].style.borderColor = 'green';
    }