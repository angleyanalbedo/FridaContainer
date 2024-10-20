FCAnd.enumerateClassLoadersAndUse("com.yc.video.player.VideoPlayer",(cls)=>{
    console.log("VideoPlayer")
    let VideoPlayer = cls;
    VideoPlayer["getUrl"].implementation = function () {
        console.log(`VideoPlayer.getUrl is called`);
        let result = this["getUrl"]();
        console.log(`VideoPlayer.getUrl result=${result}`);
        return result;
    };
    
    VideoPlayer["init"].implementation = function (attributeSet: any) {
        console.log(`VideoPlayer.init is called: attributeSet=${attributeSet}`);
        this["init"](attributeSet);
        this.getUrl();
    };
 }
)
 FCAnd.enumerateClassLoadersAndUse("com.yunbao.main.activity.video.VideoFlActivity",(cls)=>{
    let VideoFlActivity = cls
    VideoFlActivity["main"].implementation = function () {
        console.log(`VideoFlActivity.main is called`);
        this["main"]();
    };
 });
 

var app = Java.use("com.sec.wrap.SecApplication")
app.loadLib.implementation= function () {
    console.log("loadLib");

    return this.loadLib();
    
}