export default {
  data() {
    return {
      ajaxUrl: 'http://203.187.185.185:7109/uapws/service/IBigScreenDangerWs'
    }
  },
  getPro(data) {
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
  getPk(data) {
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
}
