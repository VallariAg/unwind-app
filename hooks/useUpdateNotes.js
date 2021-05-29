import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

// Input parameter should be a object { time: "", data: ""}
// "time" property SHOULD be YYYY-MM-DD. Example: "2021-05-24" 
// "data" property should be string
export default function useUpdateNotes() {
  const [ setNotes ] = useMutation(UPDATE_NOTES)

    return setNotes;
}

const UPDATE_NOTES = gql`
mutation updateNotes($time: timestamp, $data: String) {
  update_notes(where: {time: {_eq: $time}}, _set: {data: $data}) {
    returning {
      data
      time
    }
  }
}
`
