import React, {useState} from "react";

const BoxGenerator = (props) => {
    const [color, setColor] = useState("");
    let [box, setBox] = useState([]);


    const createBox = (e) =>{
        e.preventDefault();
        setBox([...box,color])
    }

    return (
    <div>
            <form onSubmit={createBox}>
                <label>Box Color:</label>
                <input type="text" onChange = {(e) => setColor(e.target.value)} />
                <input type="submit" value="Create Box" />
            </form>

        <div>
            {
                box.map((color,idx) =>{
                    return(
                        <div key={color}>
                        <p style={{backgroundColor:color}}>{color}</p>
                        </div>
                    )
                })
            }
        </div>

    </div>
    )
}

export default BoxGenerator;