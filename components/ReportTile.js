export default function ReportTile(props){
    const reportItem = props.reportItem;
    return <div>
    <h2>{reportItem.content.title}</h2>
    <p>{reportItem.content.issue}</p>
</div>
}