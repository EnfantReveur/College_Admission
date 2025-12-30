import { useEffect, useState, } from "react"
import CoursesInfo from "../components/CoursesInfo"
import CoursePreview from "../components/CoursePreview"
import CourseForm from "../components/CourseForm"
import { useCourseContext } from "../hooks/useCourseContext"

const AdminPage = () => {
    const {courses, dispatch} = useCourseContext()
    const [selectedCourse, setSelectedCourse] = useState()
    const [newCourse, setNewCourse] = useState(false)


    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('/api/courses')
                const json = await response.json()
                console.log('Courses:', json)
                
                if(response.ok){
                    dispatch({type: 'CREATE_COURSE', payload : json})
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
                <div>
                    <button onClick={() =>setNewCourse(true) } className="bg-green-500 hover:bg-green-700 py-1 px-3 rounded font-semibold text-white">Add Course</button>
                </div>
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
            {newCourse && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-black/50"
                    onClick={() => setNewCourse(false)}
                />

                <div className="relative bg-white p-6 w-full max-w-lg rounded-lg z-10">
                    <CourseForm onClose={() =>setNewCourse(false)}/>
                    <button onClick={() => setNewCourse(false)} className="mt-4 text-sm text-gray-600">
                        Close
                    </button>
                </div>
            </div>       
            )}   
    
        </div>
    )
}

export default AdminPage