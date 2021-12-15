function Departamento(props){
    return(
        <div 
        style={{

            width:props.width,
            height:"30vh",
            marginTop:"5vh",
        }}>
            <h1 style={{
                background:"#ededed",
                textAlign:"center",
                color:"#000e7c",
                fontSize:"3.4vh",
                margin:"0"
            }}>{props.titulo}</h1>
            <div style={{
                display:"flex",
                justifyContent:"center",
                background:"#ededed",
                height:"18vh"
            }}>
                
                <img src={props.imagem} style={{width:"35vh",height:"25vh"}} alt="Departamento"/>
            </div>

        </div>

    )
}

export default Departamento;