function feladat01(szinek) {
    let tmp = 0;
    for(let i = 2; i <= szinek.length; i++){
        tmp += faktorialis(szinek.length)/(faktorialis(szinek.length-i)*faktorialis(i));
    }
    return tmp;
}

function faktorialis(szam){
    let tmp = 1;
    for(let i = 1; i <= szam; i++){
        tmp = tmp*i;
    }
    return tmp;
}