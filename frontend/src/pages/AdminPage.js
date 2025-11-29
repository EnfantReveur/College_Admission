import { useEffect } from "react";
import CoursesInfo from "../components/CoursesInfo";
import CourseForm from "../components/CoursesForm";
import { useCoursesContext } from "../hooks/useCoursesContext"

function AdminPage() {
    const {courses, dispatch} = useCoursesContext()
    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch('/api/')
            const json = await response.json()

            if (response.ok){
                dispatch ({type: 'SET_COURSES',payload: json})
            }
        }
        fetchCourses()
    }, [])



    return (
        <div className="admin-page">
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