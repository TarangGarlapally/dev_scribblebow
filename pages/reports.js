import React, { useEffect } from "react";
import { useState } from "react";
import firebase from "../components/firebase.js"
import ReportTile from "../components/ReportTile.js";
import styles from "../styles/Reports.module.css";

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
	
	
	return <div className = {styles.pageBody}>
	{reportlist.length === 0?null:<ReportTiles reportlist = {reportlist}/>}
	</div>
}

const ReportTiles = (props)=>{
	return <React.Fragment>
		{props.reportlist.map((reportItem, index)=><ReportTile key = {index} reportItem = {reportItem}/>)}
	</React.Fragment>
}