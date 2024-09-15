let myArrar = ["flesh", "batman", "superman"]
console.log(myArrar.length);

for (let i = 0; i < myArrar.length; i++) {
    const element = myArrar[i];
    console.log(element);
}


for (let i=1;i<=10;i++){
    if(i==5){
        console.log("dedected 5");
        continue
    }
    console.log(`value of i is ${i}`);
    
}

