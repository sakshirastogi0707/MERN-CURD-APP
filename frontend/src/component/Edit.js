import React, { useState, useEffect } from 'react'
import logo from '../images/Curd-logo.png'
import { getAddedDetById, editDetById } from '../Service/api';
import { useParams, useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Edit() {
    const { id } = useParams();
    console.log(id,"..................");
    let history = useHistory();
    const [formdata, setformdata] = useState({
        ProjectName: "",
        ClientName: "",
        PanelName: "",
        PageName: "",
        SectionName: "",
        EventName: "",
        ApiName: "",
        LogicProcess: "",
     })
    const { ProjectName, ClientName, PageName, PanelName, SectionName, EventName, ApiName, LogicProcess } = formdata
    useEffect(() => {
        loadData();
    }, [])
    const loadData = async () => {
        const response = await getAddedDetById(id)
        setformdata(response.data)
        console.log(response.data,"...................");
    }
    const InputEvent = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }
    const editDetails = async (e) => {
        e.preventDefault();
        await editDetById(id, formdata);
        history.push('/add-details')

    }
    const toatify = () => {
        toast.success("Edit Successfully");
    }
    return (
        <div>
            <div className="container">
                <div className="inner_div">
                    <div className="row">
                        <form className="col s9" onSubmit={editDetails}>
                            <img src={logo} alt="cointab-logo" />
                            <div className="row-2">
                                <div className="input-field row-2">
                                    <input id="icon_prefix" type="text" name="ProjectName" value={ProjectName} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_prefix">Project Name</label>
                                </div>

                                <div className="input-field row-2">
                                    <input id="icon_email" type="text" name="ClientName" value={ClientName} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_email">Client Name</label>
                                </div>
                                <div className="input-field row-2">
                                    <input id="icon_prefix" type="text" name="PanelName" value={PanelName} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_prefix">Panel Name</label>

                                </div>
                                <div className="input-field row-2">
                                    <input id="icon_prefix" type="text" name="PageName" value={PageName} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_prefix">Page Name</label>

                                </div>
                                <div className="input-field row-2">
                                    <input id="icon_prefix" type="text" name="SectionName" value={SectionName} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_prefix">Section Name</label>

                                </div>
                                <div className="input-field row-2">
                                    <input id="icon_prefix" type="text" name="EventName" value={EventName} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_prefix">Event Name</label>

                                </div>
                                <div className="input-field row-2">
                                    <input id="icon_prefix" type="text" name="ApiName" value={ApiName} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_prefix">Api Name</label>

                                </div>
                                <div className="input-field row-2">
                                    <input id="icon_prefix" type="text" name="LogicProcess" value={LogicProcess} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_prefix">Logic Process</label>

                                </div>
                            </div>
                            <button className="btn waves-effect waves-light red " type="submit" onClick={toatify}>Edit
                                <i className="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    )
}
