const button_block = document.querySelector(".button_block");

const creator_block_wrapper = document.querySelector('.creator_block_wrapper');

const button_close = document.querySelector(".button_close");

button_block.addEventListener("click", showCreator);

button_close.addEventListener("click", closeCreator);

function showCreator () {
    creator_block_wrapper.classList.add ("showed");
}

function closeCreator () {
    creator_block_wrapper.classList.remove ("showed");
}