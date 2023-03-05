
function callAPI(){
    fetch('http://localhost:8080/')
    .then(res => res.text())
    .then(res => fillDIV(res))
    .catch(err => {
        console.log("err")
        console.log(err)
    })
    
}

function fillDIV(res) {
    console.log("fill")
    console.log(res)
    document.getElementById("retornoAPI").innerHTML = res
}