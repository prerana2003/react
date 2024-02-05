import './components.css'

const Toolbar = (props) =>{
    let SearchText;
    let id;

    function onAddbutton(){
        props.setShowform("AddEmpForm");
        props.onSetFormState();
    }

    return(
        <div>
            <input type='text' placeholder='Enter text' onChange={(event)=>
                    {SearchText = event.target.value
                    props.onSearch(SearchText)}}/>
            <button type='button' id='asc' onClick={
                (event)=>{
                    id = event.target.id
                    props.sort(id)
                }} 
                style = {{borderWidth: (props.SortBtnID === "asc") ? '3px' : ''}}>Asc</button>

            <button type='button' id='dsc' onClick={
                (event)=>{
                    id = event.target.id
                    props.sort(id)
                }} 
                style = {{borderWidth: (props.SortBtnID === "dsc") ? '3px' : ''}}>Dsc</button>

            <button type='button' disabled = {(props.selectedEmp) ? false : true } onClick={
                (event) =>{
                    props.onDeleteClick()
                }
            }>Del</button>

            <button type='button' onClick={() => {props.setShowform("AddEmpForm");}}>+</button>
            <hr/>
        </div>
    )
}

export default Toolbar;