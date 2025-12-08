import { Link } from 'react-router-dom'

function Navbar () {
    return (
        <div className="w-full bg-white shadow-lg p-6 font-poppins fixed top-0 left-0 right-0 z-50">
            <div className="text-black text-2xl">
                <Link to="/"><h1>Most Generic College Admission System</h1></Link>
            </div>
        </div>
    )
}

export default Navbar