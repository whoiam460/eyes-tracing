window.saveDataAcrossSesions = true;

var allow = null;
var notdrop = null;
var notdrop1 = null;

const look_delay = 2000; // 2sec



const topp = window.innerHeight / 5
const botom = window.innerHeight - window.innerHeight / 5




const destination = document.querySelector('#destination');
const destinationY = destination.getBoundingClientRect().y;
const destinationX = destination.getBoundingClientRect().x;
const destinationBottom = destination.getBoundingClientRect().bottom;
const destinationRight = destination.getBoundingClientRect().right;


const block2 = document.querySelector("#block2");
const block2Y = block2.getBoundingClientRect().y;
const block2X = block2.getBoundingClientRect().x;
const block2Bottom = block2.getBoundingClientRect().bottom;
const block2Right = block2.getBoundingClientRect().right;


const block3 = document.querySelector("#block3");
const block3Y = block3.getBoundingClientRect().y;
const block3X = block3.getBoundingClientRect().x;
const block3Bottom = block3.getBoundingClientRect().bottom;
const block3Right = block3.getBoundingClientRect().right;



webgazer.setGazeListener(function (data, elapsedTime) {

    const x = Math.round(data?.x);
    const y = Math.round(data?.y);





    if (y < topp) {
        window.scrollBy(0, -40);
    } else if (y > botom) {
        window.scrollBy(0, 40);
    }

    // console.log(x, y);


    function Squar() {

        const div1 = document.querySelector('.div-1');
        const div2 = document.querySelector('.div-2 ');
        const img = document.querySelector('#squar');



        div1.ondragover = allowDrop;
        div2.ondragover = allowDrop;

        function allowDrop(event) {
            event.preventDefault();
        }

        img.ondragstart = drag;



        function drag(event) {
            event.dataTransfer.setData('id', event.target.id)
        }

        div1.ondrop = drop;
        div2.ondrop = drop;



        function drop(event) {
            let itemId = event.dataTransfer.getData('id');
            console.log(itemId);
            event.target.append(document.getElementById(itemId))
        }
    }

    Squar()


    function Oval() {

        const div1 = document.querySelector('.div-1');
        const div2 = document.querySelector('.div-2 ');
        const img = document.querySelector('#oval');

        div1.ondragover = allowDrop;
        div2.ondragover = allowDrop;

        function allowDrop(event) {
            event.preventDefault();
        }

        img.ondragstart = drag;



        function drag(event) {
            event.dataTransfer.setData('id', event.target.id)
        }

        div1.ondrop = drop;
        div2.ondrop = drop;



        function drop(event) {
            let itemId = event.dataTransfer.getData('id');
            console.log(itemId);
            event.target.append(document.getElementById(itemId))
        }
    }

    Oval()



    function Circle() {

        const div1 = document.querySelector('.div-1');
        const div2 = document.querySelector('.div-2 ');
        const img = document.querySelector('#circle');

        div1.ondragover = allowDrop;
        div2.ondragover = allowDrop;

        function allowDrop(event) {
            event.preventDefault();
        }

        img.ondragstart = drag;



        function drag(event) {
            event.dataTransfer.setData('id', event.target.id)
        }

        div1.ondrop = drop;
        div2.ondrop = drop;



        function drop(event) {
            let itemId = event.dataTransfer.getData('id');
            console.log(itemId);
            event.target.append(document.getElementById(itemId))
        }
    }

    Circle()



    function Diamond() {

        const div1 = document.querySelector('.div-1');
        const div2 = document.querySelector('.div-2 ');
        const img = document.querySelector('#diamond');



        div1.ondragover = allowDrop;
        div2.ondragover = allowDrop;

        function allowDrop(event) {
            event.preventDefault();
        }

        img.ondragstart = drag;



        function drag(event) {
            event.dataTransfer.setData('id', event.target.id)
        }

        div1.ondrop = drop;
        div2.ondrop = drop;



        function drop(event) {
            let itemId = event.dataTransfer.getData('id');
            console.log(itemId);
            event.target.append(document.getElementById(itemId))
        }
    }

    Diamond()




    // function scrolUp() {
    //     const button = document.querySelector('.button-up');

    //     const buttonY = button.getBoundingClientRect().y - 20 + "px";
    //     const buttonX = button.getBoundingClientRect().x;
    //     const buttonBottom = button.getBoundingClientRect().bottom;
    //     const buttonRight = button.getBoundingClientRect().right;

    //     if ((buttonBottom >= y && y >= buttonY) && (buttonRight >= x && x >= buttonX)) {
    //         window.scrollBy(0, -40);
    //     }
    // }


    // function scrolDown() {
    //     const button = document.querySelector('.button-down');

    //     const buttonY = button.getBoundingClientRect().y;
    //     const buttonX = button.getBoundingClientRect().x;
    //     const buttonBottom = button.getBoundingClientRect().bottom;
    //     const buttonRight = button.getBoundingClientRect().right;

    //     if ((buttonBottom >= y && y >= buttonY) && (buttonRight >= x && x >= buttonX)) {
    //         window.scrollBy(0, 40);
    //     }
    // }



    function dropSquar() {


        const squar = document.querySelector('#squar');
        const load = document.querySelector('#load')



        const squarY = squar.getBoundingClientRect().y;
        const squarX = squar.getBoundingClientRect().x;
        const squarBottom = squar.getBoundingClientRect().bottom;
        const squarRight = squar.getBoundingClientRect().right;



        if ((squarBottom >= y && y >= squarY) && (squarRight >= x && x >= squarX)) {
            allow = true;
            notdrop = true;
            load.classList.add('visible')

            setTimeout(() => {
                if ((squarBottom >= y && y >= squarY) && (squarRight >= x && x >= squarX)) {
                    squar.classList.add("fly");
                    load.classList.remove('visible')
                }
            }, look_delay);
        }
        if (allow) {
            squar.style.left = (x - 50) + "px";
            squar.style.top = (y - 50) + "px";
        }

        if ((destinationBottom >= y && y >= destinationY) && (destinationRight >= x && x >= destinationX) && notdrop) {


            setTimeout(() => {
                if ((destinationBottom >= y && y >= destinationY) && (destinationRight >= x && x >= destinationX) && notdrop) {
                    allow = false
                    squar.classList.add("move")
                    squar.classList.remove("fly")

                    destination.appendChild(squar)
                }
            }, look_delay);





        }




    }

    function dropOval() {

        const oval = document.querySelector('#oval');
        const load2 = document.querySelector('#load2')

        const ovalY = oval.getBoundingClientRect().y;
        const ovalX = oval.getBoundingClientRect().x;
        const ovalBottom = oval.getBoundingClientRect().bottom;
        const ovalRight = oval.getBoundingClientRect().right;



        if ((ovalBottom >= y && y >= ovalY) && (ovalRight >= x && x >= ovalX)) {

            allow = true;
            notdrop1 = true;
            load2.classList.add('visible')

            setTimeout(() => {
                if ((ovalBottom >= y && y >= ovalY) && (ovalRight >= x && x >= ovalX)) {
                    oval.classList.add("fly");
                    load2.classList.remove('visible')
                }
            }, look_delay);
        }
        if (allow) {
            oval.style.left = (x - 50) + "px";
            oval.style.top = (y - 50) + "px";
        }


        if ((destinationBottom >= y && y >= destinationY) && (destinationRight >= x && x >= destinationX) && notdrop1) {


            setTimeout(() => {
                if ((destinationBottom >= y && y >= destinationY) && (destinationRight >= x && x >= destinationX) && notdrop1) {
                    allow = false
                    oval.classList.add("move")
                    oval.classList.remove("fly")

                    destination.appendChild(oval)
                }
            }, look_delay);


        }



        // if  (isNaN(x)){
        //     oval.classList.add('fly')
        //     oval.style.left = ovalX;
        //     oval.style.top =ovalY ;
            
        // } 
        // console.log(ovalX)
        // console.log(ovalY);
    }

  
   

    function game() {
        const red = document.querySelector('#red');
        const redY = red.getBoundingClientRect().y;
        const redX = red.getBoundingClientRect().x;
        const redBottom = red.getBoundingClientRect().bottom;
        const redRight = red.getBoundingClientRect().right;

        if ((redBottom >= y && y >= redY) && (redRight >= x && x >= redX)) {

            allow = true;
            notdrop = true;


            setTimeout(() => {
                if ((redBottom >= y && y >= redY) && (redRight >= x && x >= redX)) {
                    red.classList.add("fly");
                }
            }, look_delay);

        }

        if (allow) {
            red.style.left = (x - 50) + "px";
            red.style.top = (y - 50) + "px";
        }




    }


    game()
    // scrolUp()
    // scrolDown()
    dropSquar()
    dropOval()
}).begin()

webgazer.showVideoPreview(false).showPredictionPoints(true)

