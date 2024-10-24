/**
 * @author: xingjun.xyf
 * @contact: deathmemory@163.com
 * @file: AntiDexLoader.js
 * @time: 2020/4/16 5:03 PM
 * @desc:
 */
import {DMLog} from "./utils/dmlog";
import {FCCommon} from "./utils/FCCommon";
// import {DianPing} from "./agent/dp/dp";
import {FCAnd} from "./utils/FCAnd";
function load_dex(dex_path:string) {
    var DexClassLoader = Java.use('dalvik.system.DexClassLoader');
    var ClassLoader = Java.use('java.lang.ClassLoader');

    // 指定 DEX 文件的路径
    var dexFilePath = dex_path; // 替换为你的 DEX 文件名

    // 创建 DexClassLoader 实例
    var classLoader = DexClassLoader.$new(
        dexFilePath, 
        null, 
        null, 
        ClassLoader.getSystemClassLoader()
    );
    return classLoader;
}

function startVlc(streamurl:string){
    Java.perform(function () {
        var Intent = Java.use('android.content.Intent');
        var Uri = Java.use('android.net.Uri');
    
        // 替换为你的 RTMP URL
        var rtmpUrl = streamurl;
    
        // 创建 Intent 用于启动 VLC 播放 RTMP
        var playIntent = Intent.$new();
        playIntent.setAction(Intent.ACTION_VIEW.value);
        playIntent.setDataAndType(Uri.parse(rtmpUrl), "video/*");
        playIntent.setPackage("org.videolan.vlc");  // 指定 VLC 包名

        // 为 Intent 添加 FLAG_ACTIVITY_NEW_TASK
        playIntent.addFlags(0x10000000); // FLAG_ACTIVITY_NEW_TASK
    
        // 启动 VLC
        var ActivityManager = Java.use('android.app.ActivityManager');
        var context = Java.use('android.app.ActivityThread').currentApplication().getApplicationContext();
        context.startActivity(playIntent);
    });
}

function main() {
    DMLog.d('MAIN', 'HELLO FridaContainer, please add code on the index.ts');
    // FCAnd.Anti.anti_ptrace();
    // FCAnd.Anti.anti_fgets();
    // and.anti.Anti.anti_fgets();

    // FCAnd.anti.anti_debug();
    /// dp
    // DianPing.anti_debug();
    // DianPing.hook_cx_stacks();
    ///
    // FCAnd.showStacks();
    // FCAnd.dump_dex_common();
    // FCAnd.Anti.anti_sslPinning("/data/local/tmp/cert-der.crt");

    // FCCommon.dump_module('libmtguard.so', '/data/data/com.dianping.v1');
    // DianPing.hook_stuffs();
    // call mtgsig
    // DianPing.test_call_mtgsig();
    // DianPing.hook_zlog();
    // FCAnd.anti.anti_debug();
    // coord: (0,203,25) | addr: Lcom.dianping.nvnetwork.tunnel.Encrypt.SocketSecureManager;->getB2keyByB2(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String; | loc: ?
    // FCAnd.traceArtMethods(['E:com.dianping.nvnetwork.tunnel.Encrypt.SocketSecureManager'], null, "122,108,111,103,46,98,105,110");  // "zlog.bin"
    // FCAnd.anti.anti_ssl_unpinning();
    // DianPing.hook_stuffs();
    // DianPing.hook_net();
    // DianPing.modify_devinfo();
    // DianPing.hook_stuffs();
    // FCAnd.hook_uri(true);
    // FCAnd.hook_url(true);
    // FCAnd.jni.traceAllJNISimply();
    // FCAnd.traceArtMethods(['M:retrofit2']);
    // rpc.exports = {
    //     test() {
    //         Java.perform(() => {
    //             FCAnd.jni.traceAllJNISimply();
    //         });
    //     }
    // }
    // FCAnd.traceJavaMethods_custom(["E:lqb.whwuhmm.yvig.TXVodPlayer"]);
    // FCAnd.useWithDexClassLoader("lqb.whwuhmm.yvig.TXVodPlayer",function(cls){
    //     let TXVodPlayer = cls;
    //     TXVodPlayer["attachTRTC"].implementation = function (obj:any) {
    //         console.log(`TXVodPlayer.attachTRTC is called: obj=${obj}`);
    //         this["attachTRTC"](obj);
    //     };
    // });
    // // let MainActivity = Java.use("t3ofh8ljr.muclg84.e1hpjqs.m8xxhnx6.MainActivity");
    // // MainActivity["onCreate"].implementation = function () {
    // //     console.log(`MainActivity.onCreate is called`);
    // //     this["onCreate"]();
    // // }
    // FCAnd.enumerateClassLoadersAndUse("fvn.gbrgiji.flutter_plugin_player.s",function(cls){
    //     let s = cls;
    //     s["$init"].overload('android.content.Context','android.view.ViewGroup').implementation = function (context, viewGroup) {
    //         console.log(`s.$init is called: context=${context}, viewGroup=${viewGroup}`);
    //         this["$init"](context, viewGroup);
    //     };
    // })
    // FCAnd.enumerateClassLoadersAndUse("fvn.gbrgiji.flutter_plugin_player.a",function(cls){
    //     let a = cls;
    //     a["e"].implementation = function () {
    //         console.log(`a.e is called`);
    //         let result = this["e"]();
    //         console.log(`a.e result=${result}`);
    //         return result;
    //     };
    // })
 
    // let streamurl:string = '';

//    Java.openClassFile("/data/data/eu90.djuweuiwzjhjn.tyynmy3.izzlxjyu/app_qcCsyYV8/classes2.dex").load();
//     FCAnd.enumerateClassLoadersAndUse("fvn.gbrgiji.flutter_plugin_player.s",function(cls){
//         let s = cls;
//         s["b"].implementation = function (str:string, i9:number, v2TXLivePlayerObserver:any) {
//             console.log(`s.b is called: str=${str}, i9=${i9}, v2TXLivePlayerObserver=${v2TXLivePlayerObserver}`);
//             let result = this["b"](str, i9, v2TXLivePlayerObserver);
//             streamurl = str;
//             startVlc(streamurl);
//             console.log(`s.b result=${result}`);
//             return result;
            
//         };
        
//     })

    
    
    // FCAnd.enumerateClassLoadersAndUse("fvn.gbrgiji.flutter_plugin_player.o",function(cls){
    //     let o = cls;
    //     o["d"].implementation = function (str:string) {
    //         console.log(`o.d is called: str=${str}`);
    //         startVlc(str);
    //         this["d"](str);
    //     };
    // })
    // let o = Java.use("fvn.gbrgiji.flutter_plugin_player.o");
    // o["d"].implementation = function (str:string) {
    //     console.log(`o.d is called: str=${str}`);
    //     startVlc(str);
    //     this["d"](str);
    // }
   
    // FCAnd.enumerateClassLoadersAndUse("com.tencent.live2.V2TXLivePlayer",function(cls){
    //     let V2TXLivePlayer = cls;
    //     V2TXLivePlayer["startLivePlay"].implementation = function (str:string) {
    //         console.log(`V2TXLivePlayer.startLivePlay is called: str=${str}`);
    //         let result = this["startLivePlay"](str);
    //         console.log(`V2TXLivePlayer.startLivePlay result=${result}`);
    //         return result;
    //     };
    // });
    var findplayer = false;
    while (!findplayer) {
        FCAnd.enumerateClassLoadersAndUse("com.tencent.live2.impl.V2TXLivePlayerImpl",function(cls){
            let V2TXLivePlayerImpl = cls;
            if (V2TXLivePlayerImpl["startLivePlay"] != undefined) {
                findplayer = true;
                console.log(`V2TXLivePlayerImpl.startLivePlay is found`);
            }
            V2TXLivePlayerImpl["startLivePlay"].overload('java.lang.String').implementation = function (str:string) {
                console.log(`V2TXLivePlayerImpl.startLivePlay is called: str=${str}`);
                let result = this["startLivePlay"](str);
                startVlc(str);
                console.log(`V2TXLivePlayerImpl.startLivePlay result=${result}`);
                return result;
            };
        })
        
    }
    
   
    FCAnd.enumerateClassLoadersAndUse("fvn.gbrgiji.flutter_plugin_player.e", function (cls) {
        let e = cls;
        e["onMethodCall"].implementation = function (methodCall:any, result:any) {
            // console.log(`e.onMethodCall is called: methodCall=${methodCall.method}, result=${result}`);
            let str = methodCall.method.value;
            console.log(`methos is ${str} `);
            
            this["onMethodCall"](methodCall, result);
        };
    })
    // FCAnd.enumerateClassLoadersAndUse("io.agora.rtc2.RtcEngineConfig")
    // var findengine = false;
    // while(!findengine){
    //     FCAnd.enumerateClassLoadersAndUse("io.agora.rtc2.RtcEngine",function(cls){
    //         let RtcEngine = cls;
    //         if (RtcEngine["create"] != undefined) {
    //             findengine = true;
    //             console.log(`RtcEngine.create is found`);
    //         }
    //         RtcEngine["create"].overload('io.agora.rtc2.RtcEngineConfig').implementation = function (rtcEngineConfig:any) {
    //             console.log(`RtcEngine.create is called: rtcEngineConfig=${rtcEngineConfig.toString()}`);
    //             let result = this["create"](rtcEngineConfig);
    //             console.log(`RtcEngine.create result=${result}`);
    //             return result;
    //         };
    //     })
    // }

    // var findplayer = false;
    // while (!findplayer) {
    //     FCAnd.enumerateClassLoadersAndUse("io.agora.rtc2.internal.MediaPlayerImpl",function(cls){
    //         let MediaPlayerImpl = cls;
    //         if (MediaPlayerImpl["open"] != undefined) {
    //             findplayer = true;
    //             console.log(`MediaPlayerImpl.open is found`);
    //         }
    //         MediaPlayerImpl["open"].overload('android.net.Uri', 'long').implementation = function (uri:any, j9:number) {
    //             console.log(`MediaPlayerImpl.open is called: uri=${uri}, j9=${j9}`);
    //             let result = this["open"](uri, j9);
    //             console.log(`MediaPlayerImpl.open result=${result}`);
    //             return result;
    //         };
            
    //         MediaPlayerImpl["open"].overload('java.lang.String', 'long').implementation = function (str:string, j9:number) {
    //             console.log(`MediaPlayerImpl.open is called: str=${str}, j9=${j9}`);
    //             let result = this["open"](str, j9);
    //             console.log(`MediaPlayerImpl.open result=${result}`);
    //             return result;
    //         };
    //     })
        
    // }
    // var findRtcengine = false;
    // while (!findRtcengine) {
    //     FCAnd.enumerateClassLoadersAndUse("io.agora.rtc2.internal.RtcEngineImpl",function(cls){
    //         let RtcEngineImpl = cls;
    //         if (RtcEngineImpl["mediaPlayerOpen"] != undefined) {
    //             findRtcengine = true;
    //             console.log(`RtcEngineImpl.mediaPlayerOpen is found`);
    //         }
    //         RtcEngineImpl["mediaPlayerOpen"].implementation = function (i9:number, str:string, j9:number) {
    //             console.log(`RtcEngineImpl.mediaPlayerOpen is called: i9=${i9}, str=${str}, j9=${j9}`);
    //             let result = this["mediaPlayerOpen"](i9, str, j9);
    //             console.log(`RtcEngineImpl.mediaPlayerOpen result=${result}`);
    //             return result;
    //         };
    //     })
        

    // }

    var isfindengine = false;
    while (!isfindengine) {
        FCAnd.enumerateClassLoadersAndUse("io.agora.rtc2.RtcEngine",function(cls){
            let RtcEngine = cls;
            if(RtcEngine["create"] != undefined)
            {
                isfindengine = true;
                console.log(`RtcEngine.create is found`)
            }
            RtcEngine["create"].overload('android.content.Context', 'java.lang.String', 'io.agora.rtc2.IRtcEngineEventHandler').implementation = function (context:any, str:string, iRtcEngineEventHandler:any) {
                console.log(`RtcEngine.create is called: context=${context}, appid=${str}, iRtcEngineEventHandler=${iRtcEngineEventHandler}`);
                let result = this["create"](context, str, iRtcEngineEventHandler);
                console.log(`RtcEngine.create result=${result}`);
                return result;
            };
            
            RtcEngine["joinChannel"].overload('java.lang.String', 'java.lang.String', 'int', 'io.agora.rtc2.ChannelMediaOptions').implementation = function (str:string, str2:string, i9:number, channelMediaOptions:any) {
                console.log(`RtcEngine.joinChannel is called: str=${str}, str2=${str2}, i9=${i9}, channelMediaOptions=${channelMediaOptions}`);
                let result = this["joinChannel"](str, str2, i9, channelMediaOptions);
                console.log(`RtcEngine.joinChannel result=${result}`);
                return result;
            };
        })
    }
    

   

    // FCAnd.enumerateClassLoadersAndUse("fvn.gbrgiji.flutter_plugin_player.Utils",function(cls){
    //     let Utils = cls;
    //     Utils["Q"].implementation = function (methodCall:any, result:any) {
    //         //join channel
    //         if (methodCall.arguments == undefined||methodCall.arguments == null)
    //         {
    //             console.log("methodCall.arguments is null");
    //         }else{
    //             console.log(`q untils methodCall.arguments is ` + arguments.toString());
    //         }
    //         console.log(`Utils.Q is called: methodCall=${methodCall}} result=${result}`);
    //         this["Q"](methodCall, result);
    //     };

    // })

    // FCAnd.enumerateClassLoadersAndUse("fvn.gbrgiji.flutter_plugin_player.Utils",function(cls){
    //     let Utils = cls;
    //     Utils["L"].implementation = function (methodCall:any) {
    //         // init pkview
    //         console.log(`Utils.L is called: methodCall=${methodCall}`);
    //         // 获取 arguments
    //        var argument = methodCall.arguments;
    //         console.log(`arguments is ` + JSON.stringify(argument));
    //         if (argument == undefined) {
    //             console.log("argument is null");
    //         }

    //         // console.log(`url is ${hashMap.get('rtmpUrl')}`)
    //         this["L"](methodCall);
    //     };
    // })
    var finduntils = false;
    while(!finduntils){
        FCAnd.enumerateClassLoadersAndUse("fvn.gbrgiji.flutter_plugin_player.Utils",function(cls){
            let Utils = cls;
            if (Utils["R"] != undefined) {
                finduntils = true;
            }
            Utils["R"].implementation = function (str:string, str2:string, i9:number, str3:string) {
                console.log(`Utils.R is called: str=${str}, str2=${str2}, i9=${i9}, str3=${str3}`);
                let result = this["R"](str, str2, i9, str3);
                console.log(`Utils.R result=${result}`);
                return result;
            };
//             let p = Java.use("fvn.gbrgiji.flutter_plugin_player.p");
// p["p"].implementation = function (str, str2, i9, str3) {
//     console.log(`p.p is called: str=${str}, str2=${str2}, i9=${i9}, str3=${str3}`);
//     let result = this["p"](str, str2, i9, str3);
//     console.log(`p.p result=${result}`);
//     return result;
// };
        })
    }
    var findp = false;
    while(!findp){
        FCAnd.enumerateClassLoadersAndUse("fvn.gbrgiji.flutter_plugin_player.p",function(cls){
            let p = cls;
            if (p["p"] != undefined) {
                findp = true;

            }
            p["p"].implementation = function (str:string, str2:string, i9:number, str3:string) {
                console.log(`p.p is called: str=${str}, str2=${str2}, i9=${i9}, str3=${str3}`);
                // str="1282000136"
                // i9 = 886838839
                // str2 = "007eJxSYFhSx9e8dG2n1oGmLYvFVv4pXbM/dbtIcVuEw3vpvD1OV7kUGMzMjFOMk0xN0gyNk0wSDZMsLBKTk40NU80sDS0sLSwsnQUk0xsCGRkirA4zMzJAIIjPyKDFyWBhYWZhbGFhbA4IAAD///EcHqQ="
                let result = this["p"](str, str2, i9, str3);
                console.log(`p.p result=${result}`);
                // console.log(`playsrc = ${this.mediaPlayerGetPlaySrc(i9)}`);
                return result;
            };
        })
        
        

    }
   

}


if (Java.available) {
    DMLog.i("JAVA", "available");
    Java.perform(function () {
        main();
    });
}

if (ObjC.available) {
    DMLog.i("ObjC", "available");
    FCCommon.printModules();
    FCCommon.dump_module("Hopper Disassembler v4", "/Users/dmemory/Downloads/");
}


