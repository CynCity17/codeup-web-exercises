const getPeople = async (people) => {
    try{
        let response = await fetch(`https://swapi.dev/api/people/${people}`)
        let data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }
};

(async() =>{
    let lukesInfo = await getPeople(1);
    console.log(lukesInfo);
})();

