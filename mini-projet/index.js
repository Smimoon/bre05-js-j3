/*
Codes couleurs

jaune: #efec4f;
orange: #eca45c;
rouge: #e85b69;
violet: #956caf;
bleu: #427cf5;
vert: #4cee7e;
noir: #020e13;

*/

function grid1()
{ let grid1 = document.querySelector("section:first-of-type");
grid1.style.backgroundColor = "#020e13";

}

function grid2()
{   let grid2 = document.querySelector("section:nth-of-type(2)");
    let yellow = grid2.querySelectorAll("div:nth-child(even)");
    let green = grid2.querySelectorAll("div:nth-child(odd)");
    for(let div of yellow){
        div.style.backgroundColor = "#efec4f";
    }
    for(let div of green) {
        div.style.backgroundColor = "#4cee7e";
    }
}

function grid3()
{   let grid3 = document.querySelector("section:nth-of-type(3)");
    let red = grid3.querySelector ("div:first-child");
    let orange = grid3.querySelector ("div:nth-child(2)");
    let yellow = grid3.querySelector ("div:nth-child(3)");
    let green = grid3.querySelector ("div:nth-child(4)");
    let blue = grid3.querySelector("div:nth-child(5)");
    let purple = grid3.querySelector("div:nth-child(6)");
    
    red.style.backgroundColor = "#e85b69";
    orange.style.backgroundColor = "#eca45c";
    yellow.style.backgroundColor = "#efec4f";
    green.style.backgroundColor = "#4cee7e";
    blue.style.backgroundColor = "#427cf5";
    purple.style.backgroundColor = "#956caf";
}

function grid4()
{   let grid4 = document.querySelector("section:nth-of-type(4)");
    let green = grid4.querySelector("div:nth-child(5)");
    
    grid4.style.backgroundColor = "#020e13";
    green.style.backgroundColor = "#4cee7e";

}

function grid5()
{   let grid5 = document.querySelector("section:nth-of-type(5)");
    let div = grid5.querySelectorAll("div");
    for(let i = 0; i<div.length; i++) {
        if(i<3) {
        div[i].style.backgroundColor = "#427cf5";
        }
        else if()
    }
    
}

function grid6()
{

}

grid1();
grid2();
grid3();
grid4();
grid5();
grid6();