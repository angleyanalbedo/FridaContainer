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
 

    FCAnd.enumerateClassLoadersAndUse("fvn.gbrgiji.flutter_plugin_player.s",function(cls){
        let s = cls;
        s["b"].implementation = function (str:string, i9:number, v2TXLivePlayerObserver:any) {
            console.log(`s.b is called: str=${str}, i9=${i9}, v2TXLivePlayerObserver=${v2TXLivePlayerObserver}`);
            let result = this["b"](str, i9, v2TXLivePlayerObserver);
            console.log(`s.b result=${result}`);
            return result;
            
        };
    })

   
    
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


