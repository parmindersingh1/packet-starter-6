//define constants
//see /src/client/app/core/constant.js

(function (window) {
  window.__env = window.__env || {};

  var environment = "qa"; //can be dev, test or prod.

  //environment specific constants
  if(environment === "prod") {
    window.__env.uiServerUrl = 'http://example.com/api';
    window.__env.baseUrl = '/';
    window.__env.enableDebug = true;
   
  }
  else if(environment === "qa") {
    window.__env.uiServerUrl = 'http://example.com/api';
    window.__env.baseUrl = '/';
    window.__env.enableDebug = true;
   

  }
  else {//DEFAULT - assume dev
    window.__env.uiServerUrl = 'http://192.168.1.100/example/api';  ;
    window.__env.baseUrl = '/';
    window.__env.enableDebug = true;
    
  }


}(this));
