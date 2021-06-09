// url = `https://cat-fact.herokuapp.com/facts/random?animal_type=${animal_type.value}&amount=${num_facts.value}`
const generatebtn = document.querySelector(".generate");
const animal_type = document.querySelector("#search");
let num_facts = document.querySelector(".num_facts_input");
const result = document.querySelector(".results")

generatebtn.addEventListener("click", removeItems)
generatebtn.addEventListener("click", fetchResults);


function removeItems(e){
    e.preventDefault();
    while (result.firstChild) {
        result.removeChild(result.firstChild); 
    }
}

function fetchResults(e){
    e.preventDefault();
    if (num_facts.value > 500) {
        alert("Max is 500")
        return
    }

    fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=${animal_type.value.toLowerCase()}&amount=${num_facts.value}`)
    .then(function(result) {
        return result.json();
    }).then(function(json) {
        let facts = json;

        if (num_facts.value === '1'){
            facts = [facts]
            console.log(facts)
        }
        facts.forEach(element => {
            var list = document.createElement("li");
            var node = document.createTextNode(element.text);
            list.appendChild(node);
            let facts = document.querySelector(".results");
            facts.appendChild(list);
        });
    })
    

    function imageProduced(){
        let image = document.createElement("img")
        document.querySelector(".results").appendChild(image)
            if (animal_type.value === "Cat"){
            image.src = 'https://i.ytimg.com/vi/317jz-PU7Mg/maxresdefault.jpg'
        } else if (animal_type.value === "Dog") {
            image.src = 'https://i.pinimg.com/originals/cd/1e/81/cd1e8102e2171aaa8afb24f6b5e21a1a.jpg'
            return image.src
        } else if (animal_type.value === "Horse") {
            image.src = 'https://wallpaperaccess.com/full/1658463.jpg'
        } else {
            image.src = 'https://facts.net/wp-content/uploads/2020/09/snail-4345504_1920.jpg'
        }
    }
    imageProduced();
}
