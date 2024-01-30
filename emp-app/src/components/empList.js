import './components.css'

const EmpItem = ({emp, empID, state}) =>{
    let id = '';
    let backColor;
    return(
        <li className='empItem' id={emp.ID} 
        onClick={(event) =>{
            empID(event.target.id) 
            id= event.target.id
            backColor = "navy"
        }} 
        // style={{backgroundColor: (state.EmpID !== undefined && state.EmpID === id) ? backColor : 'darkcyan'}}
        >{emp.ID} : {emp.Name}</li>
    )
}

const EmpList = (props) =>{

    let EmpArr = []

    let new_arr = [];

    for(let x in props.employees){
        new_arr.push(props.employees[x])
    }

    // ------------------Searching------------------------------------
    if(props.leftState.SearchValue !== undefined){
        if(props.leftState.SearchValue.length>0){
            EmpArr = []
            for(let i=0;i<new_arr.length;i++){ 
                if(props.leftState.SearchValue === new_arr[i].Name){
                    EmpArr.push(<EmpItem key= {new_arr[i].ID} emp = {new_arr[i]} empID = {props.empID} employees={props.employees}/>)
                }
            }
        }
        else{
            for(let i=0;i<new_arr.length;i++){ 
                EmpArr.push(<EmpItem key= {new_arr[i].ID}  emp = {new_arr[i]} empID = {props.empID} employees={props.employees}/>)
            }
        }
    }
    else{
        for(let i=0;i<new_arr.length;i++){ 
            EmpArr.push(<EmpItem key= {new_arr[i].ID} emp = {new_arr[i]} empID = {props.empID} employees={props.employees}/>)
        }
    }

    // ----------------------Sorting---------------------------
    if(props.leftState.id === 'asc'){
        new_arr.sort(function(a,b){
            return a.Name.localeCompare(b.Name);
        });
        EmpArr = []
        for(let i=0;i<new_arr.length;i++){ 
            EmpArr.push(<EmpItem key= {new_arr[i].ID} emp = {new_arr[i]} empID = {props.empID} employees={props.employees}/>)
        }
    }
    else if(props.leftState.id === 'dsc'){
        new_arr.sort(function(a,b){
            return b.Name.localeCompare(a.Name);
        });
        EmpArr = []
        for(let i=0;i<new_arr.length;i++){
            EmpArr.push(<EmpItem key= {new_arr[i].ID} emp = {new_arr[i]} empID = {props.empID} employees={props.employees}/>)
        }
    }
    

    return(
        <div>
            <ul id='empList'>{EmpArr}</ul>
        </div>
    )
}

export default EmpList;










// ----------------------------------------------
// if(props.leftState.SearchValue !== null){
    //     let searchTxt = props.leftState.SearchValue

    //     // if(searchTxt.length>=2){
    //         for(let x in props.state){
    //             let k=0;
    //             for(let j=0;j<props.state[x].Name.length;j++){
    //                 if(searchTxt[k] === props.state[x].Name[j]){
    //                     k++;
    //                     if(k>=searchTxt.length){
    //                         new_list[x] = props.state[x]
    //                         console.log(new_list)
    //                         break;
    //                     }
    //                 }
    //                 else{
    //                     break;
    //                 }
    //             }
    //         }
    //         if(new_list !== null){
    //             EmpArr = [new_list]
    //             addInList();
    //             // EmpArr.push(<EmpItem key= {props.state[x].ID} emp = {props.state[x]}/>)
    //             new_list = {};
    //         }
    //         else{
    //             alert("employee not found")
    //             addInList();
    //             // EmpArr.push(<EmpItem key= {props.state[x].ID} emp = {props.state[x]}/>);
    //         }
    //     // }
    //     // else{
    //     //     alert("please enter minimum two characters")
    //     //     addInList();
    //     //     // EmpArr.push(<EmpItem key= {props.state[x].ID} emp = {props.state[x]}/>);
    //     // }
    // }