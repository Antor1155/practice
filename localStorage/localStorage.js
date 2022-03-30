let db = {};

const addToDb = item =>{
    const storage = localStorage.getItem("tracker");

    if (storage){
        const data1 = JSON.parse(storage);
        db = data1;
    }
    
    if (item in db){
        db[item] = db[item] + 1;
    }
    else{
        db[item] = 1;
    }

    localStorage.setItem("tracker", JSON.stringify(db));
} 

const removeItem = item=> {
    const storage = localStorage.getItem("tracker");

    if (storage){
        db = JSON.parse(storage);
        delete db[item];
    }

    localStorage.setItem("tracker", JSON.stringify(db));
}