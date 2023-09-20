// nhập tên và giới tính
let hovaten = prompt("Nhập họ và tên: ");
let gioitinh = prompt("Giới tính của bạn là: (hãy viết dấu)");
// tách họ, tên, đệm và in ra console
let list = hovaten.split(" ");
let ho = list[0];
let dem = list[1];
let ten = "";
for (let x = 2 ; x < list.length ; x++){
    ten += list[x] + " ";
}
console.log("Họ: ",ho,"\nĐệm: ",dem,"\nTên: ",ten);
gioitinh = gioitinh.toLowerCase();
// xử lý giới tính
// tại sao khi đưa gioitinh.toLowerCase() vào cụm else if thì bị lỗi?
if (gioitinh == "nữ"){
    dem = "Vẽ"
} else if (gioitinh == "nam"){
    dem = "Văn"
} else {alert("Giới tính của bạn bị lỗi rồi, nhập lại nhé!")}
// in tên mới ra console 
console.log("Tên mới của bạn: ",ho,dem,ten)
document.write("Tên mới của bạn: ",ho,dem,ten)
