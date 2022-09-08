// const sum = {
//   ac: 1,
//   sum(...args) {
//     return (...args2) => {
//       const summ =
//         args.reduce((sum, current) => sum + current, 0) +
//         args2.reduce((sum, current) => sum + current, 0);
//       this.ac = summ;
//       return this.sum(summ);
//     };
//   },
// };

// sum.sum(1)(2)(3)(4);
// count = sum.ac;

// console.log(count);

// function add(n) {
//   const sum = (y) => add(n + y);
//   sum.valueOf = () => n;
//   return sum;
// }

// console.log(add(1)(2)(3));

// function add(n){
//   return Object.assign(x => add(n + x), {toString: () => n})

// function add(n) {
//   const sum = n;

//   const count = (newArgs) => {
//     const nextNum = sum + newArgs;
//     return add(nextNum);
//   };

//   count.valueOf = () => sum;
//   console.log( count.valueOf);

//   return count;
// }

// console.log(add(1)(2));

// function add(n) {
//   console.log("n", n);
//   const sum = function (y) {
//     console.log("y", y);
//     return add(n + y);
//   };
//   // sum.valueOf = function () {
//   //   return n;
//   // };
//   return sum;
// }

// // ["1: a", "2: b", "3: c"]
// const arr1 = ["a", "b", "c"];

// const number = (arr) => {

//  const newArr = arr.map((item, i) => {
//    return item = i + 1 +": "+ item;

//   });
//  return newArr
// };

// console.log(number(arr1));

// [0, 0, 0, 0, 2, 1, 0], 2, 0, 1  -->  9
// [0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2  -->  3

// //
// function scoreTest(arr, correct, omitted, wrong) {
//   let correctAnswer = 0;
//   let omittedAnswer = 0;
//   let wrongAnswer = 0;

//   arr.forEach((elem) => {
//     if (elem === 0) {
//       correctAnswer++;
//     } else if (elem === 1) {
//       omittedAnswer++;
//     } else {
//       wrongAnswer++;
//     }
//   });

//   let total =
//     correctAnswer * correct + omittedAnswer * omitted - wrongAnswer * wrong;

//   return total;
// }

// console.log(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2));

// [1,1,2,1,2,1,1,1,10,1,1,1,1] / 10

// function findOdd(arr) {
//   const newArr = arr.reduce((acc, elem) => {
//     acc[elem] = (acc[elem] || 0) + 1;
//     return acc;
//   }, {});

//   let odd;
//   for (const [key, value] of Object.entries(newArr)) {
//     if (value % 2) {
//       odd = key;
//     }
//   }
//   return odd;
// }

// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

// var result = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5].reduce(function(acc, el) {
//   acc[el] = (acc[el] || 0) + 1;
//   return acc;
// }, {});

// console.log(Object.entries(result));

// function arrayDiff(arr1, arr2) {
//   let newArr
//   if (arr2.length <= 1) {
//      newArr = arr1.filter((el) => {
//       return el != arr2;
//     });
//   } else{
//     console.log('ti huy');
//   }

//   return newArr;
// }

// console.log(arrayDiff([1, 2, 3], [1,2]));

// function arrayDiff(arr1, arr2) {
//   const newArr = arr1.filter((elem) => !arr2.includes(elem));
//   return newArr;
// }

// console.log(arrayDiff([1, 1, 2 ,3 ,1 ,2 ,3 ,4], [1, 3]));

// function getCount(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   const array = str.split("");
//   let count = 0;
//   array.forEach((e) => {
//     if (vowels.includes(e)) {
//       count++;
//     }
//   });
//   return count;
// }

// console.log(getCount("abracadabra"));

// function reverseStr(str) {
//   return str.split("").reverse().join("");
// }

// function spinWord(str) {
//   const arrWord = str.split(" ");
//   let newStr = [];
//   arrWord.forEach((word) => {
//     if (word.length < 5) {
//       newStr.push(word);
//     } else {
//       const reverseWord = word.split("").reverse().join("");
//       newStr.push(reverseWord);
//     }
//   });

//   return newStr.join(" ");
// }

// console.log(spinWord("Just kidding there is still one more"));

// function maxMultiple(a, b) {
//   const numb = a * Math.trunc(b / a);
//   return numb;
// }

