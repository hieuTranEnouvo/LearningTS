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
let abcd = `Eric and "Hello"`;
console.log("check abc", abc);
console.log("check abc", abcd);

// nôí chuỗi
let ay = "ahaha";
let by = `b ${ay}`;
console.log("noi chuoi", by);

// boolean
let aaa: boolean = Boolean("test");
let bbb: boolean = Boolean("");
console.log("check boolean", aaa); // true
console.log("check boolean", bbb); // false

//object
let pro: {
  name: string;
  age: number;
} = {
  name: "hieutran",
  age: 12,
};
// c2
let pro1: {
  name: string;
  age: number;
};
pro1 = {
  name: "hieutran",
  age: 12,
};
console.log("object", pro);
