import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';


// Input format of "date" parameter is String. 
export default function usePostNotes(data) {
    const { loading, error, data } = useQuery(POST_NOTES,  {
        variables: { 
            data: data
    }});

    if (loading) return [];
    if (error) return [];

    return (data.notes)
}

const POST_NOTES = gql`
mutation MyQuery($data: String) {
  insert_notes(objects: {data: $data}) {
    returning {
      data
      time
    }
  
}

`
