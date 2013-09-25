/*
 * helpshiftpg.js
 * Helpshift PhoneGap Plugin 3.0.0 for the
 * Helpshift iOS SDK 3.0.0 sdk
 *
 * Get the documentation at http://www.helpshift.com/docs
 *
*/

/**
    @namespace HelpshiftPG

    @description
    This document describes the API's exposed by the Helpshift PhoneGap Plugin which the developers can use to integrate Helpshift support
    into their iOS PhoneGap applications. If you want documentation regarding how to use the various features provided by the Helpshift SDK,
    please visit <a href="http://developers.helpshift.com/Integration+guide+for+iOS+SDK">helpshift how-to page</a>

*/

var HelpshiftPG = {

    notificationCB:null,
    sessionEndedCB:null,

    /**
    * Initialize Helpshift support. When initializing Helpshift you must pass these three params.
      You initialize Helpshift by adding HelpshiftPG.init method in onDeviceReady method.
    *
    * @param {string} appId This is the unique ID assigned to your app
    * @param {string} domainName This is your domain name without any http:// or forward slashes
    * @param {string} apiKey This is your developer API Key
    * @param {object} [options] To initialise the helpshift SDK with additional configuration options
    *
    * @example HelpshiftPG.init("&lt;APP_ID&gt;", "&lt;DOMAIN_NAME&gt;", "&lt;API_KEY&gt;");
    */
    init:function(appId, domainName, apiKey, options) {
      if (options && typeof options == "object") {
        cordova.exec(null, null, "HelpshiftPG", "init", [appId, domainName, apiKey, options]);
      } else
        cordova.exec(null, null, "HelpshiftPG", "init", [appId, domainName, apiKey]);
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
            cordova.exec(null, null, "HelpshiftPG", "showSupport", [options]);
        } else {
            cordova.exec(null, null, "HelpshiftPG", "showSupport", []);
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
            cordova.exec(null, null, "HelpshiftPG", "reportIssue", [options]);
        } else {
            cordova.exec(null, null, "HelpshiftPG", "reportIssue", []);
        }
    },

    /**
    * Show the helpshift issues inbox screen
    *
    * @example HelpshiftPG.showInbox();
    */
    showInbox:function() {
        cordova.exec(null, null, "HelpshiftPG", "showInbox", []);
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
            cordova.exec(null, null, "HelpshiftPG", "showFAQs", [options]);
        } else {
            cordova.exec(null, null, "HelpshiftPG", "showFAQs", []);
        }
    },

    /**
    * Show the helpshift screen with faqs from a particular section.
      To show the Helpshift screen for showing a particular faq section you need to pass the publish-id of the faq section.
    *
    * @param {string} faqSectionPublishId The publish id associated with the faq section which is shown in the FAQ page on the admin side
        (__yourcompanyname__.helpshift.com/admin/faq/).
    *
    * @example HelpshiftPG.showFAQSection("&lt;PUBLISH_ID&gt;");
    */
    showFAQSection:function(faqSectionPublishId) {
        if(faqSectionPublishId && typeof faqSectionPublishId === "string") {
            cordova.exec(null, null, "HelpshiftPG", "showFAQSection", [faqSectionPublishId]);
        }
    },

    /**
    * Show the helpshift screen with a particular faq.
      To show the Helpshift screen for showing a particular faq you need to pass the publish-id of the faq.
    *
    * @param {string} faqPublishId The publish id associated with the faq which is shown when you expand a single FAQ
        (__yourcompanyname__.helpshift.com/admin/faq/)
    *
    * @example HelpshiftPG.showFAQ("&lt;PUBLISH_ID&gt;");
    */
    showFAQ:function(faqPublishId) {
        if(faqPublishId && typeof faqPublishId === "string") {
            cordova.exec(null, null, "HelpshiftPG", "showFAQ", [faqPublishId]);
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
            cordova.exec(null, null, "HelpshiftPG", "setUserIdentifier", [userIdentifier]);
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
            cordova.exec(null, null, "HelpshiftPG", "setUsername", [username]);
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
            cordova.exec(null, null, "HelpshiftPG", "setUseremail", [useremail]);
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
            cordova.exec(null, null, "HelpshiftPG", "leaveBreadCrumb", [breadCrumb]);
        }
    },

    /**
    * Clears Breadcrumbs list.
    * Breadcrumbs list stores upto 100 latest actions. You'll receive those in every Issue.
    * If for some reason you want to clear previous messages, you can use this method.
    *
    * @example HelshiftPG.clearBreadCrumbs();
    */

    clearBreadCrumbs:function() {
      cordova.exec(null, null, "HelpshiftPG", "clearBreadCrumbs", []);
    },

    /**
    * Clears all local Helpshift user data
    * Clears all local data which is user related (includes issues, user info, faq likes, etc).
    *
    * @example HelpshiftPG.clearUserData();
    */
    clearUserData:function() {
      cordova.exec(null, null, "HelpshiftPG", "clearUserData", []);
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
     * Provide a function callback for HS Session ended event.
     * You need to pass a callback function to recieve the session-ended event when user comes out of the support section
     *
     * @param {function} callback The function to receive the session-ended event.
     *
     * @example function sessionEndedCallback () {alert("HS Session ended");}
     * HelpshiftPG.registerSessionEndedCallback(sessionEndedCallback);
     */

    registerSessionEndedCallback:function(callback) {
        if(typeof callback === "function") {
            this.sessionEndedCB = callback;
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
            cordova.exec(null, null, "HelpshiftPG", "notificationCountAsync", [true]);
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
    * Register the deviceToken to enable push notifications
      To enable push notifications in the Helpshift iOS SDK, set the Push Notifications deviceToken using this method.
      Please contact us at support[at]helpshift.com for implementing Apple Push Notification.
    *
    * @param {string} deviceToken The deviceToken received from the push notification servers.
    *
    * @example HelpshiftPG.registerDeviceToken("&lt;DEVICE_TOKEN&gt;");
    */
    registerDeviceToken:function(deviceToken) {
        if(deviceToken && typeof deviceToken === "string") {
            cordova.exec(null, null, "HelpshiftPG", "registerDeviceToken", [deviceToken]);
        }
    },

    /**
    * Forward the push notification for the HelpshiftSDK to handle
      To show support on Notification opened, call handleNotification. If the value of the ?origin? field is ?helpshift? call the handleNotification api.
      Please contact us at support[at]helpshift.com for implementing Apple Push Notification.
    *
    * @param {object} notificationInfo The object containing the notification information
    *
    * @example HelpshiftPG.handleNotification(userInfo);
    */
    handleNotification:function(notificationInfo) {
        if(notificationInfo && typeof notificationInfo === "object") {
            cordova.exec(null, null, "HelpshiftPG", "handleNotification", [notificationInfo]);
        }
    },

    /**
    * Forward the local notification for the HelpshiftSDK to handle
      To show support on Notification opened, call handleLocalNotification. If the value of the ?origin? field is ?helpshift? call the handleLocalNotification api.
    *
    * @param {string} issueID The issueID received in the notification dictionary
    *
    * @example HelpshiftPG.handleLocalNotification(userInfo["issue_id"]);
    */
    handleLocalNotification:function(issueID) {
        if(issueID && typeof issueID === "string") {
            cordova.exec(null, null, "HelpshiftPG", "handleLocalNotification", [issueID]);
        }
    },

    _nativeNotificationCall:function(count) {
        if(this.notificationCB) {
            this.notificationCB.apply(this, [count]);
        }
    },

    _nativeSessionEndedCall:function() {
        if(this.sessionEndedCB) {
            this.sessionEndedCB.apply(this);
        }
    }

};
