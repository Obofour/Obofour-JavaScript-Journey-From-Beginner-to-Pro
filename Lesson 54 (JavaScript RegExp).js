//Regular expression is a sequence of character that form a s earch pattern
//The search pattern can be used for text search and text replace operation
let text="Visit W3Schools!"
console.log(text.search("W3Schools!"))
console.log(text.search(/w3Schools!/i))

//Using Replace
let Text="Visit Microsoft!"
console.log(Text.replace(/Microsoft!/,"Github"))

//Regular Expression modifier

//i=perform case-insensitve matching
//g=Perforfom a global match(find all)

//m=Perform multi line matching
let myText="\nIs th\nis it?"
let result=myText.match(/^is/m)
console.log(result)

//d=perform a start an matching
let myString="aaaabb"
let result1=myString.match(/(aa)(bb)/d)
console.log(result1)

//Regular Expression Patterns
//[abc]=find any of the characters characters between the brackets
let question="Is this all there is ? "
console.log(question.match(/[h]/g))


//[0-9] Find any of the digits between te bracket
let numberString="123456789"
console.log(numberString.match(/[1-4]/g))

//(x|y) Find any of the alternatives seperated with |
let colors="red,green,re,blue,yellow,gr"
console.log(colors.match(/(red|green)/g))

//Metacharacters are characters with special meaning
// \d find a digit
let Percentage="Give 100%!"
console.log(Percentage.match(/\d/g))

// \s=find whitespace character
let Findwhitespace="Is this all there is ?"
console.log(Findwhitespace.match(/\s/g))

// \b Find a match at the beginning of a word like this: \bWORD or the end of a word like this: WORD\b
let message= "HELLO, LOOK AT YOU  "
console.log(message.match(/\bLO/ig))
console.log(message.match(/LO\b/ig))

//uxxxx Find the Unicode character specified by te the hexadecimal number xxxx
let greetings="Visit W3School,Hello World! "
console.log(greetings.match(/\u0057/g))

//Quantifier define define quantities
//n+ Matches any string that contain at least one n
let Hello="Hellooo World! Hello W3Schools!"
console.log(Hello.match(/o+/g))

//n* Matches any string that contain zero or more of n
//n? Matches any string that contain or one occurence of n

//Using test()
//it searches a string for a pattern and return true or false depending on the result.
//The following examples searches a string for the character "e"
const pattern=/e/
console.log(pattern.test("The best thing in the life are free!"))
//or
console.log(/e/.test("The best thing in the life are free!"))

//Using exec()
//the exec() method is a RegExp expression method
//It searches a string for a specified patern and retuen the found text as an object
//if no match is found,if returns an empty object
//The following example searches a string for the character "e"
const Obj=/e/.exec("The best thing in the life are free!")
console.log("Found "+Obj[0]+" in position "+Obj.index+" in the text: "+Obj.input)

