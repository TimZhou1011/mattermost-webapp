// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/**
 * Create a placehold desktopBridge if one doens't exist. Likely means we're not running in the desktop client.
 */
if(!window.desktopBridge) {
    window.desktopBridge = {
        on: () => {
            console.log("Desktop bridge has not been initialized.")
        },
        emit: () => {},
    };
}

/**
 * Returns a reference to the desktop bridge if available, or an object to silently ignore any interraction
 */
export const desktopBridge = window.desktopBridge;