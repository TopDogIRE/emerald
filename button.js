
getDogos().catch(err => console.error(err));
async function getDogos(){
    var response = await fetch('https://dog.ceo/api/breeds/image/random');
    var blob = await response.blob();

    // create <img> for it
    var img = document.createElement('img');
    document.getElementById("redSetter").innerHTML = "<img src =\'" + URL.createObjectURL(blob) + "\'>";
}
// I have made it as far as the json file is represnted in the DOM as an image...
// represntation but not as an actual image
