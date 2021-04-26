for (const property in statistics) {
    if(property.charCodeAt(0) == 114) {
        console.log(`${property}: ${object[property]}`);
    }
    else if(property.property % 2 == 1) {
        console.log(`${property}: ${object[property]}`);
    }
}