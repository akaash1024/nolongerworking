//for in

//simply forin and tab


const myObject = {
    js:"JavaScript",
    cpp:"C++",
    rb:"Ruby",
    py:"Python"
}

for (const key in myObject) {
    // console.log(`${key} shortcut of ${myObject[key]}`);   
}

const  myArr = ["js", "py", "c++", "rb"]
for (const i in myArr) {
    console.log(i, myArr[i]);
}

