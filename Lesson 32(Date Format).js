//ISO DATES
a=new Date()
console.log(a)
b=new Date("2015-03-25")
console.log(b)
c=new Date("2015")
console.log(c)
d=new Date("2024-11-19T12:43:30.002Z")
console.log(d)

//Time Zone
f=new Date("03/25/2015")//short date
console.log(f)
g=new Date("2024-3-25")
console.log(g)
h=new Date("2024/03/25")
console.log(h)

//javaScript Long date
j=new Date("Mar 25 2015")
console.log(j)
k=new Date("January 25 2017")
console.log(k)

//Data Input
msec=Date.parse("March 21,2020")//convert it to milliseconds
console.log(msec)