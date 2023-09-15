// khai báo biến 
let toan = parseFloat(prompt("Điểm toán: "));
let ly = parseFloat(prompt("Điểm lý: "));
let hoa = parseFloat(prompt("Điểm hóa: "));
let sinh = parseFloat(prompt("Điểm sinh: "));
let tb = 0.0;
// kiểm tra bằng hàm 
if (kiemtra(toan) && kiemtra(ly) && kiemtra(hoa) && kiemtra(sinh)) {
    tb = (toan+hoa+sinh+ly)/4;
    alert("Điểm hợp lệ");
} else {alert("Điểm không hợp lệ")}
// menu các chức năng
switch (prompt("1. Tính điểm trung bình (switch case)\n2. Tính điểm trung bình (if else)\n0. Thoát")){
            case "1":
                switch (timso(tb)){
                    case 0:
                        alert("Xếp loại: Giỏi");
                        break;
                    case 1:
                        alert("Xếp loại: Khá");
                        break;
                    case 2:
                        alert("Xếp loại: Trung bình");
                        break;
                    case 3:
                        alert("Xếp loại: Yếu");
                        break;       
                }
                break;
            case "2":
                if (tb>=9){
                    alert("Xếp loại: Giỏi");
                } else if (tb>=7){
                    alert("Xếp loại: Khá");
                } else if (tb>=5){
                    alert("Xếp loại: Trung bình");
                } else {alert("Xếp loại: Yếu");}
                break;
            case "0":
                alert("Bạn đã thoát khỏi chương trình này")
                break;
        }
//  hàm kiểm tra điểm có hợp lệ không
function kiemtra(a){
    let kg = false;
    if (a>=0 && a<=10){
        kg = true;
    }
    return kg;
}
// tạo từng khoảng giá trị rồi gán 1 cái tên
function timso(n){
    let kg =0
    if (n<9 && n>=7){
        kg = 1
    }
    if (n<7 && n>=5){
        kg = 2
    }
    if (n<5){
        kg = 3
    }
    return kg;
}