// console.log(maxMultiple(2, 7));
// console.log(maxMultiple(3, 10));
// console.log(maxMultiple(37, 220));
// console.log(maxMultiple(7, 100));

// function aa (str){
//   const newArr = str.split('').reduce((acc, elem) => {
//     acc[elem] = (acc[elem] || 0) + 1;
//     return acc;
//   }, {});
//   return newArr
// }

// console.log(aa('arithmetics'));

/// Function construction
// function Invoices(name, invoices = "unknown", amount = "unknown") {
//   this.name = name;
//   this.invoices = invoices;
//   this.amount = amount;

//   Invoices.prototype.getInfo = function () {
//     return `Hello ${this.name}, your invoice balance #${this.invoices} : ${this.amount}$ `;
//   };
//   Invoices.prototype.getName = function () {
//     return `Hello ${this.name}`;
//   };
//   Invoices.static = function () {
//     return "I do not have access to instance";
//   };
// }

// const user = new Invoices("Yurii", 422, 10000);
// console.log("user :", user);
// console.log("user :", user.getInfo());

// const accountantInvoice = new Invoices("Semenovna", 2);
// accountantInvoice.position = "Accountant";
// accountantInvoice.getInfo = function () {
//   return `Hello ${this.name}, your position ${this.position} `;
// };
// console.log("accountantInvoice :", accountantInvoice);
// console.log("accountantInvoice :", accountantInvoice.getInfo());

// const seo = new Invoices("Michalich", 1);
// seo.someProperty = "some property";
// seo.print = function () {
//   return this.someProperty;
// };
// console.log("seo :", seo);
// console.log("seo :", seo.getInfo());
// console.log("seo :", seo.print());

// function Owner(name, company) {
//   this.__proto__ = new Invoices();
//   Invoices.call(this, name);
//   this.company = company;
// }

// const owner = new Owner("Petrovich", "RBC");
// console.log("owner: check method of basic prototype ", owner.getName());

// owner.subordinates = [
//   {
//     name: "Yurii",
//     position: "user",
//   },
//   {
//     name: "Semenovna",
//     position: "Accountant",
//   },
//   {
//     name: "Michalich",
//     position: "seo",
//   },
// ];
// owner.print = function () {
//   return this.subordinates;
// };
// console.log("owner :", owner);
// console.log("owner :", owner.subordinates);

// console.log("Static method :", Invoices.static());

// /// Class
// console.log("///////////////////////////////////////////////////");
// class ClassInvoices {
//   constructor(name, invoices = "unknown", amount = "unknown") {
//     this.name = name;
//     this.invoices = invoices;
//     this.amount = amount;
//   }
//   getInfo() {
//     return `Hello ${this.name}, your invoice balance #${this.invoices} : ${this.amount}$ `;
//   }
//   static staticMethod() {
//     return "I do not have access to instance";
//   }
// }
// console.log("ClassInvoices static method:", ClassInvoices.staticMethod());

// const classUser = new ClassInvoices("Yurii", 422, 10000);
// console.log("classUser :", classUser);
// console.log("classUser :", classUser.getInfo());

// const classAccountantInvoice = new ClassInvoices("Semenovna", 2);
// classAccountantInvoice.position = "Accountant";
// classAccountantInvoice.getInfo = function () {
//   return `Hello ${this.name}, your position :${this.position} `;
// };
// console.log("classAccountantInvoice :", classAccountantInvoice);
// console.log("classAccountantInvoice :", classAccountantInvoice.getInfo());

// const classSeo = new ClassInvoices("Michalich", 1);
// classSeo.someProperty = "some property";
// classSeo.print = function () {
//   return this.someProperty;
// };
// console.log("classSeo :", classSeo);
// console.log("classSeo :", classSeo.getInfo());
// console.log("classSeo :", classSeo.print());

// class ClassOwner extends ClassInvoices {
//   constructor(company) {
//     super("Petrovich"); // ???
//     this.company = company;
//   }
// }

// const classOwner = new ClassOwner("RBC");
// classOwner.subordinates = [
//   {
//     name: "Yurii",
//     position: "user",
//   },
//   {
//     name: "Semenovna",
//     position: "Accountant",
//   },
//   {
//     name: "Michalich",
//     position: "seo",
//   },
// ];
// classOwner.print = function () {
//   return this.subordinates;
// };
// console.log("classOwner :", classOwner);
// console.log("classOwner :", classOwner.subordinates);

