import React from 'react';

interface CommonAvatarProps {
    src?: string;
    alt?: string;
    size?: number;
    name?: string;
    style?: React.CSSProperties;
}
declare const CommonAvatar: React.FC<CommonAvatarProps>;

export { CommonAvatar };
