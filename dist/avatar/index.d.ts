import * as React from 'react';
export declare enum AvatarStyle {
    Circle = "Circle",
    Transparent = "Transparent"
}
export interface Props {
    avatarStyle: AvatarStyle;
    style?: React.CSSProperties;
}
export declare const AvatarNew: React.FC<any>;
