Java.perform(function() {
    let LiveRoomStatus = Java.use("com.sealviewer.coremodel.datamodel.http.entities.response.LiveRoomStatus");
    LiveRoomStatus.$init.overload().implementation = function () {
        this.payPrice = 0
        this.paytStatus = 'DirectView'
        this.payType = 'whole'
        this.trailSeconds = 1000000;
    }

    let GirlAGLiveShowView = Java.use("com.sealviewer.home.widget.GirlAGLiveShowView");
    GirlAGLiveShowView["getRoomStauts"].implementation = function () {
        console.log(`GirlAGLiveShowView.getRoomStauts is called`);
        // this["getRoomStauts"]();
        this.joinRtcChannel();
        // this.layoutGirlLiveshowBinding.clearLayout.setVisibility(0);

    };

    GirlAGLiveShowView["setPayInfo"].implementation = function (str, f) {
        console.log(`GirlAGLiveShowView.setPayInfo is called: str=${str}, f=${f}`);
        console.log('GirlAGLiveShowView.setPayInfo str=Free')
        this["setPayInfo"]('"whole"', 0);
    };
    // 设置观看信息
    GirlAGLiveShowView["setRoomStatus"].implementation = function (liveRoomStatus) {
        console.log(`GirlAGLiveShowView.setRoomStatus is called: liveRoomStatus=${liveRoomStatus}`);
        console.log(`GirlAGLiveShowView.setRoomStatus liveRoomStatus.paytStatus =  ${liveRoomStatus.payStatus}`)
        liveRoomStatus["payStatus"] = 'DirectView';
        liveRoomStatus["payType"] = 'whole';
        liveRoomStatus["trailSeconds"] = 1000000;
        liveRoomStatus["payPrice"] = 0;
        this["setRoomStatus"](liveRoomStatus);
    };
    GirlAGLiveShowView["showAskToPay"].implementation = function (context, str) {
        console.log(`GirlAGLiveShowView.showAskToPay is called: context=${context}, str=${str}`);
        // this["showAskToPay"](context, str);
    };
    GirlAGLiveShowView["showAskToRecharge"].implementation = function (context) {
        console.log(`GirlAGLiveShowView.showAskToRecharge is called: context=${context}`);
        // this["showAskToRecharge"](context);
    };
    
    GirlAGLiveShowView["showAskToConnectMicRecharge"].implementation = function () {
        console.log(`GirlAGLiveShowView.showAskToConnectMicRecharge is called`);
        this["showAskToConnectMicRecharge"]();
    };
    // 时间结束不再弹出
    let AnonymousClass22 = Java.use("com.sealviewer.home.widget.GirlAGLiveShowView$22");
    AnonymousClass22["onCountDownTimeFinish"].implementation = function () {
        console.log(`AnonymousClass22.onCountDownTimeFinish is called`);
    };
    // 不再倒计时
    let LiveShowTimeView = Java.use("com.sealviewer.common.widget.LiveShowTimeView");
    LiveShowTimeView["showType"].implementation = function (str, str2, i) {
        console.log(`LiveShowTimeView.showType is called: str=${str}, str2=${str2}, i=${i}`);
        this["showType"]('DirectView', 'whole', 10000000);
    };
    let AnchorCard = Java.use("com.sealviewer.coremodel.datamodel.http.entities.response.AnchorCard");
    // Hook clone 方法
    
    AnchorCard["getCardPointStr"].implementation = function () {
        console.log(`AnchorCard.getCardPointStr is called`);
        let result = this["getCardPointStr"]();
        console.log(`AnchorCard.getCardPointStr result=${result}`);
        console.log(`AnchorCard.contact contact=${this["contact"]}`);
        console.log(`AnchorCard.type type=${this["type"]}`);
        return result;
    };
    
    AnchorCard["getUserPointStr"].implementation = function () {
        console.log(`AnchorCard.getUserPointStr is called`);
        let result = this["getUserPointStr"]();
        console.log(`AnchorCard.getUserPointStr result=${result}`);
        console.log(`AnchorCard.getCardPointStr result=${result}`);
        console.log(`AnchorCard.contact contact=${this["contact"]}`);
        console.log(`AnchorCard.type type=${this["type"]}`);
        return result;
    };
    let CommonService = Java.use("com.sealviewer.coremodel.datamodel.http.service.CommonService");
    CommonService["getAnchorCard"].overload('int').implementation = function (i) {
        console.log(`CommonService.getAnchorCard is called: i=${i}`);
        let result = this["getAnchorCard"](i);
        console.log(`CommonService.getAnchorCard result=${result.toString()}`);
        return result;
    };
})
function searhAnchorCard(){
    Java.perform(function () {
        // 查找 AnchorCard 的实例
        Java.choose('com.sealviewer.coremodel.datamodel.http.entities.response.AnchorCard', {
            onMatch: function(instance) {
                console.log('找到 AnchorCard 实例:', instance);
                // 你可以在这里调用实例的方法或访问字段
                console.log('cardPoint:', instance.cardPoint.value);
                console.log('contact:', instance.contact.value);
                console.log('type:', instance.type.value);
                console.log('userPoint:', instance.userPoint.value);
            },
            onComplete: function() {
                console.log('选择完成');
            }
        });
    });
}