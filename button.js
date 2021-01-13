
getDogos().catch(err => console.error(err));
async function getDogos(){
    var response = await fetch('https://dog.ceo/api/breeds/image/random');
    var blob = await response.json();

    // create <img> for it
    document.getElementById("redSetter").innerHTML = "<img src =\'" + blob.message + "\'>";
}
// Corrected the error