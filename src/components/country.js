
function Country(props){
    return (
        <div className="country">
            <h3 className="country__name">{props.name}</h3>
            <h4 className="country__continent">{props.continent}</h4>
            <img className="country__flag" src={props.flag} alt={props.name} width="140"/>
            <div className="country__size">{`${props.countrySize} km2`}</div>
        </div>
    )
}

export default Country;