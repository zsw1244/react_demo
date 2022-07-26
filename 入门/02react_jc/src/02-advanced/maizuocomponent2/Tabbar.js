const Tabbar = (props)=>{

    // function handleClick(index){

    //     props.myevent(index)
    // }

    return <div>
        <ul>
            {
                props.list.map( (item,index)=>
                <li key={item.id} className={props.current=== index? 'active':''} onClick={()=>props.myevent(index)}>{item.text}</li>    
                )
            }
        </ul>
    </div>
}

export default Tabbar