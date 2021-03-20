// const averageTempJan = 31.2
// const averageTempFeb = 32.4
// const averageTempMar = 40.2
// const averageTempAbr = 52.1
// const averageTempMay = 60.2

// console.log(averageTempJan)

const averageTemp = []
averageTemp[0] = 34.9
averageTemp[1] = 31.9
averageTemp[2] = 28.3
averageTemp[3] = 32.2
averageTemp[4] = 30.5

for(let item of averageTemp) {
    console.log(item);
}

let daysOfWeek = new Array()
daysOfWeek = new Array(7)
daysOfWeek = new Array('Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday')
console.log(daysOfWeek.length)

for (const item of daysOfWeek) {
    console.log(item);
    
}