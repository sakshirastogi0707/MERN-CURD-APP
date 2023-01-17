import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { deleteDataById, GetAllDetails } from '../Service/api'
import tableContext from '../ContextApi/tableContext';
export default function View_details() {
  const context = useContext(tableContext)
  const { getDet } = context
  const mapData = getDet;
  const deleteDataDetails = async (id) => {
    await deleteDataById(id);
    GetAllDetails();
  }
  return (
    <div className="container table-responsive">
      <table className="table table-bordered">
        <thead className="danger">
          <tr>
            <th>id</th>
            <th>Project Name</th>
            <th>Client Name</th>
            <th>Panel Name</th>
            <th>Page Name</th>
            <th>Section Name</th>
            <th>Event Name</th>
            <th>Api Name</th>
            <th>Logic Process</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mapData.map((list) => {
            return (
              <tr>
                <td >{list._id}</td>
                <td>{list.ProjectName}</td>
                <td>{list.ClientName}</td>
                <td>{list.PanelName}</td>
                <td>{list.PageName}</td>
                <td>{list.SectionName}</td>
                <td>{list.EventName}</td>
                <td>{list.ApiName}</td>
                <td>{list.LogicProcess}</td>
                <td><button className="btn waves-effect waves-light red " type="buttion">
                  <i className="material-icons right"><Link to={`/edit/${list._id}`}>edit</Link></i>
                </button> <button className="btn waves-effect waves-light blue" type="buttion" onClick={() => deleteDataDetails(list._id)}>
                    <i className="material-icons right">delete</i>
                  </button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>

  )
}
