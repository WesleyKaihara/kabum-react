import "./estilo.css";
import React from 'react'
import Kabum from "./kabum-logo.png";
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Relogio from "./Components/Relogio"
import Card from "./Components/Card"
import Propaganda1 from "./propaganda1.jpg"
import Propaganda2 from "./propaganda2.jpg"

function App() {
  return (
    <div className="App">
      <header>
        <div className="cabecalho" >
          <MenuIcon style={{
            fontSize: "6vh",
            paddingRight: "3vh",
            color: "#fff"
          }} />
          <img src={Kabum} className="header-logo" alt="LogoKabum" />

          <div className="pesquisa" >
            <input type="text" placeholder="Busque aqui" className="buscar" ></input>
          </div>
          <div className="header-login branco" style={{ display: "flex", alignItems: "center" }}>
            <PersonIcon /><h1 style={{ paddingLeft: "2vh" }}>Faça <a href="/">Login </a> ou crie seu <a href="/">Cadastro</a></h1>
          </div>
          <div className="header-links" style={{ color: "#ccdfef" }}>
            <HeadsetMicIcon />
            <FavoriteIcon />
            <LocalGroceryStoreIcon />
          </div>
        </div>
        <div className="Sub-menu">
          <div className="Alinhar">
            <div className="menu">
              <ul>
                <li ><div>Todos os Departamentos <KeyboardArrowDownIcon /></div></li>

                <li>lançamentos</li>
                <li>Destaques</li>
                <li>PC gamer</li>
                <li>Eletrônicos</li>
                <li>Seja Prime</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="banner"></div>
      <main>
        <div className="contador">
          <div className="contator-align">
            <h1>Natal Ninja</h1>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1vh"

            }}
            ><h1>A promoção termina em  </h1> <AccessTimeIcon />  <Relogio/></div>
          </div>
        </div>

        <div className="Produtos-content" style={{ background: "#fafafb", width: "100%" }}>
          <div>
            <div className="Container" style={{
              width: "90%",
              margin: "auto",

            }}>
              <div className="Produtos" style={{
                width: "100%",
                background: "#fafafb",
                display: "flex",
                padding: "20px",
                gap: "5vh",
                justifyContent: "center"
              }}>
                <Card
                  promocao="40%"
                  quantidade="200"
                  vendidos="55"
                  imagem={Kabum}
                  nome="Hedset Gamer HyperX Cloud Stinger"
                  valorInicial="R$250,00"
                  valorNovo="R$150,00" />
                <Card
                  promocao="40%"
                  quantidade="200"
                  vendidos="55"
                  imagem={Kabum}
                  nome="Hedset Gamer HyperX Cloud Stinger"
                  valorInicial="R$250,00"
                  valorNovo="R$150,00" />

                <Card
                  promocao="40%"
                  quantidade="200"
                  vendidos="55"
                  imagem={Kabum}
                  nome="Hedset Gamer HyperX Cloud Stinger"
                  valorInicial="R$250,00"
                  valorNovo="R$150,00" />
                <Card
                  promocao="40%"
                  quantidade="200"
                  vendidos="55"
                  imagem={Kabum}
                  nome="Hedset Gamer HyperX Cloud Stinger"
                  valorInicial="R$250,00"
                  valorNovo="R$150,00" />
              </div>
              <div style={{
                display: "flex",
                justifyContent: "end",
                fontSize: "1.4vh",
                color: "#ef611c",
                textDecoration: "underline",
                textTransform: "uppercase",
              }}>
                <h1 >Todas as Ofertas</h1>

              </div>
            </div>
          </div>
          <div className="Anuncios" style={{
            display: "flex",
            width: "90%%",
            justifyContent: "space-around",
            paddingTop: "5vh",
            paddingBottom: "5vh",
            margin: "auto"
          }}>
            <div>
              <img src={Propaganda1} alt="Propaganda1" />
            </div>
            <div>
              <img src={Propaganda2} alt="Propaganda2" />
            </div>
          </div>
        </div>
      </main>
        
    </div>

  );
}

export default App;
