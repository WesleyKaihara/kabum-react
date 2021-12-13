import "./estilo.css";
import React from 'react'
import Kabum from "./images/kabum-logo.png";
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Relogio from "./Components/Relogio";
import Card from "./Components/Card";
import Propaganda1 from './images/propaganda1.jpg';
import Propaganda2 from './images/propaganda2.jpg'
import Celular from './images/Celular.png';
import Departamento from "./Components/Departamentos";
import Hardware from './images/hardware.png';
import Perifericos from './images/perifericos.png';
import Games from './images/games.png';
import Tv from './images/tv.png';
import Eletrodomestico from './images/eletrodomestico.png'
import Digital from './images/digital.png'
import Conectividade from './images/conectividade.png'
import Cadeiras from './images/cadeiras.png';
import Computadores from './images/computadores.png';
import Beneficio from './images/beneficio.png';
import Audio from './images/audio.png';
import Prime from './images/prime.jpg';
import Promo1 from './images/promo1.png'
import Promo2 from './images/promo2.png'
import Promo3 from './images/promo3.jpg'
import Selo1 from './images/selo1.png'
import Selo2 from './images/selo2.png'
import Selo3 from './images/selo3.png'
import Selo4 from './images/selo4.png'
import Selo5 from './images/selo5.png'



function Layout() {
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
            ><h1>A promoção termina em  </h1> <AccessTimeIcon />  <Relogio fontSize="3.5vh" /></div>
          </div>
        </div>
        <div className="main-back" style={{ background: "#fafafb", }}>
          <div className="container" style={{ width: "80%", margin: "auto", }}>
            <div className="Produtos" style={{
              width: "100%",
              display: "flex",
              paddingTop: "4vh",
              gap: "2vh"
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
            </div> {/*Produtos*/}

            <div style={{
              display: "flex",
              justifyContent: "end",
              fontSize: "1.4vh",
              color: "#ef611c",
              textDecoration: "underline",
              textTransform: "uppercase",
            }}>
              <h1 style={{
                color:"#ef611c",
                marginTop:"2vh"
              }}>Todas as Ofertas</h1>

            </div>
            <div className="Anuncios" style={{
              display: "flex",
              width: "100%",
              textAlign: "center",
              paddingTop: "5vh",
              paddingBottom: "5vh",
              justifyContent: "space-between",
            }}>
              <div style={{ width: "48%" }} className="Propaganda">
                <img src={Propaganda1} alt="Propaganda1" />
              </div>
              <div style={{ width: "48%" }} className="Propaganda">
                <img src={Propaganda2} alt="Propaganda2" />
              </div>
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center" }}><ListIcon style={{ fontSize: "6vh", color: "#ef611c" }} /><h1> Departamentos</h1></div>
              <div className="Departamento" style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap"
              }}>
                <Departamento
                  titulo="Hardware"
                  imagem={Hardware} />
                <Departamento
                  titulo="Hardware"
                  imagem={Perifericos} />
                <Departamento
                  titulo="Hardware"
                  imagem={Games} />
                <Departamento
                  titulo="Hardware"
                  imagem={Cadeiras} />

                <Departamento
                  titulo="Hardware"
                  imagem={Computadores} />
                <Departamento
                  titulo="Hardware"
                  imagem={Tv} />
                <Departamento
                  titulo="Hardware"
                  imagem={Celular} />
                <Departamento
                  titulo="Hardware"
                  imagem={Beneficio} />

                <Departamento
                  titulo="Hardware"
                  imagem={Digital} />
                <Departamento
                  titulo="Hardware"
                  imagem={Eletrodomestico} />
                <Departamento
                  titulo="Hardware"
                  imagem={Audio} />
                <Departamento
                  titulo="Hardware"
                  imagem={Conectividade} />
              </div>

            </div>

            <div className="Prime">
              <img src={Prime} alt="Prime" />
            </div>
            <h1>Mais Procurados</h1>
            <div className="procurados">
              <div className="procurados_itens">

                <div className="procurados_produtos">
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
                </div >
                <div className="procurados_title">
                  <h1>Acabaram de Chegar</h1>
                  <h2>Ver Mais</h2>
                </div>
                <div className="procurados_produtos">
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
                </div >
                <h2 style={{ display: "flex", justifyContent: "flex-end", color: "#ef611c", textDecoration: "underline" }}>Ver Mais</h2>
                <div>
                </div>
              </div>
              <div className="promocao">
                <img src={Promo1} alt="Promoção" />
                <img src={Promo2} alt="Promoção" />
                <img src={Promo3} alt="Promoção" />

              </div>
            </div>
            <div className="noticias">
              <div className="noticias_card">
                <h1># TônaOnda</h1>
                <p>O universo Tech de um jeito fácil de entender</p>
              </div>
              <div className="noticias_card">
                <h1>Cartão Kabum</h1>
                <p>Sua compra mais Ninja,com anuidade ZERO</p>
              </div>
              <div className="noticias_card">
                <h1>TecMasters</h1>
                <p>As últimas noticias do mundo da Tecnologia</p>
              </div>


            </div>
          </div> {/* Container*/}
        </div>
      </main>
      <footer>
        <div className="news">
          <div className="news_align">
            <div className="news_txt">
              <h1>Kabum! News</h1>
              <p>Receba ofertas excluisivas no seu e-mail</p>
            </div>
            <input type="text" placeholder="Qual é o seu nome?" className="news_input" />
            <input type="text" placeholder="Seu E-mail" className="news_input" />
            <input type="submit" value="Cadastrar" className="news_btn" />
          </div>
        </div>
        <div className="footer_selos">
          <img src={Selo1} alt="Selos" className="selo"/>
          <img src={Selo2} alt="Selos" className="selo"/>
          <img src={Selo3} alt="Selos" className="selo"/>
          <img src={Selo4} alt="Selos" className="selo"/>
          <img src={Selo5} alt="Selos" className="selo"/>
          
        </div>
        <div className="footer_sobre">
          <div style={{width:"80%",margin:"auto"}}>
            <p>KaBuM!® é uma marca registrada de KABUM COMÉRCIO ELETRÔNICO S/A | CNPJ: 05.570.714/0001-59 |
              Todos os direitos reservados. Os preços anunciados neste site ou via e-mail promocional podem
              ser alterados sem prévio aviso. O KaBuM! não é responsável por erros descritivos. As fotos
              contidas nesta página são meramente ilustrativas do produto e podem variar de acordo com o
              fornecedor/lote do fabricante. Este site trabalha 100% em criptografia SSL. Clique aqui e veja
              as políticas de nossa empresa.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;