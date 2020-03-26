document.getElementsByClassName('btnadd')[0].addEventListener('click', additem)
let item = document.getElementById('itemvalue');

function additem() {
    if (item.value != "") {



        let btncomplete = document.createElement("BUTTON")
        btncomplete.setAttribute("class", "btncomplete")
        btncomplete.innerHTML = "complete"
        document.body.appendChild(btncomplete)



        let btndelete = document.createElement("BUTTON")
        btndelete.setAttribute("class", "btndelete")
        btndelete.innerHTML = "Delete"
        document.body.appendChild(btndelete)



        let label = document.createElement("label")
        label.setAttribute("id", "label");
        label.innerHTML = item.value;
        document.body.appendChild(label)
        item.value = "";
        let br = document.createElement("br")
        document.body.appendChild(br)

        btndelete.addEventListener('click', function() {
            btncomplete.parentNode.removeChild(btncomplete)
            btndelete.parentNode.removeChild(btndelete)
            label.parentNode.removeChild(label)
            br.parentNode.removeChild(br)
        })

        btncomplete.addEventListener('click', function() {
            if (btncomplete.innerHTML == "complete") {
                btncomplete.innerHTML = "undo"
                label.setAttribute("style", "text-decoration: line-through;")
            } else {
                btncomplete.innerHTML = "complete"
                label.setAttribute("style", "text-decoration: none;")

            }
        })
    } else
        alert("Put the item Name")
}