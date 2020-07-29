//初始化config信息
import httpServer from './httpService';
import wx from "weixin-js-sdk";

const _weChatInterface = '//action.yoho.cn/api/share/getSignPackage';//签名等相关配置，yoho公众号
module.exports = function wxCheck(shareDate) {
    httpServer.get(_weChatInterface + "?pageurl=" + encodeURIComponent(location.href.split('#')[0])).then((json) => {
        if (json !== undefined && json !== '') {
            var _appId = json.appId.toString();
            var _timestamp = json.timestamp;
            var _nonceStr = json.nonceStr.toString();
            var _signature = json.signature.toString();
            wx.config({
                debug: false,
                appId: _appId,
                timestamp: _timestamp,
                nonceStr: _nonceStr,
                signature: _signature,
                jsApiList: [
                    'checkJsApi',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'hideMenuItems',
                    'showMenuItems',
                    'hideAllNonBaseMenuItem',
                    'showAllNonBaseMenuItem',
                    'translateVoice',
                    'startRecord',
                    'stopRecord',
                    'onVoiceRecordEnd',
                    'playVoice',
                    'pauseVoice',
                    'stopVoice',
                    'uploadVoice',
                    'onVoicePlayEnd',
                    'downloadVoice',
                    'chooseImage',
                    'previewImage',
                    'uploadImage',
                    'downloadImage',
                    'getNetworkType',
                    'openLocation',
                    'getLocation',
                    'hideOptionMenu',
                    'showOptionMenu',
                    'closeWindow',
                    'scanQRCode',
                    'chooseWXPay',
                    'openProductSpecificView',
                    'addCard',
                    'chooseCard',
                    'openCard'
                ]
            });

            let share_data = shareDate || {
                title: '',
                imgUrl: '',
                desc: '',
                link: document.location.href,
                success: function(){}
            };

            function share() {
                wx.ready(function () {
                    //构造分享信息
                    var shareData = share_data;

                    var voice_localId = '';
                    var is_start = false;

                    // 2.1 “分享给朋友”
                    wx.onMenuShareAppMessage(shareData);

                    // 2.2 “分享到朋友圈”
                    wx.onMenuShareTimeline(shareData);

                    // 2.3 “分享到QQ”
                    wx.onMenuShareQQ(shareData);

                      // 2.4 “分享到微博”
                    wx.onMenuShareWeibo(shareData);
                    //document.getElementById('media').play();

                    //bindUploadEvent();
                });
            }

            setTimeout(share, 1000);
        }
        else {

        }
    })
}

