import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Urwego from './pages/Urwego'
import Imihigo from './pages/Imihigo'
import Contributions from './pages/Contributions'
import Communications from './pages/Communications'
import Territories from './pages/Territories'
import Reports from './pages/Reports'
import TaskAssignment from './pages/TaskAssignment'
import TaskDetail from './pages/TaskDetail'
import UserProfile from './pages/UserProfile'
import LeaderTasks from './pages/LeaderTasks'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/urwego" element={<Urwego />} />
                <Route path="/imihigo" element={<Imihigo />} />
                <Route path="/contributions" element={<Contributions />} />
                <Route path="/communications" element={<Communications />} />
                <Route path="/territories" element={<Territories />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/task/assign" element={<TaskAssignment />} />
                <Route path="/task/:id" element={<TaskDetail />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/leader/:leaderId/tasks" element={<LeaderTasks />} />
            </Routes>
        </Router>
    )
}

export default App
