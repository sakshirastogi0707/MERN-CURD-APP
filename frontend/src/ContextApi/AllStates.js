import { useState, useEffect } from 'react';
import TableContext from "./tableContext"
import { GetAllDetails } from '../Service/api';
const TableState = (props) => {

    //getAllDetails, this is a read opration
    const [getDet, setDet] = useState([])
    useEffect(() => {
        getAllDetails();
    }, [getDet])
    const getAllDetails = async () => {
        const response = await GetAllDetails();
        setDet(response.data)
        console.log(response.data,"...............")
    }
    return (
        <TableContext.Provider value={{ getDet }}>
            {props.children}
        </TableContext.Provider>
    )
}

export default TableState;
