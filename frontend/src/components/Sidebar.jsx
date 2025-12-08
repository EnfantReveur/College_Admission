import { Link } from 'react-router-dom'

function Sidebar () {
    return (
        <aside className="fixed left-0 top-20 w-55 h-screen bg-white text-black p-6 overflow-y-auto shadow-lg">
            <div className="border-b-4 border-gray-300 pb-4">
                <nav className="space-y-4">
                    <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                        <span className="text-xl"></span>
                        <span>Dashboard</span>
                    </Link>
                    <Link to="/courses" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                        <span className="text-xl"></span>
                        <span>Courses</span>
                    </Link>
                    <Link to="/students" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                        <span className="text-xl"></span>
                        <span>Students</span>
                    </Link>
                    <Link to="/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                        <span className="text-xl"></span>
                        <span>Settings</span>
                    </Link>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar