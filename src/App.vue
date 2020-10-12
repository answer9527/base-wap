<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {VersionModel} from "./model/version"
document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px'

document.addEventListener('plusready', function() {
    var webview = plus.webview.currentWebview();
    plus.key.addEventListener('backbutton', function() {
        webview.canBack(function(e) {
            if(e.canBack) {
                webview.back();             
            } else {
                //webview.close(); //hide,quit
                //plus.runtime.quit();
                //首页返回键处理
                //处理逻辑：1秒内，连续两次按返回键，则退出应用；
                var first = null;
                plus.key.addEventListener('backbutton', function() {
                    //首次按键，提示‘再按一次退出应用’
                    if (!first) {
                        first = new Date().getTime();
                        console.log('再按一次退出应用');
                        setTimeout(function() {
                            first = null;
                        }, 1000);
                    } else {
                        if (new Date().getTime() - first < 1500) {
                            plus.runtime.quit();
                        }
                    }
                }, false);
            }
        })
    });
});


if(window.plus){  
    plusReady();  
}else{  
    document.addEventListener('plusready',plusReady,false);  
} 
    
// 如果支持plus
function  plusReady(){  
    plus.runtime.getProperty(plus.runtime.appid,function(inf){  
        let wgtVer=inf.version;  
        // 检查更新
        checkUpdate(wgtVer)
    });  
}  
    // 检查更新
 function checkUpdate(ver){
    VersionModel.getLatestVersion().then(res=>{
      let release = res.data.release
      let wgtUrl = res.data.wgt
      if(ver!=release){
        if(confirm("是否选择更新？")){
              downWgt(wgtUrl);
          }
      }
    })
}
    // 下载Wgt
 function downWgt(wgtUrl){  
    plus.nativeUI.showWaiting("正在更新版本...");  
    plus.downloader.createDownload( wgtUrl, {filename:"_doc/update/"}, function(d,status){  
        if ( status == 200 ) {   
            console.log("下载wgt成功："+d.filename);  
            installWgt(d.filename); // 安装wgt包  
        } else {  
            console.log("下载wgt失败！");  
            plus.nativeUI.alert("下载wgt失败！");  
        }  
        plus.nativeUI.closeWaiting();  
    }).start();  
}

// 安装wgt
function installWgt(path){  
    plus.nativeUI.showWaiting("安装wgt文件...");  
    plus.runtime.install(path,{},function(){  
        plus.nativeUI.closeWaiting();  
        console.log("安装wgt文件成功！");  
        plus.nativeUI.alert("版本更新完成！",function(){  
            plus.runtime.restart();  
        });  
    },function(e){  
        plus.nativeUI.closeWaiting();  
        console.log("安装wgt文件失败["+e.code+"]："+e.message);  
        plus.nativeUI.alert("安装wgt文件失败["+e.code+"]："+e.message);  
    });  
}

export default {
  name: 'App',
  data(){
    return{

    }
  },
  created(){

    
  },
  methods:{

    // 安装wgt更新  



  }
}
</script>

<style>
*{
  font-size: 0.28rem;
  padding: 0;
  margin: 0;
}
#app{
  height: 100%;
}
</style>
