import { CourseContext } from "../context/CourseContext";
import { useContext } from "react";

export const useCourseContext = () =>{
    const context = useContext(CourseContext)

    if(!context){
        throw Error('context must be inside the CourseContext.Provider')
    }

    return context
}