export const getPlanet = async (num = 14)=> {
    try {
        let response = await fetch(`https://swapi.dev/api/planets/${num}`);
        let data = await response.json();
        return data;
    } catch (error){
        console.log(error);
    }
};

export const getPerson = async (person = 35)=> {
    try{
        let response = await fetch(`https://swapi.dev/api/people/${person}`);
        let data = await response.json();
        return data;
    }catch (error){
        console.log(error);
    }
};

export const getFilms = async (film = 4)=> {
    try{
        let response = await fetch(`https://swapi.dev/api/films/${film}`);
        let data = await response.json();
        return data;
    }catch (error){
        console.log(error);
    }
};