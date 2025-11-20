function Car(props) {
    return( 
        <h1>I am a {props.brand}</h1>
        );
}
function Car2(props) {
    return( 
        <h1>I am a {props.brand.name}! ~~ {props.brand.model}!</h1>
        );
}
/*
function Car3(props) {
    return( 
        <li>I am a {props.brand}!</li>
        );
}*/
function Car4(props) {
    return( 
        <li>I am a {props.brand.name}!</li>
        );
}

function Garage(props) {
    let carBrand = "BMW";
    let carInfo = {name: "Audi", model: "2024"};

    let temp_array = [1,2,3,4,5];
    let temp_array2 =temp_array.map((x) => x * 2);
    console.log(JSON.stringify(temp_array2));

    //let cars = ["Ford", "BMW", "Audi"];
    let array_car = [
        {id : 1, name : "Ford"},
        {id : 2, name : "BMW"},
        {id : 3, name : "Audi"}
    ]

    //{cars.map((each) => <Car3 brand={each}/>)}
    return ( 
        <div>
            <h1>Who lives in my garage?</h1>
            <Car brand="Ford" />
            <Car brand={carBrand} /> 
            <Car2 brand={carInfo} />
            
            {array_car.map((each) => <Car4 key = {each.id} brand={each}/>)}
        </div>
    );
}


export default Garage;