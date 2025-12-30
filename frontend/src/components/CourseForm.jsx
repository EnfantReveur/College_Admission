import { useState } from "react"
import { useCourseContext } from "../hooks/useCourseContext"


const CourseForm = () => {
    const {dispatch} = useCourseContext
    const [courseTitle, setCourseTitle] = useState('')
    const [courseDescription, setCourseDescription] = useState('')
    const [coursePrice, setCoursePrice] = useState('')
    const [error, setError] = useState(null)
    
    const handleSubmit = async (e) =>{
        e.preventDefault()

        const course = {courseTitle, courseDescription, coursePrice}

        const response = await fetch("/api/courses",{
            method:'POST',
            body:JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            console.log('new course added')
            setCourseTitle('')
            setCourseDescription('')
            setCoursePrice('')
            dispatch({type: 'CREATE_COURSES', payload : json})
            onclose()
        }

    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label className="font-semibold">Course Name</label>
                <input
                type="text"
                placeholder="Course Name"
                onChange={(e) => setCourseTitle(e.target.value)}
                value={courseTitle}
                />

                <label className="font-semibold">Course Description</label>
                <input
                type="text"
                placeholder="Add Description to the Course"
                onChange={(e) =>setCourseDescription(e.target.value)}
                value={courseDescription}
                />

                <label className="font-semibold">Price</label>
                <input
                type="number"
                placeholder="Price for the course"
                onChange={(e) => setCoursePrice(e.target.value)}
                value={coursePrice}
                />

                <button type="submit" className="bg-green-500 hover:bg-green-700 round py-1">Submit</button>

            </form>
        </div>
    )
}

export default CourseForm