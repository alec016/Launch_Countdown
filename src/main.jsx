import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

const FILE = 'data.json'
let days = 0, hours, minutes, seconds;
let day, month, year;

async function getValues(type){
  await fetch(`/${FILE}`).then(res => res.json()).then(res => {
    if(type === "properties"){
      days = res[type].days
      hours = res[type].hours
      minutes = res[type].minutes
      seconds = res[type].seconds
    }
    if(type === "date"){
      day = res[type].day
      month = res[type].month
      year = res[type].year
    }
    
    if(day && month && year){
      let date = new Date(year, month - 1, day)
      let now = new Date()
      let diff = new Date(date - now)
      if(diff.getFullYear() < 1970) return
      let y = diff.getFullYear() - 1970
      switch(diff.getMonth() + 1){
        case 12:
          days += 30
        case 11:
          days += 31
        case 10:
          days += 30
        case 9:
          days += 31
        case 8:
          days += 31
        case 7:
          days += 30
        case 6:
          days += 31
        case 5:
          days += 30
        case 4:
          days += 31
        case 3:
          if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) days += 29
          else days += 28
        case 2:
          days += 31
        case 1:
          days += 365 * y + diff.getDate()
      }
      hours = diff.getHours()
      minutes = diff.getMinutes()
      seconds = diff.getSeconds()
    }
  })
}
/**
 * ! AVAILABLE TYPES 
 * TODO: "date" "properties"
 * ? See more in data.json
 */
await getValues("date")

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App _days={days} _hours={hours} _minutes={minutes} _seconds={seconds}/>
  </React.StrictMode>
)
