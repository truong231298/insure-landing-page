import React from 'react'
import iconsnappy from "/images/icon-snappy-process.svg"
import iconAfford from "/images/icon-affordable-prices.svg"
import iconPeople from "/images/icon-people-first.svg"

const Body = () => {
    const Body = [
        {icon: iconsnappy ,name: "Snappy Process", content: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms."},
        {icon: iconAfford ,name: "Affordable Prices", content: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."},
        {icon: iconPeople ,name: "People First", content: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it."},
    ]

  return (
    <div className='flex flex-col justify-center items-center sm:justify-start sm:items-start gap-4'>
        <hr className='border-2 w-32 border-gray-300 mb-4'/>
        <h1 className='text-4xl font-semibold text-VeryDarkViolet mb-8'>We're different</h1>
        <div className='flex flex-col sm:flex-row justify-center sm:justify-start gap-2'>
            {Body.map((infor, index) =>(
                <div className='flex flex-col gap-2 items-center sm:items-start'>
                    <img src={infor.icon} alt="" className='w-16'/>
                    <h1 className='font-bold text-xl'>{infor.name}</h1>
                    <p className='text-gray-500'>{infor.content}</p>
                </div>
            ))}
        </div>
        <div className='bg-DarkViolet flex flex-col sm:flex-row text-center sm:justify-between items-center w-full p-8 sm:bg-bg-bodydesktop bg-bg-bodymobile bg-no-repeat bg-right-top'>
            <h1 className='font-semibold text-4xl text-white mb-4'>Find out more about how we work</h1>
            <button className='text-white px-2 border-2'>how we work</button>
        </div>
    </div>
  )
}

export default Body