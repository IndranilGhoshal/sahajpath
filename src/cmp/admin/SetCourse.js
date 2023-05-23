import React, { useEffect, useState } from 'react'
import { addCourse, allCourse } from '../../Services/courseServices'

export default function SetCourse() {


    const [courseList, setCourseList] = useState([])
    const [course, setCourse] = useState('')
    const [courseDuration, setCourseDuration] = useState('')
    const [courseFees, setCourseFees] = useState('')
    const [courseEligibility, setCourseEligibility] = useState('')
    const [courseDescription, setCourseDescription] = useState('')
    const [courseApprovedBy, setCourseApprovedBy] = useState('')
    const [courseType, setCourseType] = useState('')
    const [courseTypeFees, setCourseTypeFees] = useState('')
    const [courseTypeNo, setCourseTypeNo] = useState('')


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

    const onSubmit = () => {
        var data = {
            "course": course,
            "courseDuration": courseDuration,
            "courseFees": courseFees,
            "courseEligibility": courseEligibility,
            "courseDescription": courseDescription,
            "courseApprovedBy": courseApprovedBy,
            "courseType": courseType,
            "courseTypeFees": courseTypeFees,
            "courseTypeNo": courseTypeNo,
            
        }
        addCourse(data).then(result => {
            if (result.data.success) {
                setCourse("")
                setCourseDuration("")
                setCourseFees("")
                setCourseEligibility("")
                setCourseDescription("")
                setCourseApprovedBy("")
                setCourseType("")
                setCourseTypeFees("")
                setCourseTypeNo("")
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

                        <div className='col-sm-6'>
                            <label className='font-weight-500'>Course Name:</label>
                            <div className='mt-2'>
                                <input type='text' className='form-control' value={course} onChange={(e) => { setCourse(e.target.value) }} />
                            </div>
                        </div>


                        <div className='col-sm-6'>
                            <label className='font-weight-500'>Course Approved by:</label>
                            <div className='mt-2'>
                                <input type='text' className='form-control' value={courseApprovedBy} onChange={(e) => { setCourseApprovedBy(e.target.value) }} />
                            </div>
                        </div>

                    </div>

                    <div className='row mt-2'>

                        <div className='col-sm-6'>
                            <label className='font-weight-500'>Course Duration:</label>
                            <div className='mt-2'>
                                <input type='text' className='form-control' value={courseDuration} onChange={(e) => { setCourseDuration(e.target.value) }} />
                            </div>
                        </div>



                        <div className='col-sm-6'>
                            <label className='font-weight-500'>Course Total Fees:</label>
                            <div className='mt-2'>
                                <input type='text' className='form-control' value={courseFees} onChange={(e) => { setCourseFees(e.target.value) }} />
                            </div>
                        </div>

                    </div>


                    <div className='row mt-2'>

                        <div className='col-sm-6'>
                            <label className='font-weight-500'>Course Duration Type:</label>
                            <div className='mt-2'>
                                <select className='form-control' value={courseType} onChange={(e) => { setCourseType(e.target.value) }} >
                                    <option value=''>Select</option>
                                    <option value='Year'>Year</option>
                                    <option value='Semester'>Semester</option>
                                </select>
                            </div>
                        </div>


                        <div className='col-sm-6'>
                            <label className='font-weight-500'>Course Year/Semester Fees:</label>
                            <div className='mt-2'>
                            <input type='text' className='form-control' value={courseTypeFees} onChange={(e) => { setCourseTypeFees(e.target.value) }} />
                            </div>
                        </div>

                    </div>






                    <div className='row mt-2'>

                        <div className='col-sm-6'>
                            <label className='font-weight-500'>Course Eligibility:</label>
                            <div className='mt-2'>
                                <input type='text' className='form-control' value={courseEligibility} onChange={(e) => { setCourseEligibility(e.target.value) }} />
                            </div>
                        </div>


                        <div className='col-sm-6'>
                            <label className='font-weight-500'>Course Year/Semester No.:</label>
                            <div className='mt-2'>
                            <input type='text' className='form-control' value={courseTypeNo} onChange={(e) => { setCourseTypeNo(e.target.value) }} />

                            </div>
                        </div>

                    </div>

                    <div className='row mt-2'>

                    <div className='col-sm-12'>
                            <label className='font-weight-500'>Course Description:</label>
                            <div className='mt-2'>
                                <textarea className='form-control' value={courseDescription} onChange={(e) => { setCourseDescription(e.target.value) }}>

                                </textarea>
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
