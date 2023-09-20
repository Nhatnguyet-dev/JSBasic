let namename;
let history = [];

const operators = ["+","-","*","/"];
const number = ['1','2','3','4','5','6','7','8','9','0'];
let ord = history.length;
function getValue(namename){
    let num = document.getElementById(namename);
    let b = document.getElementById(`screen`);
    let c = num.innerHTML;
    history.push(c);
    ord++;
    // hiển thị trên màn hình
    b.innerHTML += c;
    // 
    if (ord != 1){
        if (operators.indexOf(history[ord-2]) == -1){
            if (operators.indexOf(c) == -1){
                console.log(number.indexOf(c));
                history[ord-2] += c;
                history.pop();
                ord--;
            }
        }
    }
    console.log(history);
}
function clearhistory(){
    let num = document.getElementById(`screen`);
    num.innerHTML = " ";
    history.length = 0;
    ord =0;
    console.log(history);
}
function deleter(){
    let num = document.getElementById(`screen`);
    let element = history[history.length-1];
    let e = element.substring(0,element.length - 1);
    history.splice(history.length -1,1,e);
    console.log(history);
    num.innerHTML = history.join("");
}
function results(){
    if(history.length == 1){
        exit;
    }
    let result = 0;
    for (let index = 0; index < history.length; index++){
        if (operators.indexOf(history[index]) == -1){
            history[index] = Number(history[index]);
        }
    }
    for (let index = 0; index < history.length; index++){
        if (operators.indexOf(history[index]) != -1){
            switch(history[index]){
                case "*":
                    result += history[index-1] * history[index+1];
                    history.splice(index-1,3,result);
                    break;
                case "/":
                    result += history[index-1] / history[index+1];
                    history.splice(index-1,3,result);
                    break;
            }
        }
    }
    result = 0;
    for (let index = 0; index < history.length; index++){
        if (operators.indexOf(history[index]) != -1){
            switch(history[index]){
                case "+":
                    result += history[index-1] + history[index+1];
                    history.splice(index-1,3,result);
                    break;
                case "-":
                    result += (history[index-1] - history[index+1]);
                    history.splice(index-1,3,result);
                    break;
            }
        }
    }
    let num = document.getElementById(`screen`);
    num.innerHTML += "<br>"+result;
    result = 0;
}

// let history = [];
// var a,x;
// //console.log(history);
// //  a = document.getElementsByClassName(`var%`);
// a = document.getElementById(`%`);
// console.log(a.innerHTML);
// function layso(namename){
//     
//     if (history.length == 0){
//         result += Number(num.innerHTML);
//     } else {a = Number(num.innerHTML); }
//     history.push(Number(num.innerHTML));
//     //console.log("Mới ấn số xong",result);
//     //console.log(history);
//     if (a != NaN){
//         switch (x){
//             case "x":
//                 result *=a;
//                 break;
//             case "/":
//                 result /=a;
//                 break;
//             case "-":
//                 result -=a;
//                 break;
//             case "+":
//                 result +=a;
//                 break;
//         }
//     }
// }
// }
    // console.log(history);
    // // for (let index = 0; index < history.length; index++) {
    // //     const element = array[index];
    // //     if (operators.indexOf(element)!= -1){
    // //         ord.push(index);
    // //     }
    // // }
    // // for (let let index = 0; index < history.length; index++)
    // // for (const key in operators) {
    //     console.log(key);
    //     // console.log(key);
    //     // console.log(history.indexOf(key));
    //     // if (c == key){
    //     //     let numm = Number(history[0] + history[history.indexOf(key)-1]);
    //     //     console.log(numm);
    //     //     history.splice(0,indexOf(key),numm);
    //     // }
    // // }
    // for (const key in history) {
    //     let order = history.orderOf(key);
    //     if (key == "*"){
    //         let demo = Number(history[order-1]) * Number(history[order+1]);
    //         history.splice(order-1,3,demo);
    //     }
    //     if (key == "/"){
    //         let demo = Number(history[order-1]) / Number(history[order+1]);
    //         history.splice(order-1,3,demo);
    //     }
    //     switch (key){
    //         case "+":
    //             let demo = Number(history[order-1]) + Number(history(order+1));
    //             history.splice(order-1,3,demo);
    //         case "-":
    //             demo = Number(history[order-1]) - Number(history(order+1));
    //             history.splice(order-1,3,demo);
    //     }
    // }