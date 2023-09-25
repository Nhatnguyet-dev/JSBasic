function Student(id,first_name,last_name,class_id,email,phone_number,dob){
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.class_id = class_id;
    this.email = email;
    this.phone_number = phone_number;
    this.dob =dob;
    this.hovaten = function(){
        return first_name+ " " + last_name +" ";
    }
    this.tuoi = function(){
        const currentYear = new Date().getFullYear();
        const yearBirth = this.dob.getFullYear();
        const tuoi = currentYear - yearBirth;
        const ngaytuoi = tuoi*365;
        return tuoi +" tuổi hay "+ ngaytuoi;
    }
}
let student1 = new Student("PD07654","Võ Thị Hoài","Phương","MD0987","phuongvthpd@fpt.edu.vn","098542312","1999-12-09");
let student2 = new Student("PD07643","Võ Thị Hoài","A","MD0987","avthpd@fpt.edu.vn","098542312","2001-10-21");
let student3 = new Student();
console.log(student1);