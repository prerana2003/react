import './components.css'

const EmpItem = ({emp, setSelectedEmp, employees, SelectedEmp}) =>{
    
    return(
        <li className='empItem' id={emp.ID}
        onClick={(event) =>{
            setSelectedEmp(emp)
        }}
        >{emp.ID} : {emp.Name}</li>
        
    )
}

const EmpList = (props) =>{
    let EmpListArr = []

    let CloneEmps = [];

    for(let x in props.employees){
        CloneEmps.push(props.employees[x])
    }

    // ------------------Searching------------------------------------
    
    if(props.SearchValue !== undefined){
        if(props.SearchValue.length>0){
            CloneEmps = CloneEmps.filter(function(emp){
                if(emp.Name.includes(props.SearchValue)){
                    return emp;
                }
            })
            for(let i=0;i<CloneEmps.length;i++){ 
                EmpListArr.push(<EmpItem key= {CloneEmps[i].ID}  emp = {CloneEmps[i]} setSelectedEmp = {props.setSelectedEmp} employees={props.employees} SelectedEmp = {props.SelectedEmp}/>)
            }
        }
        else{
            for(let i=0;i<CloneEmps.length;i++){ 
                EmpListArr.push(<EmpItem key= {CloneEmps[i].ID}  emp = {CloneEmps[i]} setSelectedEmp = {props.setSelectedEmp} employees={props.employees} SelectedEmp = {props.SelectedEmp}/>)
            }
        }
    }
    else{
        for(let i=0;i<CloneEmps.length;i++){ 
            EmpListArr.push(<EmpItem key= {CloneEmps[i].ID} emp = {CloneEmps[i]} setSelectedEmp = {props.setSelectedEmp} employees={props.employees} SelectedEmp = {props.SelectedEmp}/>)
        }
    }

    // ----------------------Sorting---------------------------
    if(props.SortBtnID === 'asc'){
        CloneEmps.sort(function(a,b){
            return a.Name.localeCompare(b.Name);
        });
        EmpListArr = []
        for(let i=0;i<CloneEmps.length;i++){ 
            EmpListArr.push(<EmpItem key= {CloneEmps[i].ID} emp = {CloneEmps[i]} setSelectedEmp = {props.setSelectedEmp} employees={props.employees} SelectedEmp = {props.SelectedEmp}/>)
        }
    }
    else if(props.SortBtnID === 'dsc'){
        CloneEmps.sort(function(a,b){
            return b.Name.localeCompare(a.Name);
        });
        EmpListArr = []
        for(let i=0;i<CloneEmps.length;i++){
            EmpListArr.push(<EmpItem key= {CloneEmps[i].ID} emp = {CloneEmps[i]} setSelectedEmp = {props.setSelectedEmp} employees={props.employees} SelectedEmp = {props.SelectedEmp}/>)
        }
    }
    

    return(
        <div>
            <ul id='empList'>{EmpListArr}</ul>
        </div>
    )
}

export default EmpList;