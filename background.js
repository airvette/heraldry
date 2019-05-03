/**
 * Created by jguido on 4/13/19.
 */

'use strict';

chrome.tabs.onCreated.addListener(function() {
    console.log('A new tab has been opened. Set color to  Light Sky Blue');
});

