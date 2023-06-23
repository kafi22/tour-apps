import { useEffect, useState } from "react"
import Tours from "./Component/Tours"

import Loading from "./Component/Loading"

const url = `https://course-api.com/react-tours-project`

const App = () => {

  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const [data, setData] = useState([])

  const fetchData = async () => {

    try {
      const res = await fetch (url)
      if(!res.ok) {
        setError(true)
        setLoading(false)
      }
      const data = await res.json()
      setData(data)
      setLoading(false)
    } catch (err) {
      setError(true)
      setLoading(false)

    }

  }


  useEffect(() => {
    fetchData()
  } ,[])


  const removeItem = (id) => {
    const filterItem = data.filter(item => item.id !== id)
    setData(filterItem)
  }

  if(isLoading) {
    return (
      <div className="container mx-auto py-5">
        <Loading />
      </div>
    ) 
  }

  if (isError) {
    return <div className="container mx-auto py-12">
      <h1 className=" text-center text-2xl -tracking-wide">There is an Error</h1>
    </div>
  }


  return (
    <div className=" container mx-auto max-w-[1092px] p-2 grid place-content-center min-h-screen">
      {data.length > 0 && (
      <h1 className=" text-3xl text-stone-600  leading-6 tracking-wider mb-4 border-b-4 border-[#10B981] text-center w-40 mx-auto py-3 rounded-lg">Our tours</h1>
      )}
      {data.length < 1 ? (<button onClick={fetchData} className=" bg-slate-700 text-white py-2 px-4 w-[150px] flex justify-center items-center text-center ">Reset All</button>) : ''}
      <Tours data={data} removeItem={removeItem} />
    </div>
  )
}

export default App;