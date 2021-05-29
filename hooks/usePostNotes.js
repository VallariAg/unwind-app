import React, { useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';


// Input format of "date" parameter is String. 
export default function usePostNotes() {
  const [ setNote ] = useMutation(POST_NOTES)

  return setNote;
}

const POST_NOTES = gql`
mutation POST_NOTES($data: String, $noteType: String) {
  insert_notes(objects: {data: $data, noteType: $noteType}) {
    returning {
      data
      time
      noteType
    } 
}
`
