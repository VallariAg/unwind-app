import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

// Gets notes by date
// Input format of "date" parameter SHOULD be YYYY-MM-DD. Example: "2021-05-24" 
export default function useGetNotes(date) {
    const { loading, error, data } = useQuery(GET_NOTES_BYDATE, {
        variables: { 
            dategt: date + "T00:00:00.0000",
            datelt: date + "T23:59:00.0000"},
    });

    if (loading) return [];
    if (error) return [];

    return (data.notes)
}

const GET_NOTES_BYDATE = gql`
    query getNotes($dategt: timestamp, $datelt: timestamp) {
        notes(where: {time: {_lt: $datelt, _gt: $dategt}}) {
          data
          time
          noteType
        }
      }
`
