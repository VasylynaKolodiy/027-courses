import React from 'react';
import './CourseCard.scss';
import {ICourse} from "../../models/Interfaces";
import {Rating} from "@mui/material";
import {Link} from "react-router-dom";
import Hls from "hls.js";

interface ICourseCardProps {
    course: ICourse
}

const CourseCard: React.FC<ICourseCardProps> = ({course}) => {

    const playVideoVolume = (urlName: string, videoId: string) => {
        const video: HTMLVideoElement = document.getElementById(videoId) as HTMLVideoElement;
        video.volume = 0

        const card = document.querySelector('.courseCard') as HTMLElement;

        if (Hls.isSupported()) {
            let hls = new Hls();
            hls.loadSource(urlName);
            hls.attachMedia(video as HTMLMediaElement);
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                card.addEventListener("mouseover", () => {
                    video.play().then()
                })
                card.addEventListener("mouseleave", () => {
                    video.pause()
                })
            });
        }
    }

    return (
        <div className='courseCard'>
            <div className='courseCard__video'
                 onFocus={() => playVideoVolume(course.meta.courseVideoPreview.link, `courseCard-${course.id}`)}>
                <video
                    id={`courseCard-${course.id}`}
                    autoPlay
                    controls
                    muted
                    loop
                    poster={`${course.previewImageLink}/cover.webp`}
                >
                </video>
            </div>

            <div className='courseCard__info'>
                <Link className='courseCard__link' to={`/${course.id}`}/>

                <h3 className='courseCard__title'>{course.title}</h3>

                <div className='courseCard__skills'>
                    {course.meta.skills?.map((skill, i) =>
                        <span key={i}>{skill}</span>
                    )}
                </div>

                <div className='courseCard__lessons'>
                    <div>{course.lessonsCount}{course.lessonsCount > 1 ? ' lessons' : ' lesson'}</div>
                    <Rating defaultValue={course.rating} precision={0.1} readOnly/>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;