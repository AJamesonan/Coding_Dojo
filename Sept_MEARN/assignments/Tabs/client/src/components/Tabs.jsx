
import { useState } from "react";




const Tabs = (props) =>{
    const [tabs, setTabs] = useState([])
    const [content, setContent] = useState("");

    const createTab = (e) =>{
        e.preventDefault();
        setTabs([...tabs,content])
    }

    return (
    <div>
            <form onSubmit={createTab}>
                <label>Tabs:</label>
                <input type="text" onChange = {(e) => setTabs(e.target.value)} /> <br></br>
                <input type="text" onChange = {(e) => setContent(e.target.value)} />
                <input type="submit" value="Create Tab" />
            </form>

        <div>
            {
                tabs.map((content,idx) =>{
                    return(
                        <div key={idx}>
                            <h1>{tabs[idx]}{idx+1}</h1>
                        <p>{content}</p>
                        </div>
                    )
                })
            }
        </div>

    </div>
    )
}

export default Tabs