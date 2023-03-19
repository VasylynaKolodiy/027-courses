import React from 'react';
import CourseCard from "../CourseCard/CourseCard";
import './CourseList.scss'
import {ICourse} from "../../models/Interfaces";
import {LIMIT} from "../../constants";

interface ICourseListProps {
    coursesState: ICourse[],
    pageNumber: number
}

const CourseList: React.FC<ICourseListProps> = ({coursesState, pageNumber}) => {
    return (
        <section className='coursesList'>
            {coursesState?.length > 0
                ? coursesState?.map((course: ICourse, i) =>
                    ( (LIMIT * (pageNumber - 1)) <= i && i < LIMIT * pageNumber) && <CourseCard
                        course={course}
                        key={course.id}
                    />
                )
                : <div className='courseCard'><h4>There are no courses</h4></div>
            }
        </section>
    );
};

export default CourseList;