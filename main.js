/*
lesson => 124
    Set Data Type
 Syntax: new Set(Iterable)
    Object To Store Unique Values
    Cannot Access Elemnts By Index

 ProPerties:
    size

 Methods:
    add
    delete
    clear
    has
*/

let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set([1,1,1,2,3]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
let myUniqueData = new Set();

myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A");

console.log(myData);
console.log(myUniqueData);
console.log(myUniqueData.size); // عدد العناصر

console.log(myData[0]);
console.log(myUniqueData[0]); // undfined you can not reaach the elment inside direct

console.log(` Is Set Has => ${myUniqueData.has("a".toUpperCase())}`);

myUniqueData.delete(2);
console.log(myUniqueData.delete(1)); // if the element exist will give true if not will give false

console.log(myUniqueData.size);
console.log(myUniqueData);

myUniqueData.clear(); // deletd everything

console.log(myUniqueData.size);
console.log(myUniqueData);

/*
   Set vs weakSet
   "
      The WeakSet is Weak,
      meaning refrences to objects in a weakSet are held weakly.
      If no other refernces to an object stored in the weakSet exist,
      thoes objects can be garbage collected.
   "

Set => Can Store Any Data Values
WeekSet => Collection Of Objects Only

Set => Have Size Property
WeakSet => Collection of objects Only

Set => Have Keys, Values, Entries
WeakSet => Does Not Have Clear , Keys Values And Entries

Set => Can Use forEach
WeakSet => Cannot Use forEach

Usage : Store objects and remove them once they become inaccessible
*/

// Type Of Data

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet);

// Size
console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// Valyes + Keys [Alias For Values]
let iterator = mySet.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

// forEach
mySet.forEach((el) => console.log(el));

console.log("#".repeat(20));

// Type Of Data

let myWs = new WeakSet([{ A: 1, B: 2 }]);

console.log(myWs);

// Valyes + Keys [Alias For Values]
// let iter = myWs.keys();

// console.log(iter.next().value); // it is so simple it is not in its prototype it doesnt work with WeakSet

// WeakSet Use Cases

/*
lesson = 124
   Map Data Ttoe 
Syntax : new Map(Iterable With Key/Value)
   Map vs Object

      Map => Does Not Contain Key By Defalut
      Object => Has Defalut Keys

      Map => Key Can Be Anything [function , object ,Any Primitive Data Types]
      object => String Or Symbol

      Map => Ordered By Insertion
      Object => Not 100% Till Now

      Map => Get Item Buy size
      Object => Need To Do Manually

      Map => Can Be Directly Iterated
      Object => Not Directly And Need To Use Object.Keys() And So On

      Map => Better Performance When Add Or Remove Data
      Object => Low Performance When Comparing To Map
*/

let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

let myNewObject = {
  10: "Number",
  10: "string",
};

console.log(myNewObject[10]);

let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({ a: 1, b: 2 }, "Object");
myNewMap.set(function doSomething() {}, "Fnction");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("###");

console.log(myNewObject);
console.log(myNewMap);

/*
lesson => 126
   Map Data Type
Methods
   set
   get
   delete
   clear
   has

   Properties
      size
*/

let myMap2 = new Map([
  [10, "Number"],
  ["Name", "String"],
  [false, "boolean"],
]);

// myMap2.set(10,"Number");
// myMap2.set("Name" ,"String");

console.log(myMap2);

console.log(myMap2.get(10));
console.log(myMap2.get("Name"));
console.log(myMap2.get(false));

console.log("######");
console.log(myMap2.has(false));
console.log("######");

console.log(myMap2.size);

console.log(myMap2.delete("Name"));

console.log(myMap2.size);

myMap2.clear();

console.log(myMap2.size);

/*
lesson => 127
   Map vs WeakMap
   "
      WeakMap Allows Garbage Collector To do Its Task But Not Map.
   "
   Map     => Key Can Be Anything
   WeakMap => Key Can Be Object Only

*/

let mapUser = { theName: "Elzero" };

let myMap3 = new Map();

myMap3.set(mapUser, "Object Value");

mapUser = null; // Override The References

console.log(myMap3);

console.log("#".repeat(20));

let WeakMapUser = { theName: "Elzero" };

let myWeakMap3 = new WeakMap();

myWeakMap3.set(WeakMapUser, "object Value");

WeakMapUser = null; // Override The References

console.log(myWeakMap3);

/*
lesson = 128
   Array Methods
      Array form(Iterable , MapFunc, This)
         Variable
         String Numbers
         Set 
         Using The Map Function
         Arrow Function
         Shorten The Method = Use arguments
*/

console.log(Array.from("Osama"));
console.log(Array.from("12345", (n) => +n + +n)); // string has numbers or letters it is Iterable
console.log(Array.from(12345)); // not iterable

let myArray = [1, 1, 1, 2, 3, 4];

let mySet2 = new Set(myArray);

console.log(mySet2);

console.log(Array.from(mySet2));

console.log([...new Set(myArray)]);

function arrayfrom() {
  return Array.from(arguments);
}

console.log(arrayfrom("Osama", "Ahmed", "Sayed", 1, 2, 3));

/*
lesson = 129

   Array Methods
      Array.copyWithin(Target , Start => Optional , End => Optional)
   "copy part of an array to another location in the same array"
      any negative value will count from the end
   Target
         Index To Copy Part To
         If At Or Greater Than Array Length Nothing will Be copied 
   Start
      Index To Start Coping From
      If Omited = Start From Index 0
   End
      Index To End Copying form
      NOt including end
      If Omited + reah The end
*/

let myArray2 = [10, 20, 30, 40, 50, "A", "B"];

// myArray2.copyWithin(4, 6); //  [10, 20, 30, 40, "B", "A", "B"]

// myArray2.copyWithin(4, -1); //  [10, 20, 30, 40, "B", "A", "B"]

// myArray2.copyWithin(1 , -2 ); // [10, "A", "B", 40, 50, "A", "B"]

myArray2.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]

console.log(myArray2);

/*
lesson => 130
   Array Methods
      Array.some(CallbackFunc(Elemnet , Index , Array),This Argument)
         CallBackFun => Function to run on every element on the given array
            Element => The Current Element To process
            Index => Index of current elment
            array => The current array working with
      This argument => value to use as this when executing callbackFunc

   Using
      Check if element exists in array
      check if number in range
*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let myNumber = 10;

// let check = nums.some(function (e) {
//   console.log("Test");
//   return e > 5;
// });

let check = nums.some(function (e) {
  console.log(this);
  return e > this;
}, myNumber);

// let check = nums.some((e) => e > 5);

console.log(check);

function checkValues(arr, val) {
  return arr.some(function (e) {
    return e === val;
  });
}

console.log(checkValues(nums, 20));
console.log(checkValues(nums, 5));

let range = {
  min: 10,
  max: 20,
};

let checkNumberInRange = nums.some(function (e) {
  // console.log(this.min);
  // console.log(this.max);
  return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberInRange);

/*
lesson = 131
   Array Methods
      Array.every(CollbackFunction(Elment, Index , Array) , This Argument)
         CallbackFunc => Function To Run On Every Element On The Given Array
            Element => The Current Element To Process
            Index => Index Of Current Element
            Array => The Current Array Wrking With 
      This Argument => Value To Use As This When Executing Callbackfunc
*/

// some = if one element has the condtion some will return true
// every = opposite of some it must all of elment must have the condition to return true if only one elemnt dosen not have the condtion it will return false

const locations = {
  20: "Place 1",
  30: "Place 2",
  10: "Place 3",
  40: "place 4",
};

let mainLocation = 15;

let locationsArray = Object.keys(locations);

console.log(locationsArray);

// forEach: Use it when you want to execute a function on each element of an array without returning a new array.
// map: Use it when you want to transform each element of an array and get a new array with the transformed elements.

let locationsArrayNumbers = locationsArray.map(function (n) {
  return +n;
});

console.log(locationsArrayNumbers);

let check2 = locationsArrayNumbers.every(function (e) {
  return e > this;
}, mainLocation);

console.log(check2);

/*
lesson = 132
   Spread Operator => ...Iterable
   "Allow Iterable To Expand In Place"
*/

// Sread With String => Expand String

console.log("osama");
console.log(..."osama");
console.log([..."osama"]);

// Concatenate Arrays

let myArray3 = [1, 2, 3];
let myArray4 = [4, 5, 6];

let allArrays = [...myArray3, ...myArray4];
console.log(allArrays);

// Copy Array

let copiedArray3 = [...myArray3];
console.log(copiedArray3);

// Push Inside Array

let allFriends = ["Osama", "Ahamed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

allFriends.push(...thisYearFriends);

console.log(allFriends);

// Use With Math Object
let myNums = [10, 20, -100, 1000, 500];
console.log(Math.max(...myNums));

// Spread With Objects => Merge Objects
let objOne = {
  a: 1,
  b: 2,
};
let objTwo = {
  c: 3,
  d: 4,
};

console.log({ ...objOne, ...objTwo , e:5});

/*
lesson = 133
challange i will solve it in assignment file its already there 🙄
*/
