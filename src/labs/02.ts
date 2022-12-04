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

// any: trả về bất cứ thứ gì (áp dụng cho function and variable)
let testAny: any = "abc";
testAny = 1234;

// function tra ve gia tri
const sum = (a: number, b: number): number => {
  return a + b;
};

// void: function k tra ve gia tri luu ve db, ko cần keyword return áp dụng cho function
const handleLogs = (message: string): void => {
  console.log("message: " + message);
};

// never ko bao giờ trả về giá trị promise!
// k trả ra gì cả để xử lý lỗi
function handleException(errorMessage: string): never {
  throw Error(errorMessage);
}
//chạy k có điểm dừng
function runInfinity(): void {
  // while (true) {
  //   console.log("test");
  // }
}
let a232 = runInfinity();
console.log("check log a", a232); // ko show log vì ko chạy đc tới hàm này
// void sẽ trả ra undefined
// nerver sẽ k trả ra gì

//union type
function addNumberOrString(
  a: number | string | object | boolean,
  b: number | string | object | boolean
) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  throw new Error("Parameters must be a number or string");
}
