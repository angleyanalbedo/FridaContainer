function hook_qingren2() {
    console.log("hook_qingren started");
    let isfound = false;

    const intervalId = setInterval( ()=>{
        Java.enumerateClassLoaders({
            onMatch: function (loader) {
                console.log("Enumerating class loader:", loader);
                try {
                    // 尝试通过当前类加载器加载目标类
                    let cls = loader.loadClass("com.tencent.live2.impl.V2TXLivePlayerImpl");
                    if (cls) {
                        console.log("Found class: ", cls);
    
                        // 使用 Frida 的 ClassFactory 动态加载并 Hook 类
                        let cf = Java.ClassFactory.get(loader);
                        let V2TXLivePlayerImpl = cf.use("com.tencent.live2.impl.V2TXLivePlayerImpl");
    
                        // Hook startLivePlay 方法
                        V2TXLivePlayerImpl["startLivePlay"].implementation = function (str) {
                            console.log(`V2TXLivePlayerImpl.startLivePlay is called with URL: ${str}`);
                            // startVlc(str); // 调用自定义的 startVlc 函数
                            let result = this["startLivePlay"](str); // 调用原始方法
                            console.log(`V2TXLivePlayerImpl.startLivePlay result: ${result}`);
                            return result;
                        };
    
                        isfound = true; // 标记已找到并 Hook 成功
                        clearTimeout(intervalId);
                    }
                } catch (e) {
                    console.log(`Error in class loader ${loader}: ${e.toString()}`);
                }
            },
            onComplete: function () {
                if (!isfound) {
                    console.log("Class not found. Retrying...");
                    // // 如果未找到类，可以设置定时器再次尝试
                    // setInterval(hook_qingren, 1000);
                } else {
                    console.log("Hook completed successfully.");
                }
            }
        });
    }, 1000);
}

// 调用 hook_qingren 函数开始 Hook
Java.perform(hook_qingren2);