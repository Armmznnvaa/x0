let blocks = document.querySelectorAll('.block')
let turn = document.querySelector('#turn')
let winner = document.querySelector('#winner')
let restart = document.querySelector('#restart')

let icon = "X"

blocks.forEach(block => {
    block.addEventListener("click", () =>{
        if (block.textContent !=="X" && block.textContent !=="O" ){
            block.textContent = icon
            if (icon === "X") {
                icon = "O"
            }else{
                icon = "X"
            }
        }
    })    
});

function row() {
    blocks.forEach(block => {
        block.addEventListener("click", () =>{
            let row1 = blocks[0].textContent==blocks[1].textContent && blocks[0].textContent==blocks[2].textContent
            let row2 = blocks[3].textContent==blocks[4].textContent && blocks[3].textContent==blocks[5].textContent
            if ( row2) {
                alert("X win")
            }
        })    
    });
}
row()