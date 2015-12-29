/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AIRMapMarker.h"
#import "AIRMapCallout.h"

#import <MapKit/MapKit.h>
#import <UIKit/UIKit.h>

#import "RCTConvert+MapKit.h"
#import "RCTComponent.h"
#import "AIRMap.h"
#import "SMCalloutView.h"

@interface AIRMapMarker : MKAnnotationView <MKAnnotation>

@property (nonatomic, strong) AIRMapCallout *calloutView;
@property (nonatomic, weak) AIRMap *map;

@property (nonatomic, strong) NSString *identifier;
@property (nonatomic, copy) NSString *title;
@property (nonatomic, copy) NSString *subtitle;
@property (nonatomic, assign) CLLocationCoordinate2D coordinate;
@property (nonatomic, strong) UIColor *pinColor;

@property (nonatomic, copy) RCTBubblingEventBlock onPress;
@property (nonatomic, copy) RCTDirectEventBlock onSelect;
@property (nonatomic, copy) RCTDirectEventBlock onDeselect;
@property (nonatomic, copy) RCTDirectEventBlock onCalloutPress;

- (MKAnnotationView *)getAnnotationView;
- (void)fillCalloutView:(SMCalloutView *)calloutView;
- (BOOL)shouldShowCalloutView;

@end


@interface EmptyCalloutBackgroundView : SMCalloutBackgroundView
@end