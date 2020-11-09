let archBox = document.querySelector('#architecture-box');
    webDesignBox = document.querySelector('#web-design-box');
    archTitle = document.querySelector('#arch-title');
    webDesignTitle = document.querySelector('#webdesign-title');
    webDesignProjects = document.querySelector('#webdesign-projects');
    archProjects = document.querySelector('#arch-projects');

let marArch = '24% 0 0 10%';
    marDesign = '17.4% 0 0 34.7%';
    transRot = 'rotate(-26.8deg)';
    transRotOver = 'rotate(-14.2deg)';

archBox.addEventListener("mouseover", function mouseOverBox1(){
    webDesignBox.classList.replace("webdesign-box", "web-box");
    archTitle.style.opacity = '.1';
    webDesignTitle.style.transform = transRotOver;
    archTitle.style.transform = transRotOver;
    
    archTitle.style.margin = '35.11% 0 0 10%';
    webDesignTitle.style.margin = '33% 0 0 34.7%';

    webDesignProjects.classList.add('animate__fadeInUp');
});
archBox.addEventListener("mouseout", function mouseOutBox1(){
    webDesignBox.classList.replace("web-box", "webdesign-box");
    webDesignTitle.style.transform = transRot;
    webDesignTitle.style.margin = marDesign;
    archTitle.style.opacity = '1';
    archTitle.style.margin = marArch;
    archTitle.style.transform = transRot;

    webDesignProjects.classList.remove('animate__fadeInUp');
});
webDesignBox.addEventListener("mouseover", function mouseOverBox2(){
    archBox.classList.replace("archi-box", "arch-box");
    webDesignTitle.style.opacity = '.1';
    archTitle.style.transform = transRotOver;
    webDesignTitle.style.transform = transRotOver;
    
    archTitle.style.margin = '8.6% 0 0 10%'
    webDesignTitle.style.margin = '5.2% 0 0 34.7%';

    archProjects.classList.add('animate__fadeInDown');
});
webDesignBox.addEventListener("mouseout", function mouseOutBox2(){
    archBox.classList.replace("arch-box", "archi-box");
    archTitle.style.transform = transRot;
    archTitle.style.margin = marArch;
    webDesignTitle.style.opacity = '1';
    webDesignTitle.style.margin = marDesign;
    webDesignTitle.style.transform = transRot;

    archProjects.classList.remove('animate__fadeInDown');
}); 

