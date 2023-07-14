import React, { useEffect, useState } from 'react'
import { addSession, allSession, deleteSession, editSession } from '../../Services/sessionServices'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import {showLoader, hideLoader} from '../../Services/common'

export default function SetSession() {

    const [sessionList, setSessionList] = useState([])

    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')


    const [startErr, setStartErr] = useState(false)
    const [endErr, setEndErr] = useState(false)

    useEffect(() => {
        allSessionFun()
        setTimeout(() => {
            hideLoader()
        }, 1000);
    }, [])

    const allSessionFun = () => {
        var data = {
        }
        allSession(data).then(result => {
            setSessionList(result.data.response)
        })
    }

    const onSubmit = () => {
        setStartErr(false)
        setEndErr(false)

        var err = 0

        if(start==''){
            setStartErr(true)
            err++
        }

        if(end==''){
            setEndErr(true)
            err++
        }


        if(err==0){
            var data = {
                "start": start,
                "end": end
            }
            showLoader()
            addSession(data).then(result => {
                hideLoader()
                if (result.data.success) {
                    NotificationManager.success(result.data.message);
                    setStart("")
                    setEnd("")
                    allSessionFun()
                }else{
                    NotificationManager.error(result.data.message);
                }
            })
        }
    }

    const [editBtn, setEditBtn] = useState(false)
    const [editId, setEditId] = useState('')


    const onEdit = (val) => {
        showLoader()
        setStart(val.start)
        setEnd(val.end)
        setEditId(val.id)
        setEditBtn(true)
        setStartErr(false)
        setEndErr(false)
        setTimeout(() => {
            hideLoader()
        }, 1000);
    }

    const onReset = () => {
        showLoader()
        setStart("")
        setEnd("")
        setEditId("")
        setEditBtn(false)
        setStartErr(false)
        setEndErr(false)
        setTimeout(() => {
            hideLoader()
        }, 1000);
    }

    const onEditBtn = () => {

        setStartErr(false)
        setEndErr(false)

        var err = 0

        if(start==''){
            setStartErr(true)
            err++
        }

        if(end==''){
            setEndErr(true)
            err++
        }

        if(err==0){
            var data = {
                "id": editId,
                "start": start,
                "end": end
            }
            showLoader()
            editSession(data).then(result => {
                hideLoader()
                if (result.data.success) {
                    NotificationManager.success(result.data.message);
                    setStart("")
                    setEnd("")
                    setEditId("")
                    setEditBtn(false)
                    allSessionFun()
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
        deleteSession(data).then(result => {
            hideLoader()
            if (result.data.success) {
                NotificationManager.success(result.data.message);
                allSessionFun()
            }else{
                NotificationManager.error(result.data.message);
            }
        })
    }


    return (
        <>
            <div className='session-form'>
                <div className='session-head'>
                    Add Session
                </div>
                <div className='session-body mt-2'>
                    <div className='row'>

                        <div className='col-sm-4'>
                            <label className='font-weight-500'>Session Start:</label>
                            <div className='mt-2'>
                                <input type='number' className='form-control' value={start} onChange={(e) => { setStart(e.target.value) }} />
                            </div>
                            {
                               startErr?<span className='color-red font-size-14'>Enter the start session</span>:null
                            }
                        </div>

                        <div className='col-sm-4'>
                            <label className='font-weight-500'>Session End:</label>
                            <div className='mt-2'>
                                <input type='number' className='form-control' value={end} onChange={(e) => { setEnd(e.target.value) }} />
                            </div>
                            {
                                endErr?<span className='color-red font-size-14'>Enter the end session</span>:null
                            }
                        </div>


                        <div className='col-sm-4 submits_reset'>

                            {
                                editBtn ?
                                    <div className='d-grid gap-2 mt-4'>
                                        <button className='btn btn-primary btn-lg submits' onClick={onEditBtn}><i class="icofont-ui-edit"></i> Edit</button>
                                    </div>
                                    :
                                    <div className='d-grid gap-2 mt-4'>
                                        <button className='btn btn-primary btn-lg submits' onClick={onSubmit}><i class="icofont-swoosh-right"></i> Submit</button>
                                    </div>
                            }


                            <div className='d-grid gap-2 mt-4 ms-3'>
                                <button className='btn btn-secondary btn-lg resets' onClick={onReset}><i class="icofont-ui-reply"></i> Reset</button>
                            </div>
                        </div>

                    </div>




                </div>


            </div>


            <div className='session-list mt-3'>
                <div className='session-list-head'>
                    Session List
                </div>
                <div className='session-list-body mt-2'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Sl. No.</th>
                                <th scope="col">Session Start</th>
                                <th scope="col">Session End</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sessionList.length == 0 ?
                                    <>

                                        <tr>
                                            <td colSpan='4' className='text-center'>Session not Added. Please add session.</td>
                                        </tr>

                                    </>
                                    :
                                    <>
                                        {
                                            sessionList.map((item, i) => (

                                                <tr>
                                                    <th scope="row">{i + 1}.</th>
                                                    <td>{item.start}</td>
                                                    <td>{item.end}</td>
                                                    <td>
                                                        <button type="button" className="btn btn-primary btn-sm" onClick={() => { onEdit(item) }}><i class="icofont-ui-edit"></i>  Edit</button>

                                                        <button type="button" className="btn btn-secondary btn-sm mx-2" onClick={() => { onDelete(item.id) }}><i class="icofont-ui-delete"></i> Delete</button>
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
