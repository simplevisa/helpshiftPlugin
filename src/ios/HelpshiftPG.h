/*
 * HelpshiftPG.h
 * Helpshift PhoneGap Plugin
 *
 * Get the documentation at http://www.helpshift.com/docs
 *
*/

#import <Cordova/CDV.h>
#import "Helpshift.h"

@interface HelpshiftPG : CDVPlugin <HelpshiftDelegate>

- (void) init:(CDVInvokedUrlCommand*)command;

- (void) showSupport:(CDVInvokedUrlCommand*)command;

- (void) reportIssue:(CDVInvokedUrlCommand*)command;

- (void) showInbox:(CDVInvokedUrlCommand*)command;

- (void) showFAQs:(CDVInvokedUrlCommand*)command;

- (void) showFAQSection:(CDVInvokedUrlCommand*)command;

- (void) showFAQ:(CDVInvokedUrlCommand*)command;

- (void) setUserIdentifier:(CDVInvokedUrlCommand*)command;

- (void) setUsername:(CDVInvokedUrlCommand*)command;

- (void) setUseremail:(CDVInvokedUrlCommand*)command;

- (void) leaveBreadCrumb:(CDVInvokedUrlCommand*)command;

- (void) clearBreadCrumbs:(CDVInvokedUrlCommand*)command;

- (void) clearUserData:(CDVInvokedUrlCommand*)command;

- (void) notificationCountAsync:(CDVInvokedUrlCommand*)command;

- (void) registerDeviceToken:(CDVInvokedUrlCommand*)command;

- (void) handleNotification:(CDVInvokedUrlCommand*)command;

- (void) handleLocalNotification:(CDVInvokedUrlCommand*)command;
@end
