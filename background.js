/**
 * Created by jguido on 4/13/19.
 */

'use strict';

chrome.tabs.onCreated.addListener(function() {
    console.log('A new tab has been opened. Randomly selected a space mission');
});

