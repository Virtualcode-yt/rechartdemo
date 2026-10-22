import React from 'react'
import LineChart from './components/LineChart';
import AreaChart from './components/AreaChart';
import BarChart from './components/BarChart';
import RadarChart from './components/RadarChart';
import PieChart from './components/PieChart';

const monthlyData = [
  { month: "Jan", revenue: 12000, expenses: 7000 },
  { month: "Feb", revenue: 18000, expenses: 9000 },
  { month: "Mar", revenue: 15000, expenses: 8000 },
  { month: "Apr", revenue: 24000, expenses: 12000 },
  { month: "May", revenue: 21000, expenses: 11000 },
  { month: "Jun", revenue: 32000, expenses: 15000 },
];

const salesData = [
  { name: "Jan", sales: 40 },
  { name: "Feb", sales: 65 },
  { name: "Mar", sales: 50 },
  { name: "Apr", sales: 85 },
  { name: "May", sales: 70 },
  { name: "Jun", sales: 95 },
];

const skillsData = [
  { skill: "React", score: 90 },
  { skill: "Node.js", score: 80 },
  { skill: "MongoDB", score: 75 },
  { skill: "CSS", score: 85 },
  { skill: "JavaScript", score: 95 },
  { skill: "API", score: 80 },
];

const trafficData = [
  { name: "Desktop", value: 45 },
  { name: "Mobile", value: 35 },
  { name: "Tablet", value: 20 },
];

function App() {
  return (
    <div className='mx-auto min-h-screen max-w-[1440px] px-4 py-8 sm:px-6 lg:px-9'>
      <section className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
        <LineChart data={monthlyData}/>
        <AreaChart data={monthlyData}/>
        <BarChart data={salesData}/>
        <RadarChart data={skillsData}/>
        <div className='lg:col-span-2'>
          <PieChart data={trafficData}/>
        </div>
      </section>
      
    </div>
  )
}

export default App
