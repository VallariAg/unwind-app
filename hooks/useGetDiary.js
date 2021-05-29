import React, { useState, useEffect } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';

// Gets notes by date
// Input format of "date" parameter SHOULD be YYYY-MM-DD. Example: "2021-05-24" 
export default function useGetDiary(date) {
    const { loading, error, data } = useQuery(GET_DIARY, {
        variables: { 
            date: date
        },
    });

    if (loading) return {};
    if (error) return {};


    // no record for that date, create record
    if (data.diaries.length === 0) {
      return "none";
      // const [makeDiary, {_}] = useMutation(CREATE_RECORD);
      // makeDiary({variables: {date: date}})
    }
    
    return (data.diaries[0])
}


const GET_DIARY = gql`
query GET_DIARY($date: date) {
  diaries(where: {date: {_eq: $date}}) {
    date
    dreams
    gratitude
    physicalActivity
    sleepQuality
    sleepQuantity
    timeToBed
    timeWokeUp
    timeWokeUpBtwSleep
    water
  }
}
`

const CREATE_RECORD = gql`
mutation CREATE_RECORD($date: date) {
  insert_diaries(objects: {date: $date}) {
    returning {
      date
      dreams
      gratitude
      physicalActivity
      sleepQuality
      sleepQuantity
      timeToBed
      timeWokeUp
      timeWokeUpBtwSleep
      water
    }
  }
}
`
