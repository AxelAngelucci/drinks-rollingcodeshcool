fetch('https://jsonplaceholder.typicode.com/comments/')
    .then(response => response.json())
    .then(data => viewData(data));


const viewData = (data) => {
    let body = '' 
    for (let i = 0; i <= 4; i++) {
       body += `<img src="https://www.getbillage.com/files/user/avatar/_usuario.png" class="photo">
                <section>${data[i].email}<section>
                <section>${data[i].body}<section>
                <hr></hr>
                ` 
    }
    
    document.getElementById('body').innerHTML = body;

    

}