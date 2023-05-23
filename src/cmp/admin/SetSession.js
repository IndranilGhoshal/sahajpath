import React, { useEffect, useState } from 'react'
import { addSession, allSession, deleteSession, editSession } from '../../Services/sessionServices'
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default function SetSession() {

    const [sessionList, setSessionList] = useState([])

    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')



    useEffect(() => {
        allSessionFun()
    }, [])

    const allSessionFun = () => {
        var data = {
        }
        allSession(data).then(result => {
            setSessionList(result.data.response)
        })
    }

    const onSubmit = () => {
        var data = {
            "start": start,
            "end": end
        }
        addSession(data).then(result => {
            if (result.data.success) {
                NotificationManager.success(result.data.message);
                setStart("")
                setEnd("")
                allSessionFun()
            }
        })
    }

    const [editBtn, setEditBtn] = useState(false)
    const [editId, setEditId] = useState('')


    const onEdit = (val) => {
        setStart(val.start)
        setEnd(val.end)
        setEditId(val.id)
        setEditBtn(true)
    }

    const onReset = () => {
        setStart("")
        setEnd("")
        setEditId("")
        setEditBtn(false)
    }

    const onEditBtn = () => {
        var data = {
            "id": editId,
            "start": start,
            "end": end
        }

        // console.log(data)
        editSession(data).then(result => {
            if (result.data.success) {
                NotificationManager.success(result.data.message);
                setStart("")
                setEnd("")
                setEditId("")
                setEditBtn(false)
                allSessionFun()
            }
        })

    }


    const onDelete = (val) =>{
        var data = {
            "id":val
        }

        deleteSession(data).then(result=>{
            if(result.data.success){
                NotificationManager.success(result.data.message);
                allSessionFun()
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

                        <div className='col-sm-6'>
                            <label className='font-weight-500'>Session Start:</label>
                            <div className='mt-2'>
                                <input type='number' className='form-control' value={start} onChange={(e) => { setStart(e.target.value) }} />
                            </div>
                        </div>

                        <div className='col-sm-6'>
                            <label className='font-weight-500'>Session End:</label>
                            <div className='mt-2'>
                                <input type='number' className='form-control' value={end} onChange={(e) => { setEnd(e.target.value) }} />
                            </div>
                        </div>

                    </div>

                    <div className='row'>
                        <div className='col-sm-6'>

                            {
                                editBtn ?
                                    <div className='mx-auto d-grid gap-2 mt-4'>
                                        <button className='btn btn-primary btn-lg' onClick={onEditBtn}>Edit</button>
                                    </div>
                                    :
                                    <div className='mx-auto d-grid gap-2 mt-4'>
                                        <button className='btn btn-primary btn-lg' onClick={onSubmit}>Submit</button>
                                    </div>
                            }




                        </div>

                        <div className='col-sm-6'>
                            <div className='mx-auto d-grid gap-2 mt-4'>
                                <button className='btn btn-secondary btn-lg' onClick={onReset}>Reset</button>
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

                        {
                            sessionList.length == 0 ?
                                <>
                                    <tbody>
                                        <tr>
                                            <td colSpan='4' className='text-center'>Session not Added. Please add session.</td>
                                        </tr>
                                    </tbody>
                                </>
                                :
                                <>
                                    {
                                        sessionList.map((item, i) => (
                                            <tbody>
                                                <tr>
                                                    <th scope="row">{i + 1}.</th>
                                                    <td>{item.start}</td>
                                                    <td>{item.end}</td>
                                                    <td>
                                                        <button type="button" className="btn btn-primary btn-sm" onClick={()=>{ onEdit(item)}}>Edit</button>

                                                        <button type="button" className="btn btn-secondary btn-sm mx-2" onClick={()=>{ onDelete(item.id)}}>Delete</button>
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
