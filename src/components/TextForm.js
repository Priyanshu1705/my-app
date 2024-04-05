import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upperCase", "success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
         let newText = text.toLowerCase();
         setText(newText)
         props.showAlert("Converted to lowerCase", "success");
     }
     const handleCopy = ()=>{
         var text = document.getElementById("myBox");
         text.select();
         navigator.clipboard.writeText(text.value);
         props.showAlert("Copied to clipboard", "success");
     }
     const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces", "success");
    }
     const handleClearClick = ()=>{
         let newText = (" ");
         setText(newText)
         props.showAlert("Cleared all text", "success");
     }
    const handleOnChange = (event)=>{
       // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState();
    //text = "new text"; //wrong way
    //setText("new text");  //correct way
  return (
    <>
        <div className = "container" style={{color : props.mode==='dark'?'white':'black'}} >
            <h1 >{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor : props.mode==='dark'?'#2d3238':'white', color : props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
            </div>
            <button className = "btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className = "btn btn-primary mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className = "btn btn-primary mx-3" onClick={handleClearClick}>Clear text</button>
            <button className = "btn btn-primary mx-3" onClick={handleCopy}>Copy text</button>
            <button className = "btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className='container my-3' style={{color : props.mode==='dark'?'white':'black'}}>
            {/*<h1>Your text summary</h1>*/}
        </div>
    </> 
  )
}
