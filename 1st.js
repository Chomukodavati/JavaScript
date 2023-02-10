let array=new Array();
array.push(23),array.push(24),array.push(25),array.push(26),array.push(27);
for(let i of array){
    if(i%2==0){
        console.log(i);
    }
}