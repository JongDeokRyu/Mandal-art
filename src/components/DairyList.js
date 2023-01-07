import React from 'react';
import { Table } from 'react-bootstrap';
import BodyCss from '../pages/Body.css';

const DairyList = ({dairy}) => {
    return(


    <tr>
      <td>1</td>
      <td>{dairy.subject}</td>
      <td>{dairy.saveDate}</td>
    </tr>


        
    )
}

export default DairyList;