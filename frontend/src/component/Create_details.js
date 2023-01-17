import React, {useState,useEffect} from 'react'
import '../Style/main.css'
import logo from '../images/Curd-logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//   import {useHistory } from 'react-router-dom'
 import axios from 'axios';
export default function Create_details(props) {
//   let history = useHistory();
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
const [data, setData] = useState([]);

const InputEvent = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
}
function addDetails(e) {
    e.preventDefault();
        axios.post('http://localhost:4000/postDetails', formdata).then(res => {
        setData(res.data);
        console.log(res.data,".................")
     })
}
// showing error msg
const toatify =()=>{
    toast.error(data)
}
return (
    <div>
        <div className="container">
            <div className="inner_div">
                <div className="row">
                    <form className="col s9" onSubmit={addDetails}>
                        <img src={logo} alt="cointab-logo" />
                        <div className="row-2">
                            <div className="input-field row-2">
                                <input id="icon_prefix" type="text" name="ProjectName" value={formdata.ProjectName} onChange={InputEvent} className="validate" />
                                <label htmlFor="icon_prefix">Project Name</label>
                            </div>

                            <div className="input-field row-2">
                                <input id="icon_email" type="text" name="ClientName" value={formdata.ClientName} onChange={InputEvent} className="validate" />
                                <label htmlFor="icon_email">Client Name</label>
                            </div>
                            <div className="input-field row-2">
                                <input id="icon_prefix" type="text" name="PanelName" value={formdata.PanelName} onChange={InputEvent} className="validate" />
                                <label htmlFor="icon_prefix">Panel Name</label>

                            </div>
                            <div className="input-field row-2">
                                <input id="icon_prefix" type="text" name="PageName" value={formdata.PageName} onChange={InputEvent} className="validate" />
                                <label htmlFor="icon_prefix">Page Name</label>

                            </div>
                            <div className="input-field row-2">
                                <input id="icon_prefix" type="text" name="SectionName" value={ formdata.SectionName} onChange={InputEvent} className="validate" />
                                <label htmlFor="icon_prefix">Section Name</label>

                            </div>
                            <div className="input-field row-2">
                                <input id="icon_prefix" type="text" name="EventName" value={formdata.EventName} onChange={InputEvent} className="validate" />
                                <label htmlFor="icon_prefix">Event Name</label>

                            </div>
                            <div className="input-field row-2">
                                <input id="icon_prefix" type="text" name="ApiName" value={formdata.ApiName} onChange={InputEvent} className="validate" />
                                <label htmlFor="icon_prefix">Api Name</label>

                            </div>
                            <div className="input-field row-2">
                                <input id="icon_prefix" type="text" name="LogicProcess" value={formdata.LogicProcess} onChange={InputEvent} className="validate" />
                                <label htmlFor="icon_prefix">Logic Process</label>

                            </div>
                             </div>
                        <button className="btn waves-effect waves-light red " type="submit" onClick={toatify}>Create
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
