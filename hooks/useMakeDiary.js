import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';



export default function useCreateDiary(date) {
    console.log("creating record..")
    const { loading, error, data } = useQuery(CREATE_RECORD, {
      variables: { 
          date: date
        },
      });
      
    if (loading) return {};
    if (error) return {};
  
    console.log("record created")
    return data.diaries[0];
  }


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
  