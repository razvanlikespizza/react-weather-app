import '../../styles/Alert.scss';

function Alert({currentStatusData}){
    return(
        <div className="alert_container">
            {currentStatusData.alerts.map((el, idx) => {
            return (
            <div key={idx} className='alert'>
                <div className="alert_header">
                    <div className="alert_img_container">
                        <img className="alert_img" alt="icon" src={process.env.PUBLIC_URL + "/bell.png"}></img>
                    </div>
                    <div className="alert_title">
                        <p className="alert_authority">{el.sender_name}</p>
                    </div>
                </div>
                <div className="alert_body">
                    <p className="alert_description">{el.description}</p>
                </div>
            </div>
            )
            })}
        </div>
    )
}

export default Alert;