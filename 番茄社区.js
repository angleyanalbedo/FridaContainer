let StarLiveSDK = Java.use("com.flutter.star.live.StarLiveSDK");
StarLiveSDK["$init"].overload().implementation = function () {
    console.log(`StarLiveSDK.$init is called`);
    this["$init"]();
};

StarLiveSDK["login"].overload('java.lang.String', 'java.lang.String', 'com.flutter.star.live.LiveSDKLoginCallback').implementation = function (str:string, str2:string, liveSDKLoginCallback:any) {
    console.log(`StarLiveSDK.login is called: str=${str}, str2=${str2}, liveSDKLoginCallback=${liveSDKLoginCallback}`);
    this["login"](str, str2, liveSDKLoginCallback);
};

StarLiveSDK["checkLiveRoomPermission"].implementation = function () {
    console.log(`StarLiveSDK.checkLiveRoomPermission is called`);
    let result = this["checkLiveRoomPermission"]();
    console.log(`StarLiveSDK.checkLiveRoomPermission result=${result}`);
    return true;
};

StarLiveSDK["jumpToLiveRoom"].implementation = function (str:string) {
    console.log(`StarLiveSDK.jumpToLiveRoom is called: str=${str}`);
    this["jumpToLiveRoom"](str);
};
let StartLiveNativeView = Java.use("com.cj.webapp_Start.video.nativeview.StartLiveNativeView");
StartLiveNativeView["login"].implementation = function (str:string, str2:string, function0:any) {
    console.log(`StartLiveNativeView.login is called: str=${str}, str2=${str2}, function0=${function0}`);
    this["login"](str, str2, function0);
};
// 广告消除
let BaseApplication = Java.use("com.cj.module_base.base.BaseApplication");
BaseApplication["initAd"].implementation = function (str:string, str2:string, str3:string, str4:string) {
    console.log(`BaseApplication.initAd is called: str=${str}, str2=${str2}, str3=${str3}, str4=${str4}`);
    
};

BaseApplication["getLastVideoPlayUrl"].implementation = function () {
    console.log(`BaseApplication.getLastVideoPlayUrl is called`);
    let result = this["getLastVideoPlayUrl"]();
    console.log(`BaseApplication.getLastVideoPlayUrl result=${result}`);
    return result;
};

BaseApplication["setLastVideoPlayUrl"].implementation = function (str:string) {
    console.log(`BaseApplication.setLastVideoPlayUrl is called: str=${str}`);
    this["setLastVideoPlayUrl"](str);
};
let StarLiveManager = Java.use("com.mh.star_live_extensions.manager.StarLiveManager");
StarLiveManager["setLiveConfig"].implementation = function (str:string, z:any, z2:any, liveSDKCallback:any) {
    console.log(`StarLiveManager.setLiveConfig is called: str=${str}, z=${z}, z2=${z2}, liveSDKCallback=${liveSDKCallback}`);
    this["setLiveConfig"](str, z, z2, liveSDKCallback);
};
let FlutterBoostFragment = Java.use("com.idlefish.flutterboost.containers.FlutterBoostFragment");
FlutterBoostFragment["didFragmentHide"].implementation = function () {
    console.log(`FlutterBoostFragment.didFragmentHide is called`);
    //this["didFragmentHide"]();
};
let LivePlayerFlutterPlugin = Java.use("com.flutter.star.plugins.player.LivePlayerFlutterPlugin");
LivePlayerFlutterPlugin["onMethodCall"].implementation = function (call:any, result:any) {
    console.log(`LivePlayerFlutterPlugin.onMethodCall is called: call=${call}, result=${result}`);
    console.log(`call.url=${call.argument('url')}`);
    this["onMethodCall"](call, result);
};
//FCAnd.traceJavaMethods_custom(['E:com.mh.star_live_extensions.manager.StarLiveManager','M:om.cj.webapp_Start.base','E:com.flutter.star.live.boost.LiveFlutterBoostFragment'])
// FCAnd.traceJavaMethods_custom(['E:com.flutter.star.plugins.player.LivePlayerFlutterPlugin','M:com.flutter.star.plugins.player.ijk.IjkVideoView'])
// FCAnd.traceJavaMethods_custom(['E:com.flutter.star.plugins.player.ijk.TextureRenderView','E:com.flutter.star.plugins.player.ijk.SurfaceRenderView']);
// FCAnd.traceJavaMethods_custom(['E:com.tomato.ijk.media.player.IjkMediaPlayer']);
// FCAnd.traceJavaMethods_custom(['E:com.flutter.star.plugins.player.ijk.SurfaceRenderView'])
    var MediaPlayer = Java.use("com.tomato.ijk.media.player.IjkMediaPlayer");

    // Hook setDataSource 方法
    MediaPlayer.setDataSource.overload('java.lang.String').implementation = function(dataSource:string) {
        console.log("DataSource: " + dataSource);
        return this.setDataSource(dataSource);
    };

    // // Hook prepare 方法
    // MediaPlayer.prepare.implementation = function() {
    //     console.log("MediaPlayer is preparing...");
    //     return this.prepare();
    // };

    // // Hook start 方法
    // MediaPlayer.start.implementation = function() {
    //     console.log("MediaPlayer started.");
    //     return this.start();
    // };

    // // Hook onPrepared 回调
    // var OnPreparedListener = Java.use("android.media.MediaPlayer$OnPreparedListener");
    // OnPreparedListener.onPrepared.implementation = function(mp) {
    //     console.log("MediaPlayer is prepared.");
    //     // 获取视频流数据
    //     // 这里可以添加代码来获取流数据并保存
    // };
    // let AnonymousClass2 = Java.use("com.flutter.star.plugins.player.ijk.IjkVideoView$2");

    // AnonymousClass2["onPrepared"].implementation = function (iMediaPlayer:any) {
    //     console.log(`AnonymousClass2.onPrepared is called: iMediaPlayer=${iMediaPlayer}`);
    //     this["onPrepared"](iMediaPlayer);
    // };
    let IjkVideoView = Java.use("com.flutter.star.plugins.player.ijk.IjkVideoView");
    IjkVideoView["getShortcut"].implementation = function () {
        console.log(`IjkVideoView.getShortcut is called`);
        let result = this["getShortcut"]();
        console.log(`IjkVideoView.getShortcut result=${result}`);
        return result;
    };
    
    IjkVideoView["createPlayer"].implementation = function () {
        console.log(`IjkVideoView.createPlayer is called`);
        let result = this["createPlayer"]();
        console.log(`IjkVideoView.createPlayer result=${result}`);
        console.log('开始截图')
        //  // 创建一个线程，每 50 毫秒调用一次
        //  var Runnable = Java.use("java.lang.Runnable");
        //  var Thread = Java.use("java.lang.Thread");
        console.log(this.getShortcut())
        
        //  var runnable = Runnable.$new({
        //      run: function() {
        //          while (true) {
        //              // 调用目标方法
        //              getShortcut(); // 使用 `this` 调用目标方法
        //              Thread.sleep(50); // 休眠 50 毫秒
        //          }
        //      }.bind(this) // 绑定 `this` 以确保正确引用
        //  });
        // setInterval(() => {
        //     console.log('截图1')
        //     console.log(getShortcut)
        //     getShortcut();
        // },50)
        
 
        //  // 启动线程
        //  var thread = Thread.$new(runnable);
        //  thread.start();
        return result;
    };