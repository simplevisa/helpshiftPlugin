/*
 *  helpshiftpg.js
 *  Helpshift PhoneGap Plugin 1.0.0-beta.1 points to Helpshift iOS SDK 2.2.0 
 *
 *  Copyright (c) 2013 Helpshift,Inc., All rights reserved.
 */

/**
    @module HelpshiftPG
    
    @description
    This document describes the API's exposed by the Helpshift PhoneGap Plugin which the developers can use to integrate Helpshift support 
    into their iOS PhoneGap applications. If you want documentation regarding how to use the various features provided by the Helpshift SDK, 
    please visit <a href="http://www.helpshift.com/docs/howto/ios/v2.x/">helpshift how-to page</a> 

    @class
*/

var HelpshiftPG = {

    notificationCB:null,

    /**
    * Initialize Helpshift support. When initializing Helpshift you must pass these three params.
      You initialize Helpshift by adding HelpshiftPG.init method in onDeviceReady method. 
    *
    * @param {string} appId This is the unique ID assigned to your app
    * @param {string} domainName This is your domain name without any http:// or forward slashes
    * @param {string} apiKey This is your developer API Key
    *
    * @example HelpshiftPG.init("<APP_ID>", "<DOMAIN_NAME>", "<API_KEY>");
    */
    init:function(appId, domainName, apiKey) {
        cordova.exec(null, null, "HelpshiftPG", "init",[appId,domainName,apiKey]);
    },

    /**
    * Show the Helpshift support screen
    *
    * @param {object} [options] To show helpshift support screen with additional configuration options
    *
    * @example HelpshiftPG.showSupport();
    *  HelpshiftPG.showSupport({'showConvOnReportIssue':'YES'});
    */
    showSupport:function(options) {
        if (options && typeof options === "object") {
            if ('showConvOnReportIssue' in options) {
                cordova.exec(null, null, "HelpshiftPG", "showSupport",[options]);
            }
        } else {
            cordova.exec(null, null, "HelpshiftPG", "showSupport",[]);
        }
    },

    /**
    * Show the helpshift screen to report an issue
    *
    * @param {object} [options] To show helpshift report an issue screen with additional configuration options
    *
    * @example HelpshiftPG.reportIssue();
    *  HelpshiftPG.reportIssue({'showConvOnReportIssue':'NO'});
    */
    reportIssue:function(options) {
        if (options && typeof options === "object") {
            if ('showConvOnReportIssue' in options) {
                cordova.exec(null, null, "HelpshiftPG", "reportIssue",[options]);
            }
        } else {
            cordova.exec(null, null, "HelpshiftPG", "reportIssue",[]);
        }
    },

    /**
    * Show the helpshift issues inbox screen
    *
    * @example HelpshiftPG.showInbox();
    */
    showInbox:function() {
        cordova.exec(null, null, "HelpshiftPG", "showInbox",[]);
    },

    /**
    * Show the support screen with only the faqs
    *
    * @param {object} [options] To show the Helpshift screen with only the faq sections with search and additional configuration options
    *
    * @example HelpshiftPG.showFAQs();
    *  HelpshiftPG.showFAQs({'showConvOnReportIssue':'NO','showReportIssue':'YES'});
    */
    showFAQs:function(options) {
        if (options && typeof options === "object") {
            if (('showConvOnReportIssue' in options) || ('showReportIssue' in options)) {
                cordova.exec(null, null, "HelpshiftPG", "showFAQs",[options]);
            }
        } else {
            cordova.exec(null, null, "HelpshiftPG", "showFAQs",[]);
        }
    },

    /**
    * Show the helpshift screen with faqs from a particular section.
      To show the Helpshift screen for showing a particular faq section you need to pass the publish-id of the faq section.
    *
    * @param {string} faqSectionPublishId The publish id associated with the faq section which is shown in the FAQ page on the admin side 
        (__yourcompanyname__.helpshift.com/admin/faq/).
    * 
    * @example HelpshiftPG.showFAQSection("<PUBLISH_ID>");
    */
    showFAQSection:function(faqSectionPublishId) {
        if(faqSectionPublishId && typeof faqSectionPublishId === "string") {
            cordova.exec(null, null, "HelpshiftPG", "showFAQSection",[faqSectionPublishId]);
        }
    },

    /**
    * Show the helpshift screen with a particular faq.
      To show the Helpshift screen for showing a particular faq you need to pass the publish-id of the faq.
    *
    * @param {string} faqPublishId The publish id associated with the faq which is shown when you expand a single FAQ 
        (__yourcompanyname__.helpshift.com/admin/faq/)
    *
    * @example HelpshiftPG.showFAQ("<PUBLISH_ID>");
    */
    showFAQ:function(faqPublishId) {
        if(faqPublishId && typeof faqPublishId === "string") {
            cordova.exec(null, null, "HelpshiftPG", "showFAQ",[faqPublishId]);
        }
    },

    /**
    * Set the unique identifier for your users.
      This is part of additional user configuration. You can setup the unique identifier that this user will have with this api.  
    *
    * @param {string} userIdentifier A unique string to identify your users.
    *
    * @example HelpshiftPG.setUserIdentifier("user-id-100");
    */
    setUserIdentifier:function(userIdentifier) {
        if(userIdentifier && typeof userIdentifier === "string") {
            cordova.exec(null, null, "HelpshiftPG", "setUserIdentifier",[userIdentifier]);
        }
    },

    /**
    * Set the name of the application user.
      This is part of additional user configuration. If this is provided through the api, user will not be prompted to re-enter this information again.
    *
    * @param {string} username The name of the user.
    *
    * @example HelpshiftPG.setUsername("John");
    */
    setUsername:function(username) {
        if(username && typeof username === "string") {
            cordova.exec(null, null, "HelpshiftPG", "setUsername",[username]);
        }
    },

    /**
    * Set the email-id of the application user.
      This is part of additional user configuration. If this is provided through the api, user will not be prompted to re-enter this information again.
    *
    * @param {string} useremail A unique string to identify your users.
    *
    * @example HelpshiftPG.setUseremail("john@example.com");
    */
    setUseremail:function(useremail) {
        if(useremail && typeof useremail === "string") {
            cordova.exec(null, null, "HelpshiftPG", "setUseremail",[useremail]);
        }
    },

    /**
    * Add extra debug information regarding user-actions.
      You can add additional debugging statements to your code, and see exactly what the user was doing right before they reported the issue.
    *
    * @param {string} breadCrumb The string containing any relevant debugging information.
    *
    * @example HelpshiftPG.leaveBreadCrumb("settings button");
    */
    leaveBreadCrumb:function(breadCrumb) {
        if(breadCrumb && typeof breadCrumb === "string") {
            cordova.exec(null, null, "HelpshiftPG", "leaveBreadCrumb",[breadCrumb]);
        }
    },

    /**
    * Provide function callback for notification count.
      You need to pass a callback funtion to receive the notification count when replies posted to the issue.
    *
    * @param {function} callBack The function to receive the notification count
    *
    * @example function notificationCallback(count) { alert(count); }
    *  HelpshiftPG.registerNotificationCallback(notificationCallback); 
    */
    registerNotificationCallback:function(callBack) {
        if (typeof callBack === "function") {
            this.notificationCB = callBack;
        }
    },

    /**
    * Get the notification count for replies to reported issues.
      If you want to show your user notifications for replies on the issues posted, you can get the notification count asynchronously by 
      providing callback function in registerNotificationCallback
    *
    * @param {boolean} isAsync Whether the notification count is to be returned asynchronously via callback provided in registerNotificationCallback
    *
    * @example function notificationCallback(count) { alert(count); }
    *  HelpshiftPG.registerNotificationCallback(notificationCallback);
    *  HelpshiftPG.notificationCountAsync(false);               
    */
    notificationCountAsync:function(isAsync) {
        if(isAsync) {
            cordova.exec(null, null, "HelpshiftPG", "notificationCountAsync",[true]);
        } else {
            var notifyCb = this.notificationCB;
            cordova.exec(function(count) {
                if(notifyCb) {
                    notifyCb.apply(this, [count]);
                }
            }, null, "HelpshiftPG","notificationCountAsync", [false]);
        }
    },

    /**
    * Start a poll for getting notification count of replies to issues posted.
      If you want to start a background poll for notification counts of replies to posted issues, you can use the below method to start such a poll. 
      You can the polling interval by supplying a parameter to this api. Minimum poll interval is 3 seconds.
    *
    * @param {number} pollInterval The number of seconds for notification poll, if pollInterval is not provided default (10 seconds) is taken.
    *
    * @example function notificationCallback(count) { alert(count); }
    *  HelpshiftPG.registerNotificationCallback(notificationCallback);
    *  HelpshiftPG.startNotificationCountPolling(10);               
    */
    startNotificationCountPolling:function(pollInterval) {
        if(pollInterval && typeof pollInterval === "number") {
            cordova.exec(null, null, "HelpshiftPG", "startNotificationCountPolling",[pollInterval]);
        } else {
            cordova.exec(null, null, "HelpshiftPG", "startNotificationCountPolling",[]);
        }
    },

    /**
    * Stop the notification polling that was previously started with startNotificationCountPolling
      If you want to stop polling for notifications to posted issues, call this method.
    *
    */
    stopNotificationCountPolling:function() {
        cordova.exec(null, null, "HelpshiftPG", "stopNotificationCountPolling",[]);
    },
    
    /**
    * Register the deviceToken to enable push notifications
      To enable push notifications in the Helpshift iOS SDK, set the Push Notifications deviceToken using this method.
      Please contact us at support[at]helpshift.com for implementing Apple Push Notification.
    *
    * @param {string} deviceToken The deviceToken received from the push notification servers.
    *
    * @example HelpshiftPG.registerDeviceToken("<DEVICE_TOKEN>");
    */
    registerDeviceToken:function(deviceToken) {
        if(deviceToken && typeof deviceToken === "string") {
            cordova.exec(null, null, "HelpshiftPG", "registerDeviceToken",[]);
        }
    },

    /**
    * Forward the push notification for the HelpshiftSDK to handle
      To show support on Notification opened, call handleNotification. If the value of the “origin” field is “helpshift” call the handleNotification api.
      Please contact us at support[at]helpshift.com for implementing Apple Push Notification.
    *
    * @param {object} notificationInfo The object containing the notification information
    *
    * @example HelpshiftPG.handleNotification(userInfo);
    */
    handleNotification:function(notificationInfo) {
        if(notificationInfo && typeof notificationInfo === "object") {
            cordova.exec(null, null, "HelpshiftPG", "handleNotification",[notificationInfo]);
        }
    },

    _nativeNotificationCall:function(count) {
        if(this.notificationCB) {
            this.notificationCB.apply(this, [count]);
        }
    }
};