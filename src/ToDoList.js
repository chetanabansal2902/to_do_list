//import { Update } from '@material-ui/icons';
// import { AirlineSeatLegroomNormal } from '@material-ui/icons';
import React, { useState } from 'react';



const ToDoList = () => {
    const [inputlist, setinputlist] = useState("buy apple");
    const [items, setitems] = useState([]);
    const [itemState, setitemState] = useState([]);
    const eventl = (event) => {
        setinputlist(event.target.value);

    }
    const listitm = () => {
        // const c = true
        // setitemState([...itemState],c)
        itemState.push(true)
        setitems((olditems) => {
            
            // itemState.push(true)
            return [...olditems, inputlist];
        })
        setinputlist('')
    }
    const deleteitm = (indexdl) => {
        const abc = items.filter((value, index) => {
            return index !== indexdl;

        });
        setitems(abc);
    }
    const edititm = (index) => {
        
        const item = itemState[index] = false;
        setitemState([...itemState], item)
    }
    const editList = (event, index) => {
        const thing = items[index] = event.target.value;
        setitems([...items], thing)
    }

    const normalValue = (index,event) => {
        const item = itemState[index] = true;
        setitemState([...itemState], item)
    }
    return (
        <>
            <div className="maindiv">
                <div className="centerdiv">

                    <br />
                    <h1>To Do List</h1>
                    <input type="text" placeholder="eneter items" value={inputlist} onChange={eventl} />
                    <button onClick={listitm}>+</button>
                    <ol>

                        {items.map((itemv, index) => {
                            return (
                                <>
                                    {itemState[index] ? 
                                     <div>
                                        <button   onClick={() => {
                                            deleteitm(index)
                                        }}>delete</button>
                                        <button  onClick={() => {
                                            edititm(index)
                                        }}>edit</button>

                                        <li  key={index}>{itemv}</li>
                                        </div>
                                        :
                                        <div>
                                            
                                            <input   value={items[index]} onChange={(event) => { editList(event, index) }} />
                                            <button onClick={(event)=>normalValue(index,event)} key={index}>save</button>
                                           
                                            </div>
                                    }
                                </>

                            )
                        }


                        )}
                    </ol>


                </div>
            </div>




        </>
    )
};

export default ToDoList;



