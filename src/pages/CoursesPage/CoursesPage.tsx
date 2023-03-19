import React, {useState} from 'react';
import './CoursesPage.scss'
import {useGetCoursesQuery} from "../../store/courses/courses.api";
import CourseList from '../../components/CourseList/CourseList';
import {LIMIT} from "../../constants";
import {Pagination} from "@mui/material";

const CoursesPage = () => {

    const {isLoading, data: courses} = useGetCoursesQuery(null, {refetchOnMountOrArgChange: true});
    const coursesState = courses?.courses || []
    console.log(coursesState, 'coursesState')

    const [pageNumber, setPageNumber] = useState<number>(1);
    const TOTAL_COUNT = coursesState?.length || 0;
    const countOfPages = TOTAL_COUNT && Math.ceil(Number(TOTAL_COUNT) / LIMIT);

    return (
        <main className='coursesPage'>
            <h1 className='coursesPage__title'>Our Courses</h1>
            {isLoading
                ? <h2 className='coursesPage__loading'>Loading...</h2>
                : (
                    <>
                        {courses?.courses && <CourseList coursesState={coursesState} pageNumber={pageNumber}/>}
                        <Pagination
                            className='pagination'
                            count={countOfPages}
                            size="large"
                            page={pageNumber}
                            onChange={(event, value) => setPageNumber(value)}
                        />
                    </>
                )
            }

        </main>
    );
};

export default CoursesPage;