var d=new Date()//displays current date and time
console.log(d)

//9 ways  to create a new date object
// firstdate=new Date()
// secondDate= new Date(date,string)
// thirdDate=new Date(year,month)
// fourthDate=new Date(year,month,day)
// fifthDate=new Date(year,month,day,hours)
// sixthDate=new Date(year,month,day,hours,minutes)
// seventhDate=new Date(year,month,day,hours,minutes,seconds)
// seventhDate=new Date(year,month,day,hours,minutes,seconds,ms)
// EightDate=new Date(milliseconds)

b=new Date("October 13,2014 11:13:00")
console.log(b)

f=new Date(2018)
console.log(f)

//creating a specified date
g= new Date(2018,11,24,10,33,30,0)

console.log(g)



//year,month,day,hour,minutes,seconds
//JavaScript count months from Zero to Eleven
//January=0 and December=11

birthday=new Date(2006,2,2)
console.log(birthday)

//previous centuries
centuries=new Date(99,11,24)
console.log(centuries)
past=new Date(99,11,24)
console.log(past)

//Date() method
console.log(g.toString())//convert to a string
console.log(g.toDateString())//convert date to a more readable format
console.log(g.toUTCString())//convert date to to a string using the UTC standards
console.log(g.toISOString())//convert date to to a string using the ISO standards