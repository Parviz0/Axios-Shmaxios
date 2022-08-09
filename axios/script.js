let url = "https://jsonplaceholder.typicode.com/photos"


for(let i = 0; i <= 5000; i++){
    axios.get(url + '/' + i)
    .then(res => {
        if(res.status === 200 || res.status === 201){
            reload(res.data)
        }
    })
    .catch(err => console.log(err))
}

let wrapper = document.querySelector('.wrapper')


function reload(item) {
        wrapper.innerHTML += `
            <div class="block">
                <h4>${item.title}</h4>
                <img src="${item.url}" alt="img">
            </div>
        `
}