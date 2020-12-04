import React, { useState, useEffect } from 'react'
import Serie from './Serie'
import 'bootstrap/dist/css/bootstrap.min.css';

function Tabla(props) {
    const [serie, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            if(!navigator.onLine){
                if(localStorage.getItem("serie") === null) {
                    setData("Loading...")
                } else {
                    setData(localStorage.getItem("serie"));
                }
            } else {
                const url = props.url
                const res = await (await fetch(url)).json()
                let dData = []
                let redData = []
                redData = res.map(d => {
                    let newObj = {}
                    newObj["description"] = d["description"]
                    newObj["channel"] = d["channel"]
                    newObj["poster"] = d["poster"]
                    newObj["name"] = d["name"]
                    newObj["webpage"] = d["webpage"]
                    newObj["seasons"] = d["seasons"]
                    delete d["poster"]
                    delete d["webpage"]
                    delete d["seasons"]
                    dData.push(newObj)
                    return d
                })
                setData(redData.slice())
                localStorage.setItem("serie", redData.slice());
            }
        }
        fetchData()
    }, [])


    function render() {
        if (serie.length > 0) {
            return (
                <Serie
                    data={serie}
                />
            )
        } else {
            return (
                <div>
                </div>
            )
        }
    }




    return render()
}

export default Tabla