// function adjacentElementsProduct(arr) {
//   let result = -100000000000;

//   for (i = 0; i < arr.length - 1; i++) {
//     if (arr[i] * arr[i + 1] > result) {
//       result = arr[i] * arr[i + 1];
//     }
//   }

//   return result;
// }

// console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));

// function high(str) {
//   const alphaber = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
//     f: 6,
//     g: 7,
//     h: 8,
//     i: 9,
//     j: 10,
//     k: 11,
//     l: 12,
//     m: 13,
//     n: 14,
//     o: 15,
//     p: 16,
//     q: 17,
//     r: 18,
//     s: 19,
//     t: 20,
//     u: 21,
//     v: 22,
//     w: 23,
//     x: 24,
//     y: 25,
//     z: 26,
//   };
//   let total = 0;
//   let string = "";
//   let result2 = str.split(" ").map((item) => {
//     let result = 0;
//     let aa = item.split("").map((i) => {
//       result = result + alphaber[i];
//       return result;
//     });

//     if (result > total) {
//       total = result;
//       string = item;
//     }

//     return aa;
//   });

//   return string;
// }

// console.log(high("take me to semynak"));

// function oddCount(number){
//   let count = 0
//   for(i = number-1; i >0;i--){

//     if(i%2){
//       count++
//     }
//   }
// return count
// }

// function oddCount(number){
//   let count= Math.floor(number/2)

// return count
// }

// console.log(oddCount());

// function n(number){
//   let arr = []
//   for(i=0;i<number;i++){
//     arr.push(i)
//   }
//   return arr
// }

// console.log(n(4));

// const arr = N => [ /* the numbers 0 to N-1 */ ];

// function reverseWords(str) {

//   return str.split(' ').reverse().join(' ');
// }

// console.log(reverseWords("hello"));

// function grow(x){
//   xreduce((acc, val) => acc + val, 0);
// }

// console.log(grow([1,2,3]));

// function maskity(cc) {
//   let newStr = [];

//   const visibleNumb = cc.slice(-4);
//   const hiddenNumb = cc.split("").splice(0, cc.length - 4).join('');

//   console.log(hiddenNumb.replace(/./g,'*'));

//   return newStr;
// }

// console.log(maskity("121231231a2310000"));

// function anagrams(word, words) {
//   let newStr = word.split("");
//   let newArr = [];
//   words.forEach((string) => {
//     let newArr1 = [...string];
//     let newArr2 = [...string];

//     newStr.forEach((l) => {
//       let index = newArr2.findIndex((e) => e === l);
//       if (index >= 0) {
//         newArr2.splice(index, 1);
//       }
//       if (!newArr2.length) {

//         newArr.push(newArr1.join(''));
//       }
//     });
//   });

//   return newArr;
// }

// anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]); // => ['aabb', 'bbaa']

// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// // console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// // console.log(anagrams("laser", ["lazing", "lazy", "lacer"]));

// function stantonMeasure(arr){
//   let newArr = arr.filter(n => n===1)
//   return newArr(newArr(1))
// }

// console.log(stantonMeasure([-12,1,-2,1,7,1,-10,1,-5,1,15,1,1,1,-4,1]));

// function generateShape(integer) {
//   let str = "";

//   for (i = 0; i < integer; i++) {
//     for (j = 0; j < integer; j++) {
//       str += "+";
//     }
//     if(i===integer-1){

//     }else{
//       str += "\n";
//     }
//   }
//   console.log(str);
//   return str;
// }

// let str =
//   "++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++";

// console.log(generateShape(8));

// function checkForFactor(base, factor) {
//   if (base % factor == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isValidWalk(walk) {
//   let n = 0;
//   let e = 0;

//   if (walk.length != 10) {
//     return false;
//   } else {
//     walk.forEach((letter) => {
//       if (letter === "n") {
//         n++;
//       } else if (letter === "s") {
//         n--;
//       } else if (letter === "e") {
//         e++;
//       } else if (letter === "w") {
//         e--;
//       }
//     });
//     if (n === 0 && e === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// console.log(isValidWalk(["n", "s", "w", "e", "n", "s", "n", "s", "n", "e"]));
// // ['n','s','n','s','n','s','n','s','n','s']

