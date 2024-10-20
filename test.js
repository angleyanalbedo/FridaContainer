var claz = "com.tencent.live2.V2TXLivePlayerObserver"
function start() {
    // 封装查找实例的逻辑
    function findInstance() {
        Java.perform(function() {
            Java.choose(claz, {
                onMatch: function(instance) {
                    console.log("Instance found, stopping play...");
                    // instance.stopPlay();
                    const methods = instance.class.getDeclaredMethods();

                    methods.forEach(function (method) {
                        console.log('Method Name: ' + method.getName());
                        console.log('Return Type: ' + method.getReturnType().getName());
                        console.log('Parameter Types: ' + method.getParameterTypes().map(function (type) {return type.getName();}).join(', '));
                    });
                },
                onComplete: function() {
                    // 如果没有找到实例，稍后再试
                    console.log("Instance not found, retrying...");
                    // setTimeout(findInstance, 1000); // 每隔1秒重试
                }
            });
        });
    }

    // 启动查找实例
    findInstance();
}
function emnu_method(name) {
    Java.perform(function() {
        Java.choose(name, {
            onMatch: function(instance) {
                console.log("Instance found");
                // instance.stopPlay();
                const methods = instance.class.getDeclaredMethods();

                methods.forEach(function (method) {
                    console.log('Method Name: ' + method.getName());
                    console.log('Return Type: ' + method.getReturnType().getName());
                    console.log('Parameter Types: ' + method.getParameterTypes().map(function (type) {return type.getName();}).join(', '));
                });
            },
            onComplete: function() {
                // 如果没有找到实例，稍后再试
                console.log("Instance not found, retrying...");
                // setTimeout(findInstance, 1000); // 每隔1秒重试
            }
        });
    });
    
}
function fun2(cla) {

    //  hook 多个 class
    // 发现一个关键点 就是 当一个类 没有执行的时候, frida 枚举是枚举不出来的。
    Java.perform(function () {
        // 遍历当前 loader 的 所有类
        Java.enumerateLoadedClasses({
            onMatch: function (name, handle) {
                // console.log(name)
                if (name.indexOf(cla) >= 0) {
                    console.log(name);
                    // Java.use(name).startLivePlay.implementation = function (x) {
                    //     console.log(x)
                    //     return this.startLivePlay(x) ;
                    // }
                    var Myclass = Java.use(name)
                    const methods = Myclass.class.getDeclaredMethods();

                    methods.forEach(function (method) {
                        console.log('Method Name: ' + method.getName());
                        console.log('Return Type: ' + method.getReturnType().getName());
                        console.log('Parameter Types: ' + method.getParameterTypes().map(function (type) {return type.getName();}).join(', '));
                    });

                }
            },
            onComplete: function () {

            }
        })


    })
}
function hook_player(name){
    Java.perform(function(){
        let TXLivePlayer = Java.use("lqb.whwuhmm.yvig.TXLivePlayer");
        TXLivePlayer["startLivePlay"].implementation = function (str, i9) {
            console.log(`TXLivePlayer.startLivePlay is called: str=${str}, i9=${i9}`);
            let result = this["startLivePlay"](str, i9);
            console.log(`TXLivePlayer.startLivePlay result=${result}`);
            return result;
        };
        TXLivePlayer["$init"].implementation = function (context) {
            console.log(`TXLivePlayer.$init is called: context=${context}`);
            this["$init"](context);
        };
        let a = Java.use("com.tencent.liteav.txcvodplayer.a.a");
        a["g"].implementation = function () {
            console.log(`a.g is called`);
            this["g"]();
        };

    })
    

}
function foo(clz){
    console.log(clz)
    let TXLivePlayer = clz;
        TXLivePlayer["startLivePlay"].implementation = function (str, i9) {
            console.log(`TXLivePlayer.startLivePlay is called: str=${str}, i9=${i9}`);
            let result = this["startLivePlay"](str, i9);
            console.log(`TXLivePlayer.startLivePlay result=${result}`);
            return result;
        };
}
function emnu_classloader(name){
    Java.perform(function(){
        Java.choose("dalvik.system.PathClassLoader",{
            onMatch: function(instance){
                console.log(instance)
                console.log(Java.ClassFactory)
                var factory = Java.ClassFactory.get(instance)
                try{
                    var myClass = factory.use(name)
                    foo(myClass)
                    return "stop"
                }catch(e){
                    console.log("next")
                    console.log(e)
                }
            },
            onComplete:function(){
                console.log("Done")
            }
        })
    })
}
function usewithclassloader(name) {
    Java.perform(function () {
        // Java.choose("com.example.androiddemo.Activity.FridaActivity5",{
        //     onMatch:function(x){
        //         console.log(x.getDynamicDexCheck().$className)
        //     },onComplete:function(){}
        // })
        console.log("start")
        Java.enumerateClassLoaders({
            onMatch: function (loader) {
                try {
                    if(loader.findClass(name)){
                        console.log("Successfully found loader")
                        console.log(loader);
                        Java.classFactory.loader = loader ;
                    }
                }
                catch(error){
                    console.log("find error:" + error)
                }
            },
            onComplete: function () {
                console.log("end1")
            }
        })
        let TXLivePlayer = Java.use("lqb.whwuhmm.yvig.TXLivePlayer");
        TXLivePlayer["startLivePlay"].implementation = function (str, i9) {
            console.log(`TXLivePlayer.startLivePlay is called: str=${str}, i9=${i9}`);
            let result = this["startLivePlay"](str, i9);
            console.log(`TXLivePlayer.startLivePlay result=${result}`);
            return result;
        };
        TXLivePlayer["$init"].implementation = function (context) {
            console.log(`TXLivePlayer.$init is called: context=${context}`);
            this["$init"](context);
        };
        let a = Java.use("com.tencent.liteav.txcvodplayer.a.a");
        a["g"].implementation = function () {
            console.log(`a.g is called`);
            this["g"]();
        };
        console.log("end2")
    })
}

usewithclassloader("lqb.whwuhmm.yvig.TXLivePlayer");
// hook_player();
// start();