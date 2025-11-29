import { CoursesContext } from "../context/CoursesContext";
import { useContext } from "react";

export const useCoursesContext = () => {
    const context = useContext(CoursesContext)

    if(!context){
        throw Error('useCourses must be used inside a CoursesContextProvider')
    }

    return context
}