import '../../styles/ChangeUnit.scss';


function ChangeUnit({changeUnit, currentUnit}){
    const {unit} = currentUnit;
    return(
        <div className="changeunit">
            <div onClick={(e) => changeUnit(e)} className={unit === "f" ? "changeunit_box changeunit_active" : "changeunit_box"}>
            F
            </div>
            <div onClick={(e) => changeUnit(e)} className={unit === "c" ? "changeunit_box changeunit_active" : "changeunit_box"}>
               C
            </div>
        </div>
    )
}
export default ChangeUnit;