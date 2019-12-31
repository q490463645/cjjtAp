export default {
  getUCDBaseInfo() {
    return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ibig="http://webservice.bjcj.itf.nc/IBigScreenDangerWs">
    <soapenv:Header/>
    <soapenv:Body>
       <ibig:getUCDBaseInfo/>
    </soapenv:Body>
    </soapenv:Envelope>`;
  },
  getUCDHiddenInfo(data) {
    let str = JSON.stringify(data);
    return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ibig="http://webservice.bjcj.itf.nc/IBigScreenDangerWs">
    <soapenv:Header/>
    <soapenv:Body>
       <ibig:getUCDHiddenInfo>
          <!--Optional:-->
          <string>${str}</string>
       </ibig:getUCDHiddenInfo>
    </soapenv:Body>
    </soapenv:Envelope>`;
  },
  getHiddenInfoByPk(data) {
    // let str = JSON.stringify(data);
    return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ibig="http://webservice.bjcj.itf.nc/IBigScreenDangerWs">
    <soapenv:Header/>
    <soapenv:Body>
       <ibig:getHiddenInfoByPk>
          <!--Optional:-->
          <string>${data}</string>
       </ibig:getHiddenInfoByPk>
    </soapenv:Body>
    </soapenv:Envelope>`;
  },
  getUCDDangersInfo(data) {
    let str = JSON.stringify(data);
    return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ibig="http://webservice.bjcj.itf.nc/IBigScreenDangerWs">
    <soapenv:Header/>
    <soapenv:Body>
       <ibig:getUCDDangersInfo>
          <!--Optional:-->
          <string>${str}</string>
       </ibig:getUCDDangersInfo>
    </soapenv:Body>
    </soapenv:Envelope>`;
  },
  getDangersinfoByPk(data) {
    return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ibig="http://webservice.bjcj.itf.nc/IBigScreenDangerWs">
    <soapenv:Header/>
    <soapenv:Body>
       <ibig:getDangersinfoByPk>
          <!--Optional:-->
          <string>${data}</string>
       </ibig:getDangersinfoByPk>
    </soapenv:Body>
    </soapenv:Envelope>`;
  },
  getUCDDataAnalyse(data) {
    let str = JSON.stringify(data);
    return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ibig="http://webservice.bjcj.itf.nc/IBigScreenDangerWs">
    <soapenv:Header/>
    <soapenv:Body>
       <ibig:getUCDDataAnalyse>
          <!--Optional:-->
          <string>${str}</string>
       </ibig:getUCDDataAnalyse>
    </soapenv:Body>
    </soapenv:Envelope>`;
  },
  getUCDCorpAndProj() {
    return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ibig="http://webservice.bjcj.itf.nc/IBigScreenDangerWs">
   <soapenv:Header/>
   <soapenv:Body>
      <ibig:getUCDCorpAndProj/>
   </soapenv:Body>
   </soapenv:Envelope>`;
  },
  getUCDDataAnalyse(data) {
    let str = JSON.stringify(data);
    return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ibig="http://webservice.bjcj.itf.nc/IBigScreenDangerWs">
    <soapenv:Header/>
    <soapenv:Body>
       <ibig:getUCDDataAnalyse>
          <!--Optional:-->
          <string>${str}</string>
       </ibig:getUCDDataAnalyse>
    </soapenv:Body>
    </soapenv:Envelope>`;
  }
};
