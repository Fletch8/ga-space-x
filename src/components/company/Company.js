const Company =(props) => {
    const { student, ceo, employees, name, valuation, vehicles } = props.company

    return(
        <div>
            <p>Student: {student}</p>
            <p>ceo: {ceo}</p>
            <p>employees: {employees}</p>
            <p>name: {name}</p>
            <p>vehicles: {vehicles}</p>
            <p>valuation: {valuation}</p>
        </div>
    )
}

export default Company;