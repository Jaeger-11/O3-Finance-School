import React from 'react';
import { courses } from '../data';
import hours from "../assets/courses-duration.svg";
import teacher from "../assets/courses-teacher.svg";
import student from "../assets/courses-student.svg"; 

const CoursesHome = () => {
  return (
    <div className='container mx-auto'>
        <h3 className='font-bold text-xl benzin-bold ml-4 md:text-2xl'>Popular Courses</h3>
        <section className='flex flex-wrap gap-8 my-4 justify-center'>
            {courses.map((course) => {
                const { intro, title, instructor, duration, students, teachers, illustration, free } = course
                return (
                    <div key={title} className='p-4 rounded-xl bg-white shadow-md max-w-[300px] font-alternate cursor-pointer'>
                        <img src={illustration} alt="title" />
                        <article className='flex flex-col gap-2 mt-2'>
                            { free ? 
                            <span className='text-sm text-lightgreen text-right font-bold'>Free*</span> : 
                            <span className='text-sm text-red-700 font-bold text-right'>Paid*</span> }
                            <h4 className='font-bold text-base'>{title}</h4>
                            <p className='text-sm '>{intro}</p>
                            <p className="italic text-sm text-right">Instructor: <span className='font-bold'>{instructor}</span> </p>
                            <div className='flex justify-between'>
                                <span className='flex justify-center items-center gap-2 text-sm'> <img src={student} alt="student icon" className='w-3'/> {students} </span>
                                <span className='flex justify-center items-center gap-2 text-sm'> <img src={teacher} alt="teacher icon" className='w-3'/> {teachers} </span>
                                <span className='flex justify-center items-center gap-2 text-sm'> <img src={hours} alt="duration icon" className='w-3'/> {duration} hours+ </span>
                            </div>
                        </article>
                    </div>
                )
            })}
        </section>
    </div>
  )
}

export default CoursesHome