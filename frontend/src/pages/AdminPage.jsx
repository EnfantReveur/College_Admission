import { useEffect, useState } from "react"
import CoursesInfo from "../components/CoursesInfo"

function AdminPage () {
    const [courses, setCourses] = useState(null)


    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('/api/courses')
                const json = await response.json()
                console.log('Courses:', json)
                
                if(response.ok){
                    setCourses(json)
                }
            } catch (error) {
                console.error('Error fetching courses:', error)
            }
        }
        fetchCourses()
    }, [])
    

    return(
        <div className="font-poppins py-20">
                {courses && courses.map((course) => (
                    <p key={course._id}><CoursesInfo course={course}/></p>
                ))}
            <div>Test</div>
        </div>
    )
}

export default AdminPage