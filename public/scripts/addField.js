//procurar o botao
document.querySelector("#add-time")
//qudno clicar no botao
.addEventListener('click', cloneField)
//executar uma acao
function cloneField(){
    //duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//boolean: true ou false
    //pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
       field.value = ""
       
    })
    //colocar na pág: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}