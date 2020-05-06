var arguments = process.argv

function add(a,b)
{
    return parseInt(a)+parseInt(b) // to extract number from string
}

var sum = add(arguments[2],arguments[3])

console.log("Addition of 2,3 is ",sum)