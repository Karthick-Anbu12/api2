async function main() {
    try {
        let element = await fetch("https://hp-api.herokuapp.com/api/spells")
        let data = await element.json();
        console.log(data)
        let title = document.createElement('div')
        title.className = 'title d-flex bg-dark text-light justify-content-center fs-1 p-2'
        title.innerText = "Spells in Harry Potter "
        let info = document.createElement('div')
        info.className = 'container mt-5'
        data.map((spell, index) => {
            box = document.createElement('div')
            box.className = 'box m-2'
            box.innerHTML = `<ul class="list-group ">
              <li class="list-group-item bg-dark text-light"><h6>${index + 1}. ${spell.name}</h6><p>${spell.description}</p></li>
               </ul>`
            info.appendChild(box)
        })
        document.body.appendChild(title)
        document.body.appendChild(info)
    } catch (error) {
        console.log(error)
    }

}
main()