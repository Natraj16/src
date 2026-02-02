import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, Navigate } from 'react-router-dom';
import Day1 from './pages/Day1';
import Day2 from './pages/Day2';
import Day3 from './pages/Day3';
import Day4 from './pages/Day4';
import Day5 from './pages/Day5';
import Day6 from './pages/Day6';
import Day7 from './pages/Day7';
import Day8 from './pages/Day8';
import Day9 from './pages/Day9';
import Day10 from './pages/Day10';
import Day11 from './pages/Day11';
import Day12 from './pages/Day12';
import Valentine from './pages/Valentine';
function App() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Navigate, { to: "/day/1", replace: true }) }), _jsx(Route, { path: "/day/1", element: _jsx(Day1, {}) }), _jsx(Route, { path: "/day/2", element: _jsx(Day2, {}) }), _jsx(Route, { path: "/day/3", element: _jsx(Day3, {}) }), _jsx(Route, { path: "/day/4", element: _jsx(Day4, {}) }), _jsx(Route, { path: "/day/5", element: _jsx(Day5, {}) }), _jsx(Route, { path: "/day/6", element: _jsx(Day6, {}) }), _jsx(Route, { path: "/day/7", element: _jsx(Day7, {}) }), _jsx(Route, { path: "/day/8", element: _jsx(Day8, {}) }), _jsx(Route, { path: "/day/9", element: _jsx(Day9, {}) }), _jsx(Route, { path: "/day/10", element: _jsx(Day10, {}) }), _jsx(Route, { path: "/day/11", element: _jsx(Day11, {}) }), _jsx(Route, { path: "/day/12", element: _jsx(Day12, {}) }), _jsx(Route, { path: "/valentine", element: _jsx(Valentine, {}) })] }));
}
export default App;
