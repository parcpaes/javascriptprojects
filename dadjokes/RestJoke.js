export class RestJoke{
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    getRandom(){
        return fetch(this.baseUrl,{
            headers:{
                'Accept':'application/json'
            }
        })
            .then(response=> response.json());
    }
}