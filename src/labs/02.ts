// ko dùng const vì phải khởi tạo cho nó mà ở đây mình gán a =1 nên chỉ dùng let
let a: number;
a = 1;
console.log("check a", a);

// array
let ArrayString: string[] = ["a", "b", "c"];
ArrayString.push("abc");
console.log("check array type string", ArrayString);

// tự động nhận kiểu
let n = 10;
console.log("nhan kieu number", n);
// nhan string and number
let array = ["abc", "def", 90];
array.push(12);
console.log("nhan kieu string and number", array);

//hien ra ""
let abc = 'Eric and "Hello"';
console.log("check abc", abc);
