// khai báo mảng
let mang = ["Tue", "Thu","Sat","Nine"];
// thêm các phần tử tại các vị trí nhất định
mang.splice(0,0,"Mon")
mang.splice(2,0,"Wed")
mang.splice(4,0,"Fri")
// thêm phần tử tại ví trí đó và xóa 1 phần tử sau nó
mang.splice(6,1,"Sun")
// in ra màn hình và sử dụng join để đưa mảng về strings
document.write("Các ngày trong tuần: ",mang.join(", "))
