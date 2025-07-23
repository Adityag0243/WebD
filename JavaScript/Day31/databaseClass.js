export class DataBase{

    _dbName;
    constructor( dbName ){
        this._dbName = dbName;
        console.log("I am here");
        
    }

    insert(){
        if(this._dbName === 'Unknown') return "Please select any DB";
        return `Connected to ${this._dbName} and insert Successful`;
    }
    delete(){
        if(this._dbName === 'Unknown') return "Please select any DB";
        return `Connected to ${this._dbName} and deleted Successful`;
    }
    update(){
        if(this._dbName === 'Unknown') return "Please select any DB";
        return `Connected to ${this._dbName} and updated Successful`;
    }
}