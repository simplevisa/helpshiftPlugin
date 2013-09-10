//
//  HelpshiftPG.h
//  PhoneGap native plugin for HelpshiftSDK version 2.0.1 
//
//  Created by Suman Raj on 18/03/13.
//  Copyright (c) 2013 Helpshift,Inc., All rights reserved.	
//

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

- (void) startNotificationCountPolling:(CDVInvokedUrlCommand*)command;

- (void) stopNotificationCountPolling:(CDVInvokedUrlCommand*)command;

- (void) notificationCountAsync:(CDVInvokedUrlCommand*)command;

- (void) registerDeviceToken:(CDVInvokedUrlCommand*)command;

- (void) handleNotification:(CDVInvokedUrlCommand*)command;

@end
