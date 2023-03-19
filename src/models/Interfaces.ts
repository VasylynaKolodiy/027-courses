export interface ICourseMetaVideoPreview {
    duration: number,
    link: string,
    previewImageLink: string
}

export interface ICourseMeta {
    courseVideoPreview: ICourseMetaVideoPreview,
    skills: string[],
    slug: string,
}

export interface ICourse {
    id: string,
    containsLockedLessons: boolean,
    description: string,
    duration: number,
    launchDate: string,
    lessonsCount: number,
    meta: ICourseMeta,
    previewImageLink: string,
    rating: number,
    status: string,
    tags: string[],
    title: string
}

export interface ILesson {
    id: string,
    title: string,
    duration: number,
    order: number,
    type: string,
    status: string,
    link: string,
    previewImageLink: string,
    meta: string
}

export interface IDetailCourse {
    id: string,
    title: string,
    tags: string[],
    launchDate: string,
    status: string,
    description: string,
    duration: number,
    previewImageLink: string,
    rating: number,
    meta: ICourseMeta,
    lessons: ILesson[],
    containsLockedLessons: boolean
}