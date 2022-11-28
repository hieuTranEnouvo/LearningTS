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

//array
let testArray = ["hieutran", 23];
testArray.push("hey");
testArray.push(2);
console.log("test array", testArray);

//tuple array (dataType/size/order)
let testTuple = ["hieutran", 23];
let testTuple1: [boolean, string, number];
testTuple1 = [true, "hello", 12];

//optional number? dat cuoi
let optionalTuple: [boolean, string, number?];
optionalTuple = [true, "hello", 12];

// enum ==> giong constant nhưng chúngg ta sẽ khai báo đúng phần tử
export enum LocalStorage {
  USER_INFORMATION = "user-information",
  PROFILE_INFORMATION = "profile-information",
}

let a1 = LocalStorage.USER_INFORMATION;
let a2 = LocalStorage.PROFILE_INFORMATION;
