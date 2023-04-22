let cost = document.getElementById('cost').innerHTML
let aba = document.getElementById('5 ')
let nameproduct = document.getElementById('nameproduct').innerHTML
let arraytest = [];


let products = [

    {
        id: 0,
        name: 'product 1',
        price: '1000000',
        image: 'https://fakeimg.pl/250x100/ff0000',
        quantity: 1
    },
    {
        id: 1,
        name: 'product 2',
        price: '2000000',
        image: 'https://fakeimg.pl/250x100/ff0000',
        quantity: 1
    },
    {
        id: 2,
        name: 'product 3',
        price: '3000000',
        image: 'https://fakeimg.pl/250x100/ff0000',
        quantity: 1
    },
    {
        id: 3,
        name: 'product 4',
        price: '4000000',
        image: 'https://fakeimg.pl/250x100/ff0000',
        quantity: 1
    },
    {
        id: 4,
        name: 'product 5',
        price: '5000000',
        image: 'https://fakeimg.pl/250x100/ff0000'
        ,
        quantity: 1
    },
    {
        id: 5,
        name: 'product 6',
        price: '6000000',
        image: 'https://fakeimg.pl/250x100/ff0000'
        ,
        quantity: 1
    }
]

// let products =

// {
//     Name: nameproduct,
//     price: cost
// }
let totalcost = document.getElementById('totalprice')
console.log(totalcost)

let item = document.getElementsByClassName('item')
let buybutton = document.getElementById('buy_button')
let buyboard = document.getElementById('buy--list')
let buylist = '';
function buy(id) {
    console.log(products[id])
    let a = products[id]

    var item = a.id
    buylist += `<li id="${item}" class="buy_item" id="index " >
                      
                        <p>${a.name} : ${a.price}</p>
                        <div class="amount">
                            <button id="decrease" onclick="subclick(${id})"  class="amount button">-</button>
                            
                           <p id="number" data-index=${id}>${a.quantity}</p>
                            <button id="increase " onclick="addclick(${id})" class="amount button">+</button>
                        </div>
                    </li>`
    buyboard.innerHTML = buylist
    // let bobo = document.getElementById('number')
    arraytest.push(products[id])
    console.log(arraytest)

    totalPrice()

}

const buyItems = document.querySelectorAll('.buy_item');



function addclick(id) {
    let a = products[id]
    ++a.quantity
    let num = a.quantity
    console.log('num', num)
    // console.log('id', a.id, 'name', a.name, num)
    let test = document.querySelector('[data-index="' + id + '"]')
    console.log(test)
    test.innerHTML = num
    totalPrice()
}


function subclick(id) {
    let a = products[id]
    if (a.quantity < 2) { console.log('errol') }
    else {
        --a.quantity
        let num = a.quantity
        let test = document.querySelector('[data-index="' + id + '"]')

        test.innerHTML = num
    } totalPrice()
}
function totalPrice() {
    let total = 0;
    for (let i = 0; i < arraytest.length; i++) {
        total += arraytest[i].price * arraytest[i].quantity
    }
    console.log(total)
    totalcost.innerHTML = total
}


// function check() {
//     var increase = document.getElementById('#increase')
//     console.log(increase)
//     console.log(aba)
//     // function subclick() {
//     //     var decrease = document.getElementById('decrease')
//     //     decrease.addEventListener("click", () => {
//     //         console.log('ok2')



//     //     })
//     // }
//     // subclick()
//     // function addclick() {

//     //     increase.addEventListener("click", () => {
//     //         console.log('ok1')



//     //     })

//     // }

//     // addclick()
// }