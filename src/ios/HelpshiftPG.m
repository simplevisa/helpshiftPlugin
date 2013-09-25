/*
 * HelpshiftPG.m
 * Helpshift PhoneGap Plugin
 *
 * Get the documentation at http://www.helpshift.com/docs
 *
*/

#import "HelpshiftPG.h"

@implementation HelpshiftPG

- (void)init:(CDVInvokedUrlCommand*)command {

    NSString *appId = [command.arguments objectAtIndex:0];
    NSString *domainName = [command.arguments objectAtIndex:1];
    NSString *apiKey = [command.arguments objectAtIndex:2];
    NSMutableDictionary *optionsDict = nil;
    if([command.arguments count] > 3) {
      optionsDict = [[[command.arguments objectAtIndex:3 withDefault:nil] mutableCopy] autorelease];
    }
    if (!optionsDict) {
        optionsDict = [[[NSMutableDictionary alloc] init] autorelease];
    }
    [optionsDict setObject:@"phonegap" forKey:@"sdkType"];
    [Helpshift installForAppID:appId domainName:domainName apiKey:apiKey withOptions : optionsDict];

    [[Helpshift sharedInstance] setDelegate:self];
}

- (void)showSupport:(CDVInvokedUrlCommand*)command{
    NSDictionary *optionsDict = nil;
    if ([command.arguments count] > 0)
        optionsDict = [command.arguments objectAtIndex:0 withDefault:nil];
    if (optionsDict) {
        [[Helpshift sharedInstance] showSupport:self.viewController withOptions:optionsDict];
    } else {
        [[Helpshift sharedInstance] showSupport:self.viewController];
    }
}

- (void)reportIssue:(CDVInvokedUrlCommand*)command {
    NSDictionary *optionsDict = nil;
    if ([command.arguments count] > 0)
        optionsDict = [command.arguments objectAtIndex:0 withDefault:nil];
    if (optionsDict) {
        [[Helpshift sharedInstance] reportIssue:self.viewController withOptions:optionsDict];
    } else {
        [[Helpshift sharedInstance] reportIssue:self.viewController];
    }
}

- (void)showInbox:(CDVInvokedUrlCommand*)command {
    [[Helpshift sharedInstance] showInbox:self.viewController];
}

- (void) showFAQs:(CDVInvokedUrlCommand*)command {
    NSDictionary *optionsDict = nil;
    if ([command.arguments count] > 0)
        optionsDict = [command.arguments objectAtIndex:0 withDefault:nil];
    if (optionsDict) {
       [[Helpshift sharedInstance] showFAQs:self.viewController withOptions:optionsDict];
    } else {
       [[Helpshift sharedInstance] showFAQs:self.viewController];
    }
}

- (void)showFAQ:(CDVInvokedUrlCommand *)command {
    NSString *faqPublishId = [command.arguments objectAtIndex:0];
    [[Helpshift sharedInstance] showFAQ:faqPublishId withController:self.viewController];
}

- (void)showFAQSection:(CDVInvokedUrlCommand *)command {
    NSString *faqSectionPublishId = [command.arguments objectAtIndex:0];
    [[Helpshift sharedInstance] showFAQSection:faqSectionPublishId withController:self.viewController];
}

- (void)setUserIdentifier:(CDVInvokedUrlCommand *)command{
    NSString *userIdentifier = [command.arguments objectAtIndex:0];
    [Helpshift setUserIdentifier:userIdentifier];
}

- (void)setUsername:(CDVInvokedUrlCommand*)command {
    NSString *userName = [command.arguments objectAtIndex:0];
    [Helpshift setUsername:userName];
}

- (void)setUseremail:(CDVInvokedUrlCommand*)command {
    NSString *userEmail = [command.arguments objectAtIndex:0];
    [Helpshift setUseremail:userEmail];
}

- (void)leaveBreadCrumb:(CDVInvokedUrlCommand*)command {
    NSString *breadCrumb = [command.arguments objectAtIndex:0];
    [Helpshift leaveBreadCrumb:breadCrumb];
}

- (void) clearBreadCrumbs:(CDVInvokedUrlCommand*)command {
  [[Helpshift sharedInstance] clearBreadCrumbs];
}

- (void) clearUserData:(CDVInvokedUrlCommand*)command {
  [[Helpshift sharedInstance] clearUserData];
}

- (void) notificationCountAsync:(CDVInvokedUrlCommand*)command {
    BOOL isAsync = [[command.arguments objectAtIndex:0 withDefault:[NSNumber numberWithBool:NO]] boolValue];
    if(isAsync) {
        [[Helpshift sharedInstance] notificationCountAsync:YES];
    } else {
        NSInteger notifyCount = [[Helpshift sharedInstance] notificationCountAsync:NO];
        int count = notifyCount;
        CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsInt:count];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }
}

-(NSData*) bytesFromHexString:(NSString *)aString;
{
    NSString *theString = [[aString componentsSeparatedByCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]] componentsJoinedByString:nil];

    NSMutableData* data = [NSMutableData data];
    int idx;
    for (idx = 0; idx+2 <= theString.length; idx+=2) {
        NSRange range = NSMakeRange(idx, 2);
        NSString* hexStr = [theString substringWithRange:range];
        NSScanner* scanner = [NSScanner scannerWithString:hexStr];
        unsigned int intValue;
        if ([scanner scanHexInt:&intValue])
            [data appendBytes:&intValue length:1];
    }
    return data;
}

- (void) registerDeviceToken:(CDVInvokedUrlCommand*)command {
    NSString* tokenStr = [command.arguments objectAtIndex:0 withDefault:nil];
    if(tokenStr) {
        NSData *deviceToken = [self bytesFromHexString:tokenStr];
        [[Helpshift sharedInstance] registerDeviceToken:deviceToken];
    }
}

- (void) handleNotification:(CDVInvokedUrlCommand*)command {
    NSDictionary *notification = [command.arguments objectAtIndex:0 withDefault:nil];
    if (notification) {
        [[Helpshift sharedInstance] handleNotification:notification withController:self.viewController];
    }
}

- (void) handleLocalNotification:(CDVInvokedUrlCommand*)command {
    NSString *issueID = [command.arguments objectAtIndex:0 withDefault:nil];
    if (issueID) {
      UILocalNotification *notif = [[[UILocalNotification alloc] init] autorelease];
      notif.userInfo = @{@"issue_id" : issueID};
      [[Helpshift sharedInstance] handleLocalNotification:notif withController:self.viewController];
    }
}

#pragma mark HelpshiftDelegate Implementation
- (void) notificationCountAsyncReceived:(NSInteger)count {
    NSString *jsString = nil;
    jsString = [NSString stringWithFormat:@"HelpshiftPG._nativeNotificationCall(\"%d\");", count];
    [self.commandDelegate evalJs:jsString];
}

- (void) helpshiftSessionHasEnded {
    NSString *jsString = nil;
    jsString = [NSString stringWithFormat:@"HelpshiftPG._nativeSessionEndedCall();"];
    [self.commandDelegate evalJs:jsString];
}
@end
