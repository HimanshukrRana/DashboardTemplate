"use client"
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        BTC: 1000,
        amt: 2400,
    },
    {
        name: 'Tue',
        BTC: 3000,
        amt: 2210,
    },
    {
        name: 'Wed',
        BTC: 4000,
        amt: 2290,
    },
    {
        name: 'Thr',
        BTC: 2780,
        amt: 5000,
    },
    {
        name: 'Fri',
        BTC: 6890,
        amt: 2181,
    },
    {
        name: 'sat',
        BTC: 7390,
        amt: 2500,
    }
];


function MarketOverview() {
    return (
        <div className="bg-[#1A1E1C] w-[1000px] rounded-md">
            <div className="p-2 border-b border-[#88898a] flex ">
                <h6 className="text-white">Market Overview</h6>
            </div>
            <div className='p-4 flex justify-center'>

                <LineChart
                    width={500}
                    height={280}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#1B9A59"
                        activeDot={{ r: 8 }}
                    /> */}
                    <Line type="monotone" dataKey="BTC" stroke="#1B9A59" />
                </LineChart>
            </div>
            <div className='p-2 flex justify-between border-t border-[#88898a]'>
                <p className='text-white '>
                    Get in depth charts in Trade
                </p>
                <button className="p-1 bg-[#1B9A59] text-white rounded-sm">
                    Trade
                </button>
            </div>
        </div>
    )
}

export default MarketOverview