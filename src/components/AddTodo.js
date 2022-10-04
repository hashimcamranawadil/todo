import React, {useState}from "react";
const AddTodo = ({onAdd}) => {
const [text, setText] = useState('');
const [date, setDate] = useState('');
const [time, setTime] = useState('');
 const onSubmit = (e) => {
    e.preventDefault();
    console.log(text, time, date)
    if(!text){    
      alert('Invalid Input.')
      return;
    }
   

    if(!date){    
      alert('Ivalid Input')
      return;
    }
   
   if(!time){    
      alert('Ivalid Input')
      return;
    }
   
    if(text&&date&&time){
      onAdd(text,date,time);
      setText("")
      onAdd(date);
      setDate("")
      onAdd(text,date,time);
      setTime("")
    }

  };

 
  return (
    <div className="col">
    <form style={{padding:'10px'}} onSubmit={onSubmit} method="POST">
      <label>Task</label>
      <input type="text" placeholder="Add todo"  value={text} onChange={(e) => setText(e.target.value)} style={{width:'100%',height:'30px', padding:'5px'}}className="form-control form-control-lg"/>
        <br/>
        <label>Date</label>
    
        <input type="date" placeholder="Date"  value={date} onChange={(e) => setDate(e.target.value)} style={{width:'100%',height:'30px', padding:'5px'}}className="form-control form-control-lg"/>
        <br/>
        <label>Time</label>
    
        <input type="time" placeholder="Time"  value={time} onChange={(e) => setTime(e.target.value)} style={{width:'100%',height:'30px', padding:'5px'}}className="form-control form-control-lg"/>
        <br/>
     <button style={{backgroundColor:'green', width:'100%',margin:'10px 0'}} className="btn btn-lg btn-success"><b>Save</b></button>
     </form>
    </div>

    
    )
    
    
};



export default AddTodo;
