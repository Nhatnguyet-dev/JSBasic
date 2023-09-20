// khai báo 3 hệ số của phương trình bậc 2
let a = Number(prompt("a = "));
let b = Number(prompt("b = "));
let c = Number(prompt("c = "));
// khi a ==0, giải phương trình bậc 1
if (a==0){
    if (c ==0){
        if (b==0){
            alert("Phương trình có vô số nghiệm.");
        } else {alert("Phương trình vô nghiệm")}
    } else {
        if (b==0){
            alert("Nghiệm: x = 0");
        } else { alert("Nghiệm x = "+(-b/c))}
    }
}
if (a!=0){
    // tính den ta khi a khác 0
    let denta = Math.pow(b,2) -4*a*c;
    // so sánh denta để tìm nghiệm chi tiết
    if (denta<0){
        alert("Phương trình vô nghiệm.");
    } else{
        let denta1 = Math.sqrt(Math.pow(b,2) -4*a*c);
        let x1 = (-b-denta1)/(2*a);
        let x2 = (-b-denta1)/(2*a);
        if (denta ==0){
            alert("Phương trình có 1 nghiệm kép: x = "+x1);
        } else{
            alert("Nghiệm x1 = "+x1+"\nNghiệm x2 = "+x2);
        }
    }
}
