import { useEffect, useState } from "react"
import CoursesInfo from "../components/CoursesInfo"
import CoursePreview from "../components/CoursePreview"

function AdminPage () {
    const [courses, setCourses] = useState(null)
    const [selectedCourse, setSelectedCourse] = useState(null)


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
        <div className="flex w-full font-poppins py-25">
            <div>
                    {courses && courses.map((course) => (
                        <div
                                key={course._id}
                                onClick={() =>setSelectedCourse(course)}
                                className="cursor-pointer"
                        >
                            <CoursesInfo course={course}/> 
                         </div>
                    ))}
            </div>      

            <div className="flex-1">
                <div>
                    {selectedCourse &&(
                        <CoursePreview course={selectedCourse}/>
                    )}
                </div>
            
            </div>              
    
        </div>
    )
}

export default AdminPage