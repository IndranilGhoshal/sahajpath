import React, { useEffect, useState } from 'react'
import { addCourse, allCourse, deleteCourse, editCourse, uploadFile } from '../../Services/courseServices'
import tick from '../../assets/images/tick.jpeg'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { hideLoader, showLoader } from '../../Services/common';


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
    const [courseBanner, setCourseBanner] = useState('')

    const [courseErr, setCourseErr] = useState(false)
    const [courseDurationErr, setCourseDurationErr] = useState(false)
    const [courseFeesErr, setCourseFeesErr] = useState(false)
    const [courseEligibilityErr, setCourseEligibilityErr] = useState(false)
    const [courseDescriptionErr, setCourseDescriptionErr] = useState(false)
    const [courseApprovedByErr, setCourseApprovedByErr] = useState(false)
    const [courseTypeErr, setCourseTypeErr] = useState(false)
    const [courseTypeFeesErr, setCourseTypeFeesErr] = useState(false)
    const [courseTypeNoErr, setCourseTypeNoErr] = useState(false)
    const [courseBannerErr, setCourseBannerErr] = useState(false)


    useEffect(() => {
        allCourseFun()
        setTimeout(() => {
            hideLoader()
        }, 1000);
    }, [])

    const allCourseFun = () => {
        var data = {
        }
        allCourse(data).then(result => {
            // console.log(result)
            setCourseList(result.data.response)
        })
    }

    function showUpload() {
        const image = document.getElementById('file');
        image.click();
    }

    function uploadImg() {
        console.log(".......")
        const image = document.getElementById('file');
        const file = image.files;
        console.log(file)
        if (file) {
            const fileData = new FormData();
            fileData.append('file', file[0])
            showLoader()
            uploadFile(fileData).then(result => {
                hideLoader()
                if (result.success) {
                    setCourseBanner(result.fileName)
                    NotificationManager.success("Banner uploaded successfully");
                }else{
                    NotificationManager.error("Something went wrong");
                }
            })
        }

    }

    const onSubmit = () => {
        setCourseErr(false)
        setCourseDurationErr(false)
        setCourseFeesErr(false)
        setCourseEligibilityErr(false)
        setCourseDescriptionErr(false)
        setCourseApprovedByErr(false)
        setCourseTypeErr(false)
        setCourseTypeFeesErr(false)
        setCourseTypeNoErr(false)
        setCourseBannerErr(false)
        var err = 0

        if (course == '') {
            setCourseErr(true)
            err++
        }
        if (courseDuration == '') {
            setCourseDurationErr(true)
            err++
        }
        if (courseFees == '') {
            setCourseFeesErr(true)
            err++
        }
        if (courseEligibility == '') {
            setCourseEligibilityErr(true)
            err++
        }
        if (courseDescription == '') {
            setCourseDescriptionErr(true)
            err++
        }
        if (courseApprovedBy == '') {
            setCourseApprovedByErr(true)
            err++
        }
        if (courseType == '') {
            setCourseTypeErr(true)
            err++
        }
        if (courseTypeFees == '') {
            setCourseTypeFeesErr(true)
            err++
        }
        if (courseTypeNo == '') {
            setCourseTypeNoErr(true)
            err++
        }
        if (courseBanner == '') {
            setCourseBannerErr(true)
            err++
        }

        if (err == 0) {
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
                "courseBanner": courseBanner

            }
            showLoader()
            addCourse(data).then(result => {
                hideLoader()
                if (result.data.success) {
                    NotificationManager.success(result.data.message);
                    setCourse("")
                    setCourseDuration("")
                    setCourseFees("")
                    setCourseEligibility("")
                    setCourseDescription("")
                    setCourseApprovedBy("")
                    setCourseType("")
                    setCourseTypeFees("")
                    setCourseTypeNo("")
                    setCourseBanner("")
                    allCourseFun()
                } else {
                    NotificationManager.error(result.data.message);
                }
            })
        }


    }

    const onReset = () => {
        showLoader()
        setCourse("")
        setCourseDuration("")
        setCourseFees("")
        setCourseEligibility("")
        setCourseDescription("")
        setCourseApprovedBy("")
        setCourseType("")
        setCourseTypeFees("")
        setCourseTypeNo("")
        setCourseBanner("")
        setEditId("")
        setCourseErr(false)
        setCourseDurationErr(false)
        setCourseFeesErr(false)
        setCourseEligibilityErr(false)
        setCourseDescriptionErr(false)
        setCourseApprovedByErr(false)
        setCourseTypeErr(false)
        setCourseTypeFeesErr(false)
        setCourseTypeNoErr(false)
        setCourseBannerErr(false)
        setEditBtn(false)
        setTimeout(() => {
            hideLoader()
        }, 1000);
    }

    const [editBtn, setEditBtn] = useState(false)
    const [editId, setEditId] = useState('')


    const onEdit = (val) => {
        showLoader()
        setCourse(val.course)
        setCourseDuration(val.courseDuration)
        setCourseFees(val.courseFees)
        setCourseEligibility(val.courseEligibility)
        setCourseDescription(val.courseDescription)
        setCourseApprovedBy(val.courseApprovedBy)
        setCourseType(val.courseType)
        setCourseTypeFees(val.courseTypeFees)
        setCourseTypeNo(val.courseTypeNo)
        setCourseBanner(val.courseBanner)
        setEditId(val.id)
        setEditBtn(true)
        setCourseErr(false)
        setCourseDurationErr(false)
        setCourseFeesErr(false)
        setCourseEligibilityErr(false)
        setCourseDescriptionErr(false)
        setCourseApprovedByErr(false)
        setCourseTypeErr(false)
        setCourseTypeFeesErr(false)
        setCourseTypeNoErr(false)
        setCourseBannerErr(false)
        setTimeout(() => {
            hideLoader()
        }, 1000);
    }

    const onEditBtn = () => {
        setCourseErr(false)
        setCourseDurationErr(false)
        setCourseFeesErr(false)
        setCourseEligibilityErr(false)
        setCourseDescriptionErr(false)
        setCourseApprovedByErr(false)
        setCourseTypeErr(false)
        setCourseTypeFeesErr(false)
        setCourseTypeNoErr(false)
        setCourseBannerErr(false)

        var err = 0

        if (course == '') {
            setCourseErr(true)
            err++
        }
        if (courseDuration == '') {
            setCourseDurationErr(true)
            err++
        }
        if (courseFees == '') {
            setCourseFeesErr(true)
            err++
        }
        if (courseEligibility == '') {
            setCourseEligibilityErr(true)
            err++
        }
        if (courseDescription == '') {
            setCourseDescriptionErr(true)
            err++
        }
        if (courseApprovedBy == '') {
            setCourseApprovedByErr(true)
            err++
        }
        if (courseType == '') {
            setCourseTypeErr(true)
            err++
        }
        if (courseTypeFees == '') {
            setCourseTypeFeesErr(true)
            err++
        }
        if (courseTypeNo == '') {
            setCourseTypeNoErr(true)
            err++
        }
        if (courseBanner == '') {
            setCourseBannerErr(true)
            err++
        }

        if(err==0){
            var data = {
                "id": editId,
                "course": course,
                "courseDuration": courseDuration,
                "courseFees": courseFees,
                "courseEligibility": courseEligibility,
                "courseDescription": courseDescription,
                "courseApprovedBy": courseApprovedBy,
                "courseType": courseType,
                "courseTypeFees": courseTypeFees,
                "courseTypeNo": courseTypeNo,
                "courseBanner": courseBanner
            }
            showLoader()
            editCourse(data).then(result => {
                hideLoader()
                if (result.data.success) {
                    NotificationManager.success(result.data.message);
                    setCourse("")
                    setCourseDuration("")
                    setCourseFees("")
                    setCourseEligibility("")
                    setCourseDescription("")
                    setCourseApprovedBy("")
                    setCourseType("")
                    setCourseTypeFees("")
                    setCourseTypeNo("")
                    setCourseBanner("")
                    setEditId("")
                    setEditBtn(false)
                    allCourseFun()
                }else{
                    NotificationManager.error(result.data.message);
                }
            })
        }
    }

    const onDelete = (val) => {
        var data = {
            "id": val
        }
        showLoader()
        deleteCourse(data).then(result => {
            hideLoader()
            if (result.data.success) {
                NotificationManager.success(result.data.message);
                allCourseFun()
            }else{
                NotificationManager.error(result.data.message);
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

                        <div className='col-lg-4 col-sm-6 col-sm-12 mb-3'>
                            <label className='font-weight-500'>Course Name:</label>
                            <div className='mt-2'>
                                <input type='text' className='form-control' value={course} onChange={(e) => { setCourse(e.target.value) }} />
                            </div>
                            {
                                courseErr ? <span className='color-red font-size-14'>Enter course name</span> : null
                            }
                        </div>


                        <div className='col-lg-4 col-sm-6 col-sm-12 mb-3'>
                            <label className='font-weight-500'>Course Approved by:</label>
                            <div className='mt-2'>
                                <input type='text' className='form-control' value={courseApprovedBy} onChange={(e) => { setCourseApprovedBy(e.target.value) }} />
                            </div>
                            {
                                courseApprovedByErr ? <span className='color-red font-size-14'>Enter course approved</span> : null
                            }
                        </div>



                        <div className='col-lg-4 col-sm-6 col-sm-12 mb-3'>
                            <label className='font-weight-500'>Course Duration:</label>
                            <div className='mt-2'>
                                <input type='text' className='form-control' value={courseDuration} onChange={(e) => { setCourseDuration(e.target.value) }} />
                            </div>
                            {
                                courseDurationErr ? <span className='color-red font-size-14'>Enter course duration</span> : null
                            }
                        </div>



                        <div className='col-lg-4 col-sm-6 col-sm-12 mb-3'>
                            <label className='font-weight-500'>Course Total Fees:</label>
                            <div className='mt-2'>
                                <input type='text' className='form-control' value={courseFees} onChange={(e) => { setCourseFees(e.target.value) }} />
                            </div>
                            {
                                courseFeesErr ? <span className='color-red font-size-14'>Enter course total fees</span> : null
                            }
                        </div>



                        <div className='col-lg-4 col-sm-6 col-sm-12 mb-3'>
                            <label className='font-weight-500'>Course Duration Type:</label>
                            <div className='mt-2'>
                                <select className='form-control' value={courseType} onChange={(e) => { setCourseType(e.target.value) }} >
                                    <option value=''>Select</option>
                                    <option value='Year'>Year</option>
                                    <option value='Semester'>Semester</option>
                                </select>
                            </div>
                            {
                                courseTypeErr ? <span className='color-red font-size-14'>Enter course duration type</span> : null
                            }
                        </div>


                        <div className='col-lg-4 col-sm-6 col-sm-12 mb-3'>
                            <label className='font-weight-500'>Course Year/Semester Fees:</label>
                            <div className='mt-2'>
                                <input type='text' className='form-control' value={courseTypeFees} onChange={(e) => { setCourseTypeFees(e.target.value) }} />
                            </div>
                            {
                                courseTypeFeesErr ? <span className='color-red font-size-14'>Enter course fees</span> : null
                            }
                        </div>



                        <div className='col-lg-4 col-sm-6 col-sm-12 mb-3'>
                            <label className='font-weight-500'>Course Eligibility:</label>
                            <div className='mt-2'>
                                <input type='text' className='form-control' value={courseEligibility} onChange={(e) => { setCourseEligibility(e.target.value) }} />
                            </div>
                            {
                                courseEligibilityErr ? <span className='color-red font-size-14'>Enter course eligibility</span> : null
                            }
                        </div>


                        <div className='col-lg-4 col-sm-6 col-sm-12 mb-3'>
                            <label className='font-weight-500'>Course Year/Semester No.:</label>
                            <div className='mt-2'>
                                <input type='text' className='form-control' value={courseTypeNo} onChange={(e) => { setCourseTypeNo(e.target.value) }} />
                            </div>
                            {
                                courseTypeNoErr ? <span className='color-red font-size-14'>Enter course no.</span> : null
                            }
                        </div>

                        <div className='col-lg-4 col-sm-6 col-sm-12 mb-3'>
                            <label className='font-weight-500'>Course Banner:</label>
                            <div className='mt-2'>
                                <input type="file" id="file" onChange={uploadImg} style={{ display: 'none' }} accept="image/jpg,image/jpeg" />
                                <button class="btn btn-primary" onClick={showUpload}><i class="icofont-swoosh-up"></i> Upload</button>
                                {
                                   courseBanner?
                                   <>
                                   <span className='mx-2'>Upload successfull</span>
                                   <img src={tick} width={28}/>
                                   </>
                                   :null
                                }
                            </div>
                            {
                                courseBannerErr ? <span className='color-red font-size-14'>Enter course banner</span> : null
                            }
                        </div>

                    </div>

                    <div className='row mt-2'>

                        <div className='col-sm-12'>
                            <label className='font-weight-500'>Course Description:</label>
                            <div className='mt-2'>
                                <textarea className='form-control' value={courseDescription} onChange={(e) => { setCourseDescription(e.target.value) }}>

                                </textarea>
                            </div>
                            {
                                courseDescriptionErr ? <span className='color-red font-size-14'>Enter course description</span> : null
                            }
                        </div>


                    </div>

                    <div className='row mt-4'>
                        <div className='col-sm-12 d-flex justify-content-center'>
                        {
                                editBtn ?
                                    
                                        <button className='btn btn-primary btn-lg submits  w-auto m-0' onClick={onEditBtn}><i class="icofont-ui-edit"></i> Edit</button>
                                   
                                    :
                                   
                                        <button className='btn btn-primary btn-lg submits  w-auto m-0' onClick={onSubmit}><i class="icofont-swoosh-right"></i> Submit</button>
                                    
                            }
                     
                        
                           
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span><button className='btn btn-secondary btn-lg resets  w-auto m-0' onClick={onReset}><i class="icofont-ui-reply"></i> Reset</button>
                            </div>
                        

                    </div>



                </div>


            </div >

            <div className='course-list mt-3'>
                <div className='course-list-head'>
                    Course List
                </div>
                <div className='course-list-body enquiry-list-body mt-2'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Sl. No.</th>
                                <th scope="col">Course Name</th>
                                <th scope="col">Approved by</th>
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
                                                    <td>{item.courseApprovedBy}</td>
                                                    <td>
                                                        <button type="button" className="btn btn-primary btn-sm" onClick={() => { onEdit(item) }}><i class="icofont-ui-edit"></i> Edit</button>

                                                        <button type="button" className="btn btn-secondary btn-sm mx-2" onClick={() => { onDelete(item.id) }}><i class="icofont-ui-delete"></i> Delete</button>
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


            <NotificationContainer />

        </>
    )
}
