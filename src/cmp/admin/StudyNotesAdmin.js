import React, { useEffect, useState } from 'react'
import { hideLoader, showLoader } from '../../Services/common';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { allCourse, uploadFile } from '../../Services/courseServices';
import { addStudyNotes, allStudyNotes, deleteStudyNotes } from '../../Services/studyNotesServices';


export default function StudyNotesAdmin() {

    const [courseList, setCourseList] = useState([])
    const [studyNotesList, setStudyNotesList] = useState([])



    const [pdfFile, setPdfFile] = useState('')
    const [course, setCourse] = useState('')
    const [description, setDescription] = useState('')


    const [courseErr, setCourseErr] = useState(false)
    const [descriptionErr, setDescriptionErr] = useState(false)
    const [pdfFileErr, setPdfFileErr] = useState(false)



    useEffect(() => {
        allCourseFun()
        allStudyNotesFun()
        setTimeout(() => {
            hideLoader()
        }, 1000);
    }, [])

    const allCourseFun = () => {
        var data = {}
        allCourse(data).then(result => {
            setCourseList(result.data.response)
        })
    }

    const allStudyNotesFun = () => {
        var data = {
        }
        allStudyNotes(data).then(result => {
            setStudyNotesList(result.data.response)
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
                    setPdfFile(result.fileName)
                    NotificationManager.success("pdf uploaded successfully");
                } else {
                    NotificationManager.error("Something went wrong");
                }
            })
        }

    }

    const onSubmit = () => {
        setCourseErr(false)
        setDescriptionErr(false)
        setPdfFileErr(false)

        var err = 0

        if (course == '') {
            setCourseErr(true)
            err++
        }

        if (description == '') {
            setDescriptionErr(true)
            err++
        }

        if (pdfFile == '') {
            setPdfFileErr(true)
            err++
        }


        if (err == 0) {
            var data = {
                "course": course,
                "description": description,
                "pdfFile": pdfFile
            }

            console.log(data)
            showLoader()
            addStudyNotes(data).then(result => {
                hideLoader()
                if (result.data.success) {
                    NotificationManager.success(result.data.message);
                    setCourse("")
                    setDescription("")
                    setPdfFile("")
                    allStudyNotesFun()
                } else {
                    NotificationManager.error(result.data.message);
                }
            })
        }
    }

    const onReset = () => {
        showLoader()
        setCourse("")
        setDescription("")
        setPdfFile("")
        setCourseErr(false)
        setDescriptionErr(false)
        setPdfFileErr(false)
        setTimeout(() => {
            hideLoader()
        }, 1000);
    }


    const onDelete = (val) => {
        var data = {
            "id": val
        }
        showLoader()
        deleteStudyNotes(data).then(result => {
            hideLoader()
            if (result.data.success) {
                NotificationManager.success(result.data.message);
                allStudyNotesFun()
            }else{
                NotificationManager.error(result.data.message);
            }
        })
    }


    return (
        <>
            <div className='session-form'>
                <div className='session-head'>
                    Add Study Notes
                </div>
                <div className='session-body mt-2'>
                    <div className='row'>

                        <div className='col-sm-4'>
                            <label className='font-weight-500'>Course:</label>
                            <div className='mt-2'>
                                <select className='form-control' value={course} onChange={(e) => { setCourse(e.target.value); }} >
                                    <option value=''>Select</option>
                                    {
                                        courseList.map((item, i) => (
                                            <option value={item.id}>{item.course}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            {
                                courseErr ? <span className='color-red font-size-14'>Select the course</span> : null
                            }
                        </div>

                        <div className='col-sm-4'>
                            <label className='font-weight-500'>Description:</label>
                            <div className='mt-2'>
                                <textarea value={description} onChange={(e) => { setDescription(e.target.value); }}>

                                </textarea>
                            </div>
                            {
                                descriptionErr ? <span className='color-red font-size-14'>Enter the description</span> : null
                            }
                        </div>

                        <div className='col-sm-4'>
                            <label className='font-weight-500'>Study Note (only pdf):</label>
                            <div className='mt-2'>
                                <input type="file" id="file" onChange={uploadImg} style={{ display: 'none' }} accept="application/pdf" />
                                <button class="btn btn-primary" onClick={showUpload}><i class="icofont-swoosh-up"></i> Upload</button>
                            </div>
                            {
                                pdfFileErr ? <span className='color-red font-size-14'>Upload pdf file</span> : null
                            }
                        </div>




                        <div className='col-sm-4 submits_reset'>


                            <div className='d-grid gap-2 mt-4'>
                                <button className='btn btn-primary btn-lg submits' onClick={onSubmit}><i class="icofont-swoosh-right"></i> Submit</button>
                            </div>


                            <div className='d-grid gap-2 mt-4 ms-3'>
                                <button className='btn btn-secondary btn-lg resets' onClick={onReset}><i class="icofont-ui-reply"></i> Reset</button>
                            </div>
                        </div>

                    </div>




                </div>


            </div>

            <div className='session-list mt-3'>
                <div className='session-list-head'>
                    Study Notes List
                </div>
                <div className='session-list-body mt-2'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Sl. No.</th>
                                <th scope="col">Course</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                studyNotesList.length == 0 ?
                                    <>

                                        <tr>
                                            <td colSpan='4' className='text-center'>Study Notes not Added. Please add session.</td>
                                        </tr>

                                    </>
                                    :
                                    <>
                                        {
                                            studyNotesList.map((item, i) => (

                                                <tr>
                                                    <th scope="row">{i + 1}.</th>
                                                    <td>
                                                        {
                                                            courseList.map((data, i) => (
                                                                data.id == item.course ? data.course : null
                                                            ))
                                                        }

                                                        { }</td>
                                                    <td>
                                                        <button type="button" className="btn btn-secondary btn-sm mx-2" onClick={() => { onDelete(item.id) }} ><i class="icofont-ui-delete"></i> Delete</button>
                                                    </td>
                                                </tr>

                                            ))
                                        }
                                    </>
                            }

                        </tbody>
                    </table>

                </div>

            </div>

            <NotificationContainer />

        </>
    )
}
