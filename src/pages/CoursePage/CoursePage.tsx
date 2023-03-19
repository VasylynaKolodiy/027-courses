import React from 'react';
import {useParams} from 'react-router-dom';
import './CoursePage.scss'
import {useGetCourseQuery} from "../../store/courses/courses.api";
import {Rating} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ILesson} from '../../models/Interfaces';
import Hls from 'hls.js';
import {useActions} from "../../hooks/actions";
import {useAppSelector} from "../../hooks/redux";


const CoursePage = () => {
        const {courseId} = useParams();
        const {isLoading, data: course} = useGetCourseQuery(String(courseId)) || {};
        const {setViewtime} = useActions()
        const viewTimeState = useAppSelector((state) => state.data.viewtime) || {};

        const playVideo = (video: HTMLVideoElement, urlName: string) => {
            if (Hls.isSupported()) {
                let hls = new Hls();
                hls.loadSource(urlName);
                hls.attachMedia(video as HTMLMediaElement);
                hls.on(Hls.Events.MANIFEST_PARSED, function () {
                    video.play().then()
                });
            }
        }

        const saveVideoProgress = (urlName: string, videoId: string) => {
            const video: HTMLVideoElement = document.getElementById(videoId) as HTMLVideoElement;
            // @ts-ignore
            video.currentTime = viewTimeState[videoId] || 0;
            video.addEventListener("pause", () => {
                setViewtime({...viewTimeState, [videoId]: video.currentTime})
            });
            playVideo(video, urlName)
        }

        return (
            <main className='coursePage'>
                {isLoading
                    ? <h2 className='coursePage__loading'>Loading...</h2>
                    : (
                        <>
                            <div className='coursePage__rating'>
                                <h1 className='coursePage__title'>{course.title}</h1>
                                <Rating defaultValue={course.rating} precision={0.1} readOnly/>
                            </div>
                            <div>
                                <p className='coursePage__description'>{course.description}</p>
                                <div className='courseCard__skills'>
                                    {course.meta.skills?.map((skill: string, i: number) =>
                                        <span key={i}>{skill}</span>
                                    )}
                                </div>
                            </div>

                            <div className='coursePage__video'
                                 onFocus={() => saveVideoProgress(course.meta.courseVideoPreview.link, `course-${course.id}`)}>
                                <video
                                    id={`course-${course.id}`}
                                    controls
                                    autoPlay
                                    poster={`${course.previewImageLink}/cover.webp`}
                                >
                                </video>
                            </div>


                            {course.lessons?.map((lesson: ILesson, i: number) =>
                                <Accordion disabled={lesson.status === 'locked'} key={lesson.id}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>
                                            <span>Lesson {i + 1}</span>
                                            <span>{lesson.title}</span>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div className='coursePage__video'
                                             onFocus={() => saveVideoProgress(lesson.link, `course-${course.id}-lesson${lesson.order}`)}>
                                            <video
                                                id={`course-${course.id}-lesson${lesson.order}`}
                                                controls
                                                autoPlay
                                                poster={`${lesson.previewImageLink}/lesson-${lesson.order}.webp`}
                                            >
                                            </video>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                            )}
                        </>
                    )
                }
            </main>
        );
    }
;

export default CoursePage;