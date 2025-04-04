import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';
import { useContext } from 'react';

const CoursesSection = () => {

    const {allCourses} = useContext(AppContext);
    return (
        <div className='py-16 md:px-40 px-8'>
            <h1>Courses Section</h1>
            <h2 className='text-3xl font-medium text-gray-800'>dao manh tung - chuyen nganh ml</h2>
            <p className='text-sm md:text-base text-gray-500 mt-3'>que quan: ha noi</p>
            
            <div className='grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4'>
                {allCourses.slice(0, 4).map((course, index) => <CourseCard key={index} course={course}/>)}
            </div>

            <Link 
            className='text-gray-500 border border-gray-500/30 rounded px-10 py-3'
            to={'/course-list'} onClick={() => scrollTo(0,0)}>Show all course</Link>

        </div>
    );
}

export default CoursesSection;
