import StarIcon from '@mui/icons-material/Star';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Relogio from "./Relogio"
import "../estilo.css"
function Card(props) {
    return (
        <div className="Card" style={{
            width:props.width,
            background: "#fff",
            borderRadius: "10px",
        }}
        >
            <div style={{
                padding: "10px",
            }}>
                <div style={{
                    display: "flex",
                    gap: "10px"
                }}>
                    <div style={{
                        background: "#ef611c",
                        color: "#fff",
                        fontSize: "1.2vh",
                        width: "6vh",
                        height: "6vh",
                        borderRadius: "5px",
                        padding: "5px",
                        textAlign: "center",
                        lineHeight:"2vh"
                    }}>
                        <h1>{props.promocao}</h1>
                        <ArrowDropDownIcon />
                    </div>
                    <div style={{
                        fontSize: "1.1vh",
                        color: "#ef611c",
                        textTransform: "uppercase",
                        textAlign: "center",
                        border: "1px solid #ef611c",
                        borderRadius: "5px",
                        padding: "5px",
                        height:"6vh",
                        lineHeight:"1.5vh"
                    }}>
                        <h2 style={{margin:"0",fontSize:"1.5vh"}}>Restam</h2>
                        <h1 style={{ color: "#ff4705",margin:"0",fontSize:"1.5vh"}}>{props.quantidade}</h1>
                        <h2 style={{fontSize:"1.5vh"}}>Unid.</h2>
                    </div>
                    <div style={{
                        color: "#ef611c",
                        fontSize: "1vh",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end"
                    }}>
                        <div><StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /></div>
                        <h2 style={{
                            fontSize: "2vh",
                            color: "#777",
                        }}>({props.vendidos})</h2>
                    </div>
                </div>
                <div style={{
                    textAlign: "center",
                    padding: "2.5vh 0"
                }}>
                    <img src={props.imagem} alt="Produto" style={{
                        width: "80%"
                    }} />
                </div>
                <div style={{
                    paddingLeft: "10px"
                }}>
                    <div>
                        <h1 style={{
                            textAlign: "justify",
                            fontSize: "3vh",
                            color: "#444",
                            letterSpacing: "0.1px",
                        }}>{props.nome}</h1>
                    </div>
                    <div>
                        <h3 style={{
                            fontSize: "2vh",
                            color: "#888",
                            textDecoration: "line-through"
                        }}>{props.valorInicial}</h3>
                        <h1 style={{
                            fontSize: "4.5vh",
                            color: "#ef611c"
                        }}>{props.valorNovo}</h1>
                        <p style={{
                            color: "#888",
                            fontSize: "2vh",
                            paddingBottom: "4vh"
                        }}>À vista no PIX</p>
                    </div>
                </div>
                
            </div>
            <div style={{
                    background: "#ef611c",
                    display: "flex",
                    borderRadius:"5px",
                    border:"1px solid #ef611c"
                }}>
                    <div style={{
                        background:"#ef611c",
                        width:"20%",
                        borderRadius:"5px 0  0 5px",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        color:"#fff"
                    }}><AccessTimeIcon /></div>
                    <div style={{
                        width:"80%",
                        background:"#fff",
                        borderRadius:"0 5px 5px 0",
                        textAlign:"center",
                        color:"#ef611c"
                    }}>
                        <h1 style={{fontSize:"2vh"}}>Oferta termina em :</h1>
                        <Relogio />
                        </div>
                </div>
        </div>
    )
}

export default Card;