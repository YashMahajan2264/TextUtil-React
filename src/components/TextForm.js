import React , {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange =(event)=>{
    setText(event.target.value);
   
  }
  const handleEmailClick = () => {
    // Regular expression to match an email
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;

    // Extracting the email from text
    const foundEmail = text.match(emailPattern);

    if (foundEmail) {
      setExtractedEmail(foundEmail[0]);  // Set the extracted email to be displayed
    } else {
      setExtractedEmail('No email found');
    }
  }
  
  const [text , setText] = useState('');
  const [extractedEmail, setExtractedEmail] = useState('');

  return (
    <>
    <div className='container' style={{color :props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor :props.mode==='light'?'white':'grey',
          color :props.mode==='dark'?'white':'#042743'
        }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleEmailClick}>Extract Email</button>
    </div>
    <div className="container my-3 " style={{ color :props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text Summary</h2>
      <p>{text.length > 0 ? text.split(" ").length : 0} words and {text.length} characters</p>
      <p>Extracted Email: {extractedEmail}</p> 
      <p>{0.08 * text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
    </div>
    </>
  )
}
