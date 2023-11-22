
let getul = document.getElementById('ul')
function add() {
  let a = document.getElementById('inp')
  if (a.value.length === 0) {
    alert('Missing the input value')
    return
  }
  let li = document.createElement('li')
  let liText = document.createTextNode(a.value)
  li.appendChild(liText)
  getul.appendChild(li)
  a.value = ''
  let deletbtn = document.createElement('button')
  let deletBtnText = document.createTextNode('Delete')
  deletbtn.appendChild(deletBtnText)
  li.appendChild(deletbtn)
  deletbtn.setAttribute('onclick', 'del(this)')
  let editBtn = document.createElement('button')
  let editBtnText = document.createTextNode('Edit')
  editBtn.appendChild(editBtnText)
  li.appendChild(editBtn)
  deletbtn.setAttribute('class', 'delete-btn')
    editBtn.setAttribute('class', 'edit-btn')
    editBtn.setAttribute('onclick', 'editBtnClick(this)')
}

function deleteAll() {
  getul.innerHTML = ''
}
function del(e) {
  console.log(e)
  e.parentNode.remove()
}
function editBtnClick(e) {
    let a = prompt("Enter Edit value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=a
}
