interface tamsParameters 
{
    param1:number;
    param2:number;
    p3:number;
}
function tamsFunc ({param1, param2, p3}:tamsParameters)
{
    return (param1 + param2 ) * p3
    
}

module.exports = {tamsFunc}