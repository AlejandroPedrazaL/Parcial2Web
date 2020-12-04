import Table from 'react-bootstrap/Table'

function Serie(props) {
    function renderHeader(text) {
        let res = text.replace(/([A-Z])/g, " $1")
        res = res.charAt(0).toUpperCase() + res.slice(1)
        return res
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {Object.keys(props["data"][0]).map((k,i) => <th key={i}>{k === "id" ? "#" : renderHeader(k)}</th>)}
                </tr>
            </thead>
            <tbody>
                {props["data"].map((el, i) => {
                    return (<tr key={i}>
                        {Object.values(el).map((v,i) => 
                            <td key={i}>{v}</td>
                        )}
                    </tr>)
                })}
            </tbody>
        </Table>
    )
}

export default Serie