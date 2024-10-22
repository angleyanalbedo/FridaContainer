function startVlc(streamurl){
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


function load_dex(dex_path) {
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

function hook_qingren() {
    let isfound = false;
    console.log("hook_qingren");
    Java.enumerateClassLoaders({onMatch: function (loader) {
        try {
            let cls = loader.loadClass("com.tencent.live2.impl.V2TXLivePlayerImpl");
            if (null != cls) {
                console.log("found cls: " + cls);

                let cf = Java.ClassFactory.get(loader);
                isfound = true;
                
                let V2TXLivePlayerImpl = cf.use("com.tencent.live2.impl.V2TXLivePlayerImpl");
                V2TXLivePlayerImpl["startLivePlay"].implementation = function (str) {
                    console.log(`V2TXLivePlayerImpl.startLivePlay is called: str=${str}`);
                    startVlc(str);
                    let result = this["startLivePlay"](str);
                    console.log(`V2TXLivePlayerImpl.startLivePlay result=${result}`);
                    return result;
                };
            }
        }
        catch (e) {
            console.log(`classloader: ${loader} not found:${e.toString()}`);
        }
    }, onComplete: function () {
        if (!isfound) {
            console.log("not found");
            // setInterval(hook_qingren, 1000);
        }
    }
    })
}
// function hook_qingren2() {
//     let isfound = false;
//     console.log("hook_qingren");
//     Java.enumerateClassLoaders({onMatch: function (loader) {
//         try {
//             let cls = loader.loadClass("fvn.gbrgiji.flutter_plugin_player.s");
//             if (null != cls) {
//                 console.log("found cls: " + cls);

//                 let cf = Java.ClassFactory.get(loader);
//                 isfound = true;
//                 s = cf.use("fvn.gbrgiji.flutter_plugin_player.s");
//                 s["b"].implementation = function (str, i9, v2TXLivePlayerObserver) {
//                                 console.log(`s.b is called: str=${str}, i9=${i9}, v2TXLivePlayerObserver=${v2TXLivePlayerObserver}`);
//                                 let result = this["b"](str, i9, v2TXLivePlayerObserver);
//                                 let streamurl = str;
//                                 startVlc(streamurl);
//                                 console.log(`s.b result=${result}`);
//                                 return result;
                                
//                             };
//             }
//         }
//         catch (e) {
//             console.log(`classloader: ${loader} not found:${e.toString()}`);
//         }
//     }, onComplete: function () {
//         if (!isfound) {
//             console.log("not found");
//             // setInterval(hook_qingren, 1000);
//         }
//     }
//     })
// }