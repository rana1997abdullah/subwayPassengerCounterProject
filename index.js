let counter = 0
let counter_el = document.getElementById('counter')
let save_el = document.getElementById('save_data')
function onIncrement(){
    counter += 1
    counter_el.innerText = counter
}
function onSave(){
    save_el.textContent += counter+' -  '
    counter = 0
    counter_el.textContent = counter
}
