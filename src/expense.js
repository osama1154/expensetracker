import React,{useState} from 'react';

function Expense() {
 
    const [addHist,setHist] = useState([
         { Cash: 500, desc:"Cash" },
         { Cash: 200, desc:"Book" },
         { Cash: -40, desc:"Camera" }
    ])
    
    const [item,setItem] = useState('')
    
    const handleSubmit = (event) =>{
    event.preventDefault();
        setHist([...addHist,{
            desc:item.desc,
            Cash:item.Cash
        }])          
   }
   const getExpense=()=>{
    let expense = 0;
    for(var i= 0; i < addHist.length; i++)
    {
        if (addHist[i].Cash < 0) {
            expense -=  addHist[i].Cash

        }
    }
    return expense;
}
const getIncome=()=>{
    let income = 0;
    for(var i= 0; i < addHist.length; i++)
    {
        if (addHist[i].Cash > 0) {
            income += Number(addHist[i].Cash)

        }
    }
    return income;
}
    return (
          <div className='cover'>
        <div className='conta'>
            <h1 className='text-C'>Expense Tracker</h1><br />
            <h2>Your Balance<br /> ${getIncome() - getExpense()} </h2>
            <div className='incomeExpense'>
                <h2>Income <br/> ${getIncome()}</h2>
                <h2>Expense<br />${getExpense()}</h2>
            </div>
            <h3>History</h3>
            <hr />                                                                                                       
            <ul>
                {addHist.map((add,index)=>{
                    return(
                    <li key={index}>
                        <span><h5>{add.desc}</h5></span>
                        <span><h5>{add.Cash}</h5></span>
                    </li>
                    )
                })}
            </ul>
               
            <div className='addTrans'>
                <h3>Add Transaction</h3>
                <hr/> 
                <form onSubmit={handleSubmit}> 
                    <label>Text</label><br />
                    <input type='text' placeholder='Enter Description..' onChange={e => setItem({...item,desc:e.target.value}) } required className='form-control'/>
                    <label>Amount</label><br />
                    <input type='text' placeholder='Enter Amount' required  onChange={e=>setItem({...item,Cash:e.target.value})} className='form-control'/><br/>
                    <button type='submit'  className='form-control'>Add Transaction</button>
                </form>
            </div>   
        </div>
        </div>
    )
}
      
export default Expense;   