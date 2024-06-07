import List  from './List.jsx'
import { useState } from "react"
import { useParams } from "react-router-dom"


const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice,setMaxPrice] = useState(1000)
  const [sort,setSort] = useState(null)
  
  return (
    <div className="flex px-5 ">
      <div className="flex-1 sticky p-8 h-full">
        <div className="fùlex-1 sticky p-8 h-full">
          <h2 className='justify-center flex items-center font-bold uppercase text-xl'>Product Categories</h2> 
          <div className="my-2 flex items-center mb-4">
            <input type="checkbox" placeholder="search..." id="1" value={1} className='w-4 h-4 mx-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" placeholder="search..." id="2" value={2} className='w-4 h-4 mx-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
            <label htmlFor="1">Skirts</label>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" placeholder="search..." id="3" value={3} className='w-4 h-4 mx-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
            <label htmlFor="1">Coats</label>
          </div>
        </div>
        <div className="filterItem">
          <h2 className='font-bold uppercase text-xl'>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")}/>
            <label htmlFor="asc">(Lowest First)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" onChange={e=>setSort("desc")} />
            <label htmlFor="desc">(Highest First)</label>
          </div>
        </div>

      </div>
      <div className="flex-3">
        <img  src="https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="w-screen h-72 object-cover mb-12" />
         <List catId={catId} maxPrice={maxPrice} sort = {sort}/>
        
      </div>
    </div>
  )
}

export default Products