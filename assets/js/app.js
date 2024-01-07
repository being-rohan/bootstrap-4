const cl = console.log;



const toggle2 = document.getElementById("togglebtn")
cl(toggle2)

const toggleSidebar=(eve)=>{


    eve.target.classList.toggle("fa-xmark");
eve.target.classList.toggle("fa-bars");
}

toggle2.addEventListener('click', toggleSidebar)



























