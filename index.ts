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
import { fchmod } from "fs";

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
    let GirlAGLiveShowView = Java.use("com.sealviewer.home.widget.GirlAGLiveShowView");
    GirlAGLiveShowView["setPayInfo"].implementation = function (str:string, f:number) {
        console.log(`GirlAGLiveShowView.setPayInfo is called: str=${str}, f=${f}`);
        console.log('GirlAGLiveShowView.setPayInfo str=Free')
        this["setPayInfo"]('"whole"', 0);
    };

    // GirlAGLiveShowView["init"].implementation = function () {
    //     console.log(`GirlAGLiveShowView.init is called`);
    //     this["init"]();
    //     // this.layoutGirlLiveshowBinding.clearLayout.close()
    // };
    // 设置观看信息
    GirlAGLiveShowView["setRoomStatus"].implementation = function (liveRoomStatus:any) {
        console.log(`GirlAGLiveShowView.setRoomStatus is called: liveRoomStatus=${liveRoomStatus}`);
        console.log(`GirlAGLiveShowView.setRoomStatus liveRoomStatus.paytStatus =  ${liveRoomStatus.payStatus}`)
        liveRoomStatus["payStatus"] = 'DirectView';
        liveRoomStatus["payType"] = 'whole';
        this["setRoomStatus"](liveRoomStatus);
    };
    // 不再倒计时
    let LiveShowTimeView = Java.use("com.sealviewer.common.widget.LiveShowTimeView");
    LiveShowTimeView["showType"].implementation = function (str:string, str2:string, i:number) {
        console.log(`LiveShowTimeView.showType is called: str=${str}, str2=${str2}, i=${i}`);
        this["showType"]('DirectView', 'whole', 10000000);
    };
    
    

    GirlAGLiveShowView["showAskToPay"].implementation = function (context:any, str:string) {
        console.log(`GirlAGLiveShowView.showAskToPay is called: context=${context}, str=${str}`);
        // this["showAskToPay"](context, str);
    };
    GirlAGLiveShowView["showAskToRecharge"].implementation = function (context:any) {
        console.log(`GirlAGLiveShowView.showAskToRecharge is called: context=${context}`);
        // this["showAskToRecharge"](context);
    };
    // 时间结束不再弹出
    let AnonymousClass22 = Java.use("com.sealviewer.home.widget.GirlAGLiveShowView$22");
    AnonymousClass22["onCountDownTimeFinish"].implementation = function () {
        console.log(`AnonymousClass22.onCountDownTimeFinish is called`);
    };
    let HDialog = Java.use("com.sealviewer.common.ui.dialog.HDialog");
    HDialog["withMsg"].overload('java.lang.CharSequence').implementation = function (charSequence:string) {
        console.log(`HDialog.withMsg is called: charSequence=${charSequence}`);
        let result = this["withMsg"](charSequence);
        console.log(`HDialog.withMsg result=${result}`);
        return result;
    };
    
    // HDialog["withMsg"].overload('int').implementation = function (i:number) {
    //     console.log(`HDialog.withMsg is called: i=${i}`);
    //     let result = this["withMsg"](i);
    //     console.log(`HDialog.withMsg result=${result}`);
    //     return result;
    // };
    // let PermissionBean = Java.use("com.sealviewer.coremodel.datamodel.http.entities.request.PermissionBean");
    // PermissionBean["$init"].implementation = function (str:string) {
    //     console.log(`PermissionBean.$init is called: str=${str}`);
    //     this["$init"](str);
    // };
    let AnonymousClass1 = Java.use("com.sealviewer.home.widget.GirlAGLiveShowView$1");
    AnonymousClass1["onFailure"].implementation = function (th:any) {
        console.log(`AnonymousClass1.onFailure is called: th=${th}`);
        this["onFailure"](th);
    };
    
    AnonymousClass1["onSucceed"].overload('java.lang.Boolean').implementation = function () {
        console.log(`AnonymousClass1.onSucceed is called`);
        this["onSucceed"]();
    };
    // let UserManager = Java.use("com.sealviewer.coremodel.datamodel.http.helper.UserManager");
    // UserManager["getUser"].implementation = function () {
    //     console.log(`user phone = ${this.phone}`)
    //     console.log(`UserManager.getUser is called`);
    //     let result = this["getUser"]();
    //     console.log(`UserManager.getUser result=${result}`);
    //     return result;
    // };
    
    // GirlAGLiveShowView["showAnonymousPermissionDialog"].implementation = function () {
    //     console.log(`GirlAGLiveShowView.showAnonymousPermissionDialog is called`);
    //     this["showAnonymousPermissionDialog"]();
    // };
    let LiveRoomStatus = Java.use("com.sealviewer.coremodel.datamodel.http.entities.response.LiveRoomStatus");
    LiveRoomStatus.$init.overload().implementation = function () {
        this.payPrice = 0;
        this.paytStatus = 'DirectView'
        this.payType = 'whole'
        this.trailSeconds = 1000000;
    }
    
    GirlAGLiveShowView["getRoomStauts"].implementation = function () {
        console.log(`GirlAGLiveShowView.getRoomStauts is called`);
        // this["getRoomStauts"]();
        this.joinRtcChannel();
        // this.layoutGirlLiveshowBinding.clearLayout.setVisibility(0);

    };

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

