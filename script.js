const navDialog = document.getElementById('nav-dia');

function handleMenu() {
    navDialog.classList.toggle('hidden');
    console.log(navDialog)
    const visibility = navDialog.style.display;
    navDialog.style.display = visibility === 'none' ? 'unset' : 'none';   
}

function intersectionObs(element ,isLTR ,speed){
    
}