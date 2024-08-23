
import React, {useState} from 'react'

const Textarea = (props) => {
  const [todo, setTodo]=useState("");
  const [todos, setTods]=useState([]);
  
const change =(elem)=>{
setTodo(elem.target.value);

}

const save = ()=>{
    
      if(!todo){
         alert("please write your task..!!")
        
      }
      else{
        setTods([...todos,todo])
      setTodo('')   
     
      }
     
     
}

const itemsDelete =(index)=>{
  let d = [...todos];
  d.splice(index,1)
  setTods(d)
}

const edit =(index)=>{

  let d = [...todos];
  d.splice(index,1)
  setTods(d)
 

 let tFind = todos.filter((e)=>{
      return ( 
               index!==e
      )
 })
 setTodo(tFind)

}
  return (
    <div className='h-screen w-screen'>
    <div className={` h-full flex justify-center  items-center bg-slate-600`}>
     <div className="container mb-20 flex flex-col  h-4/5 w-2/5 p-6 rounded-t-3xl  bg-slate-950 ">
                 <h1 className='text-center text-white text-5xl font-serif font-bold'>TODO</h1>
                  <input  value={todo} onChange={change} type="text" placeholder='TYPE YOUR TASk..!!' className=' h-10 placeholder:tracking-widest font-bold  mt-4 w-full mr-5 placeholder:italic rounded-2xl placeholder:text-gray-800 text-center'/>
                  <button onClick={save} className='text-center font-bold text-white h-10 uppercase text-3xl mt-2 rounded-xl font-serif bg-slate-500'>add</button>
                  <div  className='container mt-5  h-10 justify-center rounded-full flex'>
                               <h1>{todos.length === 0 && <p className='text-emerald-600 uppercase font-serif '>you have no todos..!! 😊 </p>} {todos.length!==0 && <p className='text-emerald-600 font-serif uppercase  '>your todos..!! 😍</p>}</h1>
                               
                  </div>
             
             {todos.map((e, index)=>{
             
              return(
                <div  className="flex gap-60  bg-zinc-500 p-2 rounded-2xl justify-between px-5"> 
                <h4 className='text-white   text-wrap '>{e}</h4>
            
                <div className="flex gap-10 ">
                <button  onClick={() => itemsDelete(index)} className='text-white hover:text-red-500'>Delete </button>
                <button className='hover:tracking-widest hover:text-green-500 ' onClick={()=>edit(index)}>edit</button>
                </div>
               
              </div>
              )
             })}
           
                 
     </div>
    
    </div> 
   
     </div>
  )
}

export default Textarea
