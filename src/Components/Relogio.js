import React, { useEffect, useState } from "react";
 
function Relogio(props) {
  const Natal = new Date(2021, 11, 25, 0, 0, 0, 0);
  const Agora = new Date();
  const Dias= Natal.getDate()-Agora.getDate()
  const Horas = 24-Agora.getHours()
  const Minutos = 60-Agora.getMinutes()
  const Segundos = 60-Agora.getSeconds()
  
  const [dateTime, setDateTime] = useState({
    dias: Dias,
    horas: Horas,
    minutos:Minutos,
    segundos: Segundos,
  });

  useEffect(() => {
    const tick = setInterval(() => {
      setDateTime({
        dias: Dias,
        horas: Horas,
        minutos:Minutos,
        segundos: Segundos,
      });
    }, 1000);
    
    return () => clearInterval(tick);
  }, [Dias,Horas,Minutos,Segundos]);
  return (
      <div style={{
        fontSize:props.fontSize
      }}>

           {dateTime.dias}D {dateTime.horas}:{dateTime.minutos}:{dateTime.segundos}  
      </div>
  );
}
export default Relogio;