
function CoursesInfo ({course}) {
    return(
        <div className="flex justify-between items-start  bg-white m-2 rounded-lg p-4 shadow-md hover:shadow-lg max-w-3xl">
            <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{course.courseTitle}</h3>
                <p className="text-gray-700 text-sm font-semibold mb-3">{course.courseDescription}</p>
                <p className="text-sm  text-gray-600" >{course.coursePrice}</p>
            </div>
            <div className="flex flex-col gap-2 ml-4 items-stretch">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded">Edit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded">Delete</button>
            </div>

        </div>
    )
}

export default CoursesInfo