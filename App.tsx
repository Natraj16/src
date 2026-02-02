import { Routes, Route, Navigate } from 'react-router-dom'
import Day1 from './pages/Day1'
import Day2 from './pages/Day2'
import Day3 from './pages/Day3'
import Day4 from './pages/Day4'
import Day5 from './pages/Day5'
import Day6 from './pages/Day6'
import Day7 from './pages/Day7'
import Day8 from './pages/Day8'
import Day9 from './pages/Day9'
import Day10 from './pages/Day10'
import Day11 from './pages/Day11'
import Day12 from './pages/Day12'
import Valentine from './pages/Valentine'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/day/1" replace />} />
      <Route path="/day/1" element={<Day1 />} />
      <Route path="/day/2" element={<Day2 />} />
      <Route path="/day/3" element={<Day3 />} />
      <Route path="/day/4" element={<Day4 />} />
      <Route path="/day/5" element={<Day5 />} />
      <Route path="/day/6" element={<Day6 />} />
      <Route path="/day/7" element={<Day7 />} />
      <Route path="/day/8" element={<Day8 />} />
      <Route path="/day/9" element={<Day9 />} />
      <Route path="/day/10" element={<Day10 />} />
      <Route path="/day/11" element={<Day11 />} />
      <Route path="/day/12" element={<Day12 />} />
      <Route path="/valentine" element={<Valentine />} />
    </Routes>
  )
}

export default App
