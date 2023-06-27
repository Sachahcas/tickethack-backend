function checkBody(body, keys){
    let isValid = true;

    for (const element of keys){
        if (!body[element]||body[element]===""){
            isValid = false
        }
    }

    return isValid
}

module.exports = { checkBody };