import '../../styles/ChangeUnit.scss';


function ChangeUnit(props){
    return(
        <div className="changeunit">
            <div className="changeunit_box changeunit_active">
            <p className="changeunit_text">F</p>
            </div>
            <div className="changeunit_box">
                <p className="changeunit_text">C</p>
            </div>
        </div>
    )
}
export default ChangeUnit;