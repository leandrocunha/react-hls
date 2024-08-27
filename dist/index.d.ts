import React, { RefObject } from 'react';
import { Config } from 'hls.js';
export declare enum HlsMimeType {
    M3U8 = "application/vnd.apple.mpegurl",
    M4A = "audio/mp4",
    M4S = "video/iso.segment",
    M4V = "video/mp4",
    MP4 = "video/mp4",
    TS = "video/mp2t"
}
export interface HlsPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    hlsConfig?: Config;
    playerRef: RefObject<HTMLVideoElement>;
    src: string;
    type: HlsMimeType;
}
declare function ReactHlsPlayer({ hlsConfig, playerRef, src, autoPlay, ...props }: HlsPlayerProps): React.JSX.Element;
export default ReactHlsPlayer;
