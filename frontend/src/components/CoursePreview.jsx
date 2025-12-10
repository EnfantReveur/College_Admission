
function CoursePreview ({course}) {
    return(
        <div className="flex justify-between items-start m-2 p-4 shadow-md max-w-3xl">
            <div className="flex-1">
                <h1>{course.courseTitle}</h1>

            </div>
            
        </div>
    )
}

export default CoursePreview