import React, { useState, useEffect } from 'react'

function useFetch(url) {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [err, setError] = useState(null)

useEffect(() => {
  // setTimeout(() =>{
    fetch(url)
  .then(response => {
    if(!response.ok) {
      throw Error('Could not fetch data from that resource')

    }
    return response.json()
  })
  .then(data => {
    setData(data)
    setIsLoading(false)
    setError(null)
  })
  .catch(err => {
    setError(err.message)
    setIsLoading(false)
  })
  // }, 4000)
}, [url])

return { data, isLoading, err }


}

export default useFetch