// function findUniq(arr) {
//   let a = arr.filter((x) => x === arr[0]);
//   if (a.length === 1) {
//     return a[0];
//   } else {
//     a = arr.filter((x) => x != arr[0]);
//     return a[0];
//   }
// }

// console.log(findUniq([3, 10, 3, 3, 3]));

// function wave(str) {
//   let len = str.length;
//   let arr = [];
//   for (i = 0; i < len; i++) {
//     if (str[i] != " ") {
//       arr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
//     }
//   }
//   return arr;
// }

// console.log(wave("codewars as"));

// Remove anchor from URL
// function removeUrlAnchor(url) {
//   let newStr = "";
//   let aa = url;

//   if (url.includes("#")) {
//     newStr = aa.split("");
//     newStr.splice(aa.indexOf("#"));
//     return newStr.join("");
//   }else{
//    return url
//   }

// }

// console.log(removeUrlAnchor("www.codewars.com/katas"));

// Strip Comments 4 kyu
// function solution(input, markers) {
//   let arr = [...input];
//   const [m1, m2] = markers;
//   arr.map((letter) => {
//     if (letter == m1) {
//       let indMark = arr.indexOf(m1);
//       let indEnd = arr.indexOf("\n", indMark);
//       console.log(indMark);
//       console.log(indEnd);
//       if (indEnd > 0) {
//         arr.splice(indMark - 1, indEnd - indMark + 1);
//       } else {
//         arr.splice(indMark - 1);
//       }
//     }
//     if (letter == m2) {
//       let indMark = arr.indexOf(m2);
//       let indEnd = arr.indexOf("\n", indMark);
//       if (indEnd > 0) {
//         arr.splice(indMark - 1, indEnd - indMark + 1);
//       } else {
//         arr.splice(indMark - 1);
//       }
//     }
//   });

//   return arr;
// }

// console.log(
//   solution("apples, plums % and bananas\npears\noranges !applesauce", [
//     "%",
//     "!",
//   ])
// );

// function solution2(input, markers) {
//   let lines = input.split("\n");

//   console.log(lines);
//   lines = lines.map((line) => {
//     let result = line;
//     markers.forEach((m) => {
//       if (line.includes(m)) {
//         console.log(line.split("").splice(0, line.indexOf(m)).join(""));
//         result = line.split("").splice(0, line.indexOf(m)).join("").trim();
//       }
//     });
//     return result;
//   });

//   return lines.join("\n");
// }

// console.log(
//   solution2("apples, plums % and bananas\npears\noranges !applesauce", [
//     "%",
//     "!",
//   ])
// );

function nextBigger(n) {
  let arr = [...n.toString()].map(Number);
  function perm(arr) {
    if (arr.length > 1) {
      let beg = arr[0];
      let arr1 = perm(arr.slice(1));
      let arr2 = [];
      for (let i = 0; i < arr1.length; i++)
        for (let j = 0; j <= arr1[0].length; j++) {
          arr2.push(arr1[i].slice(0, j).concat(beg, arr1[i].slice(j)));
        }
      return arr2;
    } else return [arr];
  }

  let nextNumb = perm(arr)
    .map((el) => +el.join(""))
    .sort((a, b) => a - b);
  let uniq = nextNumb.reduce((acc, item) => {
    if (acc.includes(item)) {
      return acc;
    }
    return [...acc, item];
  }, []);

  console.log(uniq);
  if (uniq[uniq.indexOf(n) + 1]) {
    return uniq[uniq.indexOf(n) + 1];
  } else {
    return -1;
  }
}

console.log(nextBigger(1005));

function nextBigger2(n) {
  function sortNumb(n) {
    const arr = [...n.toString()].map(Number);
    arr.sort((a, b) => b - a);
    return arr;
  }
  const maxNumb = +sortNumb(n).join("");
  for (let i = n + 1; i <= maxNumb; i++) {
    if (maxNumb === +sortNumb(i).join("")) {
      return i;
    }
  }
  return -1;
}

console.log(nextBigger2(1005));
// console.log(nextBigger2(499864322110000));
