import React from 'react'

function Footer() {
  return (
    <div> 
    <div className=' flex flex-col sm:flex-row border-y rounded-3  gap-5 justify-between px-10 py-5 mt-32 '> 
      <div> 
         <ul> <h2 className='capitalize font-bold text-white p-2'> navigation</h2>
            <li className='capitalize  text-gray-400 hover:text-white duration-150 p-2   ' > about</li>
            <li className='capitalize  text-gray-400 hover:text-white duration-150 p-2   ' > projects</li>
            <li className='capitalize  text-gray-400 hover:text-white duration-150 p-2   ' > services</li>
            <li className='capitalize  text-gray-400 hover:text-white duration-150 p-2   ' > blog</li>
            <li className='capitalize  text-gray-400 hover:text-white duration-150 p-2   ' > contact</li>
              </ul>
        </div>

        <div className='flex flex-col justify-between'> 
         <ul> <h2 className='capitalize font-bold text-white p-2'> follow me</h2>
            <li className='capitalize hover:text-white duration-150 text-gray-400 p-2   ' > linkedin</li>
           
              </ul>

              <ul> <h2 className='capitalize font-bold text-white p-2'> sustainability</h2>
                 <li className='capitalize  text-gray-400 hover:text-white duration-150 p-2   ' > View my Ecologi forest</li>
                 <li className='capitalize  text-gray-400 hover:text-white duration-150 p-2   ' > View my Beacon score</li>
           
              </ul>
        </div>

        <div className='flex flex-col justify-between'> 
         <ul> <h2 className='capitalize font-bold text-white p-2'> follow me</h2>
            <li className='capitalize  text-gray-400 hover:text-white duration-150 p-2   ' > linkedin</li>
           
              </ul>

              <ul> <h2 className='capitalize font-bold text-white p-2'> sustainability</h2>
                 <li className='capitalize  text-gray-400 hover:text-white duration-150 p-2   ' > View my Ecologi forest</li>
                 <li className='capitalize  text-gray-400 hover:text-white duration-150 p-2   ' > View my Beacon score</li>
           
              </ul>
        </div>

        </div>
        <div className='block sm:flex sm:justify-center ml-5 md:ml-0  py-3  '> 
          <h4 className='capitalize text-white px-2 ' >© 2024 abhishek verma </h4>
          <div className='flex'> <h4 className='capitalize px-2 text-white '> we belive in re-newable energy </h4>
           <div className='w-5 mx-2  text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.0007 1.20825 18.3195 3.68108 20.7923 4.99992 18.3195 6.31876 17.0007 8.79159 15.6818 6.31876 13.209 4.99992 15.6818 3.68108 17.0007 1.20825ZM8.00065 4.33325 10.6673 9.33325 15.6673 11.9999 10.6673 14.6666 8.00065 19.6666 5.33398 14.6666.333984 11.9999 5.33398 9.33325 8.00065 4.33325ZM19.6673 16.3333 18.0007 13.2083 16.334 16.3333 13.209 17.9999 16.334 19.6666 18.0007 22.7916 19.6673 19.6666 22.7923 17.9999 19.6673 16.3333Z"></path>
            </svg> 
              </div>
          </div> 
          
        </div>
    </div>
  )
}

export default Footer