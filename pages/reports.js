import React, { useEffect } from "react";
import { useState } from "react";
import firebase from "../components/firebase.js"
import ReportTile from "../components/ReportTile.js";
export default function reports(){
	const [repState, setRepState] = useState(false);
	const [reportlist, setReportlist] = useState([]);
	const replist = [];
	
	firebase.firestore().collection("reports").get().then(doc => {	
		doc.docs.forEach(snapshot => {
			replist.push(snapshot.data());
		});
		setRepState(true);
	});

	useEffect(() => {
		setReportlist(replist);
	}, []);
	
	
	return <React.Fragment>
	<p>Reports</p>
	{reportlist.length === 0?null:<ReportTiles reportlist = {reportlist}/>}
	</React.Fragment>
}

const ReportTiles = (props)=>{
	return <React.Fragment>
		{props.reportlist.map((reportItem, index)=><ReportTile key = {index} reportItem = {reportItem}/>)}
	</React.Fragment>
}