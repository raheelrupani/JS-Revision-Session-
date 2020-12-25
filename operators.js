// operators        + , - , / ,* , ** ,   ()  , ++ , -- , += , -= *= , /= 

// Unary Operators = Pre Increment , Post Increment



a = 0
b = 0
c = 0

// d = a++ + ++a + b++ + ++b


b = a++ // Post Increment 
console.log(b,a) // 0 , 1

b = ++a  // Pre Increment 
console.log(b, a) // 2 , 2


b = ++a / ++a * a++ + a++ 

// 3      4     4     5 
console.log(b, a)

console.log(1+1)
console.log('a'+'b')

console.log(1+'b')
console.log(1+1+3+'a')

console.log('a'+1+1+3)
console.log( 1 + true + false + 1)
console.log('a'+true+1)
console.log(true + 1+ 'a')
console.log(true+'a'+1)
console.log(false+'a'+1)
console.log(false+true+'a'+1)

