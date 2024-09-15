const box = document.querySelectorAll(".box");
const colors = ['#FFEA20', '$ff8b13', '#820000', '#F273E6', '#3D1766', '#FF7B54', '#3C2A21', '#D5CEA3', '#88A47C', '#1A0000', '#1A120B'];

box.forEach(box => {
    box.onmouseenter = () => {
        box.style.backgroundColor = colors [Math.floor(Math.random() * colors.length)];
    };

    box.onmouseleave = () => {
        setTimeout(() => {
            box.style.backgroundColor = "#646464";
        }, 1000);
        
    };
});