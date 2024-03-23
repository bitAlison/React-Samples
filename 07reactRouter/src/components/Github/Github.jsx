import React from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()

  // const [data, setData] = React.useState([])
  // useEffect(() => {
  //     fetch('https://api.github.com/users/hiteshchoudhary')
  //     .then((response) => response.json())
  //     .then(data => {
  //         console.log(data)
  //         setData(data)
  //     })
  // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex'>
      <img src={data.avatar_url} width={300} alt="" />
      <div className='w-full inline-block px-1 py-1'>
        <p className='flex'>Name: {data.name}</p>
        <p className='flex'>Github: <a href={data.html_url} target='_blank' className='ms-1.5'> {data.html_url}</a></p>
      </div>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/bitAlison')
  return response.json()
}