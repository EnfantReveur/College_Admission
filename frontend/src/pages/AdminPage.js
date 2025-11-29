import { useEffect } from "react";
import CoursesInfo from "../components/CoursesInfo";
import CourseForm from "../components/CoursesForm";
import { useCoursesContext } from "../hooks/useCoursesContext"
import { Link } from "react-router-dom";

function AdminPage() {
    const {courses, dispatch} = useCoursesContext()
    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch('/api/courses')
            const json = await response.json()

            if (response.ok){
                dispatch ({type: 'SET_COURSES',payload: json})
            }
        }
        fetchCourses()
    }, [])



    return (

        <div className="admin-page">
            <div className="sidebar-container">
                <div className="sidebar">
                    <Link to="/dashboard"><p>Dashboard</p></Link>
                    <Link to="/managecourses"><p>Courses</p></Link>
                    <Link to="/managestudents"><p>Students</p></Link>
                    <Link to="/manageprofessors"><p>Professors</p></Link>
                    <Link to="/settings"><p>Settings</p></Link>
                </div>
            </div>
            <div className="courses">
                {courses && courses.map((course) =>{
                return <p key={course._id}><CoursesInfo course={course} /></p>
                })}
            </div>
            <CourseForm />
            <div className="test">
                <p>Test</p>
            </div>
        </div>
    );
}

export default AdminPage;