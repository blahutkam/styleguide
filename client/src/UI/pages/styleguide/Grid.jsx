import React, { Fragment, useEffect } from 'react';
import CheckboxEditor from '../../components/CheckboxEditor';
import $ from "jquery";

const Grid = () => {
    
    //var TrCSS = classNames("row-details", "is-expanded");

    useEffect(() => {

        $(".contat").hide()
   
     },[])

    return (
        <Fragment>
            <h1 className="contat">Grid</h1>
            <CheckboxEditor/>



        </Fragment>
    );
};

export default Grid
