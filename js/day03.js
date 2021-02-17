


const select = document.querySelector('select');

function handleChange(){
    const selected = select.value;
    localStorage.setItem("contry", selected);
}

function loadCountries(){
    const selected = localStorage.getItem('contry');
    if (selected){
        const option = document.querySelector(`option[value="${selected}"]`);
        option.selected = true;
    }
}

select.addEventListener('change', handleChange);

function init(){
    loadCountries();
}

init();