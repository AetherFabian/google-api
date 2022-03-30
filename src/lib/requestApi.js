const URL = "https://assault-api.herokuapp.com/assaults/";

class Http{

    static instance = new Http()

    get_assaults = async() =>{
        try{
            const request = await fetch (`${URL}`)
            const response = await request.json()
            return response.results
        }catch(err){
            throw new Error(err);
        }
    }
}

export default Http;