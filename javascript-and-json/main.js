const array = [
  {
   "isbn": "9781852485891",
   "title": "Apple",
   "author": "John",
  },
  {
   "isbn": "9788965168948",
   "title": "Orange",
   "author": "Maria",
  },
  {
   "isbn": "9786014404040",
   "title": "Peach",
   "author": "Ted",
  }
]

console.log(array)
console.log('typeof:', typeof array)

console.log(JSON.stringify(array))
console.log('typeof:', typeof JSON.stringify(array))

const jstring = '{"id": 777238, "name": "Deon"}';
console.log(jstring);
console.log('typeof:', typeof jstring);

const jobject = JSON.parse(jstring);
console.log(jobject)
console.log('typeof:', typeof jobject)
