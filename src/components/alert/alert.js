import '../../styles/Alert.scss';

function Alert({currentStatusData}){
    const {description, sender_name} = currentStatusData.alerts[0];
    return(
        <div className="alert">
            <div className="alert_header">
                <div className="alert_img_container">
                    <img className="alert_img" alt="icon" src={process.env.PUBLIC_URL + "/bell.png"}></img>
                </div>
                <div className="alert_title">
                    <p className="alert_authority">{sender_name}</p>
                </div>
            </div>
            <div className="alert_body">
                <p className="alert_description">{description}</p>
            </div>
        </div>
    )
}

export default Alert;