"use client"
import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


function Walletbalance() {
    return (
        <div className="bg-[#1A1E1C] w-[550px] rounded-md">
            <div className="p-2 border-b border-[#88898a] flex justify-center">
                <h6 className="text-white">Wallet balance</h6>
            </div>
            <div className='p-4 flex justify-center'>
                <PieChart width={180} height={280}>
                    <Pie
                        data={data}

                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        cornerRadius={15}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className='p-2 flex justify-center border-t border-[#88898a]'>
                <button className="p-1 bg-[#1B9A59] text-white rounded-sm">
                    Manage Wallet
                </button>
            </div>
        </div>
    )
}

export default Walletbalance