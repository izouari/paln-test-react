import React from 'react';
import { useSelector } from "react-redux";
import PlanningCollaborateur from "../PlanningCollaborateur"
import { isPlanningLoading } from '../store/selectors';


const PlanningBody = () => {


    return (
        <PlanningCollaborateur />

    )
}

export default PlanningBody