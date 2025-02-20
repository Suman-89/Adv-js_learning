function add(a:any , b:any):any{
    let result:any;
    if(typeof a === 'string' && typeof b === 'string') result = a.concat(b);
    else if (typeof a === 'number' && typeof b === 'number') result = a + b ;
    else result = 'Wrong arguments !!';
    return result;
}

// console.log(add('Dilon',' Makenson'));

// Union type
function summ (a : string | number | boolean , b : string | number | boolean):number | string | boolean {
    let result:any;
    if(typeof a === 'string' && typeof b === 'string') result = a.concat(b);
    else if (typeof a === 'number' && typeof b === 'number') result = a + b ;
    else result = 'Wrong arguments !!';
    return result;
}
console.log(summ('Dilon', ' Makenson'));