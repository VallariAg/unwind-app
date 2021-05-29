import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';


export default function useSetDiary() {
  const [ setGratitude ] = useMutation(SET_GRATITUDE)
  const [ setWater ] = useMutation(SET_WATER)
  const [ setSleep ] = useMutation(SET_SLEEP)
  const [ setPhysical ] = useMutation(SET_PHYSICAL)
  const [ setDreams ] = useMutation(SET_DREAMS)
  
  return { setGratitude, setWater, setSleep, setPhysical, setDreams }
}

const SET_GRATITUDE = gql`
mutation SET_GRATITUDE($date: date, $gratitude: String) {
    update_diaries(where: {date: {_eq: $date}}, _set: {gratitude: $gratitude}) {
      returning {
        date
        gratitude
      }
    }
  }
` 
const SET_DREAMS = gql`
mutation SET_DREAMS($date: date, $dreams: String) {
    update_diaries(where: {date: {_eq: $date}}, _set: {dreams: $dreams}) {
      returning {
        date
        dreams
      }
    }
  }
` 
const SET_PHYSICAL = gql`
mutation MyQuery($date: date, $workHrs: Int) {
  update_diaries(where: {date: {_eq: $date}}, _set: {physicalActivity: $workHrs}) {
    returning {
      physicalActivity
      date
    }
  }
}
` 

const SET_SLEEP = gql`
mutation SET_SLEEP($date: date, $sleepQuality: Int, $sleepQuantity: Int, $timeToBed: timetz, $timeWokeUp: timetz, $timeWokeUpBtwSleep: Int) {
  update_diaries(where: {date: {_eq: $date}}, _set: {sleepQuality: $sleepQuality, sleepQuantity: $sleepQuantity, timeToBed: $timeToBed, timeWokeUp: $timeWokeUp, timeWokeUpBtwSleep: $timeWokeUpBtwSleep}) {
    returning {
      sleepQuality
      sleepQuantity
      date
      timeToBed
      timeWokeUp
      timeWokeUpBtwSleep
      water
    }
  }
}
` 

const SET_WATER = gql`
mutation SET_WATER($date: date, $water: Int) {
  update_diaries(where: {date: {_eq: $date}}, _set: {water: $water}) {
    returning {
      date
      water
    }
  }
}
` 

