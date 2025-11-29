import { useState } from "react";
import { useCoursesContext } from "../hooks/useCoursesContext"

const CourseForm =() => {
const {dispatch} = useCoursesContext()
const [courseTitle, setCourseTitle] = useState('')
const [courseDescription, setCourseDescription] = useState('')
const [coursePrice, setCoursePrice] = useState('')
const [error, SetError] = useState(null)

const handleSubmit = async (e) => {
    e.preventDefault()

    const courses = { courseTitle, courseDescription, coursePrice}

    const response = await fetch('/api/', {
        method: 'POST',
        body: JSON.stringify(courses),
        headers : {
            'Content-Type': 'application/json'
        }
        
    })
        const json = await response.json()

        if(!response.ok){
            SetError(json.error)
        }
        if(response.ok){
            setCourseTitle('')
            setCourseDescription('')
            setCoursePrice('')
            SetError(null)
            console.log('courses added', json)
            dispatch({type: 'CREATE_COURSES',payload: json})
        }
}

    return(
        <div className="course-form" onSubmit={handleSubmit}>
            <form>
                <label>Course Title</label>
                <input 
                type="text"
                onChange={(e) => setCourseTitle(e.target.value)}
                value={courseTitle}
                placeholder="Course Title"
                />

                <label>Course Description</label>
                <input
                type="text"
                onChange={(e) => setCourseDescription(e.target.value)}
                value={courseDescription}
                placeholder="Course Description"
                />

                <label>Course Price</label>
                <input
                type="number"
                onChange={(e) =>setCoursePrice(e.target.value)}
                value={coursePrice}
                placeholder="Course Price"
                />

                <button type="submit">Submit</button>

            </form>

        </div>
    )
}

export default CourseForm
