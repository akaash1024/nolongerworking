# DOM

visit wikipedia home page "wikipedia"
> inspect > 

    - console.log(window)
    - console.log(document)
    - console.dir(document) //show hidden details too
    - console.log(document.links[2])
    - document.getElementById('firstHeading').innerHTML = "<h1>Akash</h1>"


```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        
        <title>Learning DOM</title>
    </head>
    <body>
        <div class="bg-black">
            <h1 class="heading" id="title">DOM</h1>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    </body>
    </html>
    
    +++++
    live server > inspect

    document.getElementById('title')
    document.getElementById('title').id
    document.getElementById('title').className

    document.getElementById('title').getAttribute('id')
    document.getElementById('title').getAttribute('class')

    document.getElementById('title').setAttribute('class', 'test heading') 
        - check in element nearby console.
    
    #storing in variable 
    const title = document.getElementById('title')
    title //enter return 
    title.style.borderRadius = "20px"
    title.style.backgroundColor = "green"
    
    ############
    title.innerHTML //shows everything including HTML and CSS code.
    title.textContent //override styling by css and shows hidden text too,
    title.innerText  //cant line50.

```


```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        
        <title>Learning DOM</title>
    </head>
    <body>
        <div class="bg-black">
            <h1 class="heading" id="title">DOM Learning <span style="display: none;">test text</span></h1>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <input type="password">
        </div>
    </body>
    </html>
    
    +++++
    live server > inspect

    ##REAL life uses
    - document.querySelector('h2')  // returns first only // here we have three <h2>
    - document.querySelector('.heading') //on class
    - document.querySelector('#title') // on id

    - document.querySelector('input[type="password"]')
```

```

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        
        <title>Learning DOM</title>
    </head>
    <body>
        <div class="bg-black">
            <h1 class="heading" id="title">DOM Learning <span style="display: none;">test text</span></h1>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <input type="password">

            <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ul>
        </div>
    </body>
    </html>

    ##ADVANCED
    document.querySelector('ul')
    const myul = document.querySelector('ul')
    myul.querySelector('li')
    const turnGreen = myul.querySelector('li')
    turnGreen.style.backgroundColor = "green"
    turnGreen.style.padding = "15px"

    turnGreen.innerText = "Five"



    ###Advanced 2 .
    document.querySelectorAll('li')
    const tempLiList = document.querySelectorAll('li')
    tempLiList[0].style.color = "Red"

    const myH1 = document.querySelectorAll('h1')
    myH1[0].style.color = 'green' 

    tempLiList.forEach(function (li) {
        li.style.backgroundColor = "red"
    })

```

```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        
        <title>Learning DOM</title>
    </head>
    <body>
        <div class="bg-black">
            <h1 class="heading" id="title">DOM Learning <span style="display: none;">test text</span></h1>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <input type="password">
            
            <ul>
                <li class="list-item">One</li>
                <li class="list-item">Two</li>
                <li class="list-item">Three</li>
                <li class="list-item">Four</li>
            </ul>
        </div>
    </body>
    </html>

    ##
    document.getElementsByClassName('list-item')
    const tempClassList = document.getElementsByClassName('list-item')
    Array.from(tempClassList) //converting and logging in console.
    const myConvertedArray = Array.from(tempClassList) //storing in var

    myConvertedArray.forEach(function (li) {
        li.style.color = "orange"
    })

```

```
working on wikipedia
    


```