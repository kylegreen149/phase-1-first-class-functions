function receivesAFunction(callbackFunc) {
    callbackFunc()
}


function returnsANamedFunction() {
    const namedFunction = function aNamedFunction() {

    }
    return namedFunction
}

function returnsAnAnonymousFunction() {
    return (function (){

    })
}