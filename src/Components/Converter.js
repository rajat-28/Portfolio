import React ,{useState}from 'react'

export default function Converter() {
    const clickupper=()=>{
        console.log("Clicked")
        let newT=(((text)*9)/5)+32;
        setText(newT)
    }
    const clicklower=()=>{
      console.log("Clicked")
      let newT=((text-32)*5)/9;
      setText(newT)
  }
    const mchange=(event)=>{
        console.log("Change")
        setText(event.target.value)
    }
    const [text,setText]=useState("Enter the Temperature in Celsius")
  return (
    <>
    <div className='container' >
     <h1>Converter</h1>
     <div class="mb-3">
     <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={mchange} ></textarea>
       {/* we have to pass a method onchange because when we change Something than text should be changed and this change will be passed as an even t */}
       </div>
     <button className='btn btn-primary mx-2' onClick={clickupper} >Convert to Fahrenheit</button>
     <button className='btn btn-primary mx-2' onClick={clicklower} >Convert to Celsius</button>
     </div>
     {/* <div className='container'>
      <h1>Converted Value:</h1>
      <p>{0.08*text.split(" ").length} Fahrenheit</p>
      <h3>Preview</h3>
      <p>{text}</p>

     </div> */}
    </>
  )
}
