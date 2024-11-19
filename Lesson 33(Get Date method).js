a=new Date("2021-03-25")
console.log(a.getFullYear())//return the year ot the date as four digit
console.log(a.getMonth())//returns the month

months=["January","Febuary","March","June","July","August","September","October","November","December"];
d=new Date("2021-03-25")
months=months[d.getMonth()]
console.log(months)

//getDate()
m=new Date("2021-03-25")
n=new Date()
console.log(m.getDate())
console.log(n.getDate())

//getHours()
s=new Date()
console.log(s.getHours())

//getMinutes
g=new Date()
console.log(g.getMinutes())

//getSeconds
h=new Date()
console.log(h.getSeconds())

//getMilliseconds
x=new Date()
console.log(x.getMilliseconds())
console.log(x.getDay())

//getDay
Days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
b=new Date()
console.log(Days[b.getDay()])

//getTime
q=new Date()
console.log(q.getTime())

//Date.now()
//calculate the number of year since 1970/01/01
const minute=1000*60
const hour=minute*60
const day=hour*60
const year=day*365
years=Math.round(Date.now()/year)
console.log(years)

//getTimezoneOffset()method returns the difference(in minutes) between local time time an UTC time