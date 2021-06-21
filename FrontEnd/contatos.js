'use strict'

const getContact =async(url)=>{
    const response =  await fetch(url)
    const json = await response.json
    return json.data
}

const createRow =(contato)=>{
    const tbody = document.querySelector('main>table>tbody')
    const newRow = document.createElement('tr')

    newRow.innerHTML = `
        <td></td>
    `
    console.log(`criando a linha pra contato ${contato.nome}`)
} 

const updateTable= async()=>{ 
    const url = "http://localhost/Elias/apiphp/contatos/"
    const contato = await getContact(url)
    contatos.forEach(createRow)
}

updateTable();