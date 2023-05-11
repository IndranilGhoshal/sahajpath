import React, { useEffect, useState } from 'react'
import { addCourse, allCourse } from '../../Services/courseServices'

export default function SetCourse() {


    const [courseList, setCourseList] = useState([])
    const [course, setCourse]=useState('')


    useEffect(() => {
        allCourseFun()
    }, [])

    const allCourseFun = () => {
        var data = {
        }
        allCourse(data).then(result => {
            // console.log(result)
            setCourseList(result.data.response)
        })
    }

    const onSubmit =()=>{
        var data = {
            "course":course
        }
        addCourse(data).then(result=>{
            if(result.data.success){
                setCourse("")
                allCourseFun()
            }
        })
    }



    return (
        <>
            <div className='course-form'>
                <div className='course-head'>
                    Add Course
                </div>
                <div className='course-body mt-2'>
                    <div className='row'>

                        <div className='col-sm-12'>
                            <label className='font-weight-500'>Course Name:</label>
                            <div className='mt-2'>
                                <input type='text' className='form-control'  value={course} onChange={(e)=>{setCourse(e.target.value)}} />
                            </div>
                        </div>

                    </div>
                    <div className='mx-auto d-grid gap-2 mt-4'>
                        <button className='btn btn-primary btn-lg' onClick={onSubmit}>Submit</button>
                    </div>

                </div>


            </div>

            <div className='course-list mt-3'>
                <div className='course-list-head'>
                    Course List
                </div>
                <div className='course-list-body mt-2'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Sl. No.</th>
                                <th scope="col">Course Name</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>

                        {
                            courseList.length == 0 ?
                                <>
                                    <tbody>
                                        <tr>
                                            <td colSpan='3' className='text-center'>Course not Added. Please add Course.</td>
                                        </tr>
                                    </tbody>
                                </>
                                :
                                <>
                                    {
                                        courseList.map((item, i) => (
                                            <tbody>
                                                <tr>
                                                    <td scope="row">{i + 1}.</td>
                                                    <td>{item.course}</td>
                                                    <td>
                                                        <button type="button" className="btn btn-primary btn-sm">Edit</button>

                                                        <button type="button" className="btn btn-secondary btn-sm mx-2">Delete</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))
                                    }
                                </>
                        }


                    </table>

                </div>

            </div>



        </>
    )
}
