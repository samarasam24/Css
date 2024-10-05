window.addEventListener('resize', () => {
    const dropList = document.querySelector('.nav-container');  
    console.log(window.innerWidth  )
    if(window.innerWidth >= 450){
        dropList.style.display = 'flex'
    }

})
function openDropDown(){ 
    const dropList = document.querySelector('.nav-container'); 
   if( dropList.style.display === 'flex'){
        dropList.style.display = 'none' 
   }else{
     dropList.style.display = 'flex' 
     dropList.style.opacity = '1' 
   }
};