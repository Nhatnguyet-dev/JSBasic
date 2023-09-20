// khai báo 3 cạnh abc
let a = Number(prompt("a = "))
let b = Number(prompt("b = "))
let c = Number(prompt("c = "))
// khai báo phân biệt có phải tam giác không
let tamgiac = 0
// kiểm tra xem đây có phải cạnh tam giác không
if  ((a < (b+c)) && (a > Math.abs(b-c))){
    alert("Đây là 3 cạnh của 1 tạm giác!")
    tamgiac = 1
} else { alert("Đây không phải là cạnh của một tam giác!")}
// kiểm tra tính chất đặc biệt của tam giác
if (tamgiac == 1){
    // kiểm tra tam giác vuông
    if (Math.pow(a,2) == Math.pow(b,2)+Math.pow(c,2) || Math.pow(b,2) == Math.pow(a,2)+Math.pow(c,2) ||
    Math.pow(c,2) == Math.pow(b,2)+Math.pow(a,2)){
        alert("Đây là tam giác vuông")
    }
    //  kiểm tra tam giác cân
    if (b==c || c==a || a==b){
        alert("Đây là tam giác cân")
    }
    // kiểm tra tam giác đều
    if (a==b && b==c){
        alert("Đây là tam giác đều")
    }
}