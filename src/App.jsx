import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'

import { useState, useEffect } from 'react'
import './App.scss'

export default function App({_days = 0, _hours = 0, _minutes = 0, _seconds = 0}) {
  
  const [days, setDays] = useState(_days)
  const [hours, setHours] = useState(_hours)
  const [minutes, setMinutes] = useState(_minutes)
  const [seconds, setSeconds] = useState(_seconds)
  const [daydeg, setDaydeg] = useState(0)
  const [hourdeg, setHourdeg] = useState(0)
  const [minutedeg, setMinutedeg] = useState(0)
  const [seconddeg, setSeconddeg] = useState(0)

  useEffect(() => {
    let interval = setInterval(() => {
      if(days === 0 && hours === 0 && minutes === 0 && seconds === 0) return
      if(seconds === 0) {
        setSeconds(59)
        setSeconddeg(seconddeg + 180)
        document.getElementsByClassName('card_second_sup')[0].style.setProperty('--deg', seconddeg)
        seconddeg % 180 === 0 && seconddeg % 360 !== 0 
          ? document.getElementsByClassName('card_second_sup')[0].children[0].style.transform = 'rotateX(180deg)' 
          : document.getElementsByClassName('card_second_sup')[0].children[0].style.transform = 'rotateX(0deg)'
        if(minutes === 0){
          setMinutes(59)
          setMinutedeg(minutedeg + 180)
          document.getElementsByClassName('card_minute_sup')[0].style.setProperty('--deg', minutedeg)
          minutedeg % 180 === 0 && minutedeg % 360 !== 0 
            ? document.getElementsByClassName('card_minute_sup')[0].children[0].style.transform = 'rotateX(180deg)' 
            : document.getElementsByClassName('card_minute_sup')[0].children[0].style.transform = 'rotateX(0deg)'
          if(hours === 0){
            setHours(23)
            setHourdeg(hourdeg + 180)
            document.getElementsByClassName('card_hour_sup')[0].style.setProperty('--deg', hourdeg)
            hourdeg % 180 === 0 && hourdeg % 360 !== 0 
              ? document.getElementsByClassName('card_hour_sup')[0].children[0].style.transform = 'rotateX(180deg)' 
              : document.getElementsByClassName('card_hour_sup')[0].children[0].style.transform = 'rotateX(0deg)'
            if(days !== 0) {
              setDays(days - 1)
              setDaydeg(daydeg + 180)
              document.getElementsByClassName('card_day_sup')[0].style.setProperty('--deg', daydeg)
              daydeg % 180 === 0 && daydeg % 360 !== 0 
                ? document.getElementsByClassName('card_day_sup')[0].children[0].style.transform = 'rotateX(180deg)' 
                : document.getElementsByClassName('card_day_sup')[0].children[0].style.transform = 'rotateX(0deg)'
            }
          }else {
            setHours(hours - 1)
            setHourdeg(hourdeg + 180)
            document.getElementsByClassName('card_hour_sup')[0].style.setProperty('--deg', hourdeg)
            hourdeg % 180 === 0 && hourdeg % 360 !== 0 
              ? document.getElementsByClassName('card_hour_sup')[0].children[0].style.transform = 'rotateX(180deg)' 
              : document.getElementsByClassName('card_hour_sup')[0].children[0].style.transform = 'rotateX(0deg)'
          }
        }else {
          setMinutes(minutes - 1)
          setMinutedeg(minutedeg + 180)
          document.getElementsByClassName('card_minute_sup')[0].style.setProperty('--deg', minutedeg)
          minutedeg % 180 === 0 && minutedeg % 360 !== 0 
            ? document.getElementsByClassName('card_minute_sup')[0].children[0].style.transform = 'rotateX(180deg)' 
            : document.getElementsByClassName('card_minute_sup')[0].children[0].style.transform = 'rotateX(0deg)'
        }
      }else{
        setSeconds(seconds - 1)
        setSeconddeg(seconddeg + 180)
        document.getElementsByClassName('card_second_sup')[0].style.setProperty('--deg', seconddeg)
        seconddeg % 180 === 0 && seconddeg % 360 !== 0 
          ? document.getElementsByClassName('card_second_sup')[0].children[0].style.transform = 'rotateX(180deg)' 
          : document.getElementsByClassName('card_second_sup')[0].children[0].style.transform = 'rotateX(0deg)'
      }
    }, 1000);

    return () => clearInterval(interval)
  }, [seconds, setSeconds, minutes, setMinutes, hours, setHours, days, setDays, daydeg, setDaydeg, hourdeg, setHourdeg, minutedeg, setMinutedeg, seconddeg, setSeconddeg]);

  return (
    <>
      <div className='stars'></div>
      <div className='countdown-container'>
        <div className='header'>WE'RE LAUNCHING SOON</div>
        <div className='countdown-container__inner'>
          <div className='days'>
            <div className='card_day'>
              <div className='card_day_sup'>
                <span>{days < 10 ? '0' + days : days}</span>
              </div>
              <div className='card_day_inf'>
                <span>{days < 10 ? '0' + days : days}</span>
              </div>
            </div>
            <div className='card_text'>DAYS</div>
          </div>
          <div className='hours'>
            <div className='card_hour'>
              <div className='card_hour_sup'>
                <span>{hours < 10 ? '0' + hours : hours}</span>
              </div>
              <div className='card_hour_inf'>
                <span>{hours < 10 ? '0' + hours : hours}</span>
              </div>
            </div>
            <div className='card_text'>HOURS</div>
          </div>
          <div className='minutes'>
            <div className='card_minute'>
              <div className='card_minute_sup'>
                <span>{minutes < 10 ? '0' + minutes : minutes}</span>
              </div>
              <div className='card_minute_inf'>
                <span>{minutes < 10 ? '0' + minutes : minutes}</span>
              </div>
            </div>
            <div className='card_text'>MINUTES</div>
          </div>
          <div className='seconds'>
            <div className='card_second'>
              <div className='card_second_sup'>
                <span>{seconds < 10 ? '0' + seconds : seconds}</span>
              </div>
              <div className='card_second_inf'>
                <span>{seconds < 10 ? '0' + seconds : seconds}</span>
              </div>
            </div>
            <div className='card_text'>SECONDS</div>
          </div>
        </div>
      </div>
      <div className='hills'>
        <div className='footer'>
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faSquareFacebook}/>
          </a>
          <a href="https://pinterest.com">
            <FontAwesomeIcon icon={faPinterest}/>
          </a>
          <a href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
        </div>
      </div>
    </>
  )
}