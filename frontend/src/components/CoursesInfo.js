function CoursesInfo ({ course }) {
    return(
        <div className="courses-container">
            <div className="courses-info">
                <p>{course.courseTitle}</p>
                <p>{course.courseDescription}</p>
                <p>{course.coursePrice}</p>
            </div>
        </div>

    )
}

export default CoursesInfo