# heraldry

Simple Google Chrome extension that that serves some fun facts and an image at random. The starting use case is to serve up some special space missions.

## Status
This is now in a state where I'm not embarrassed about the layout's aesthetics. 

# How to install as a developer
_Note: This application uses Google Chrome Extension concepts. You may want to be familiar with both the [Hello Extension](https://developer.chrome.com/extensions) and the [Get Started Tutorial](https://developer.chrome.com/extensions/getstarted) which are helpful onramps to developing Chrome Extensions._
1. Clone this repo to your local directory of choice
1. Download the extension content from this Google Drive directory (link TBD) to your local directory. At the completion of this step, the directory should look like:
   ```
   heraldry/  
      patches/  
      stylesheets/  
      mainfest.json  
      heraldry_table.csv  
      heraldry.js  
      ...  
   ```
1. From your command line and within the heraldry directory, execute `python table_utility.py`. This makes sure `heraldry_config.js` is updated to reflect the data in `heraldry_table.csv`. Note: you can manually update the content of this table by opening the file locally with a spreadsheet application. If you update the file, make sure to run `python table_utility.py` again.
1. Place Chrome into [developer mode and unpack the extension](https://developer.chrome.com/extensions/getstarted#manifest).
1. Make sure to turn off any extensions that may conflict with this one. Examples include any extensions (like [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=en)) that also execute when opening a new tab.
1. Open a new tab and let the extension run.

# Next Steps
In no particular order: 
- [x] Write up how to install this extension from GitHub
- [ ] Figure out how to upload to the Google Chrome extension store so regular users can use it
- [ ] Add more space missions for more fun! There are currently 10 missions loaded. Load more Apollo missions next.
- [ ] Document the process to add content and the push it to the extension
- [ ] Make an options page
- [ ] Use the collapsible box as a container for more interesting content than a link (pictures, videos, text, etc)
- [ ] Make the add content process easier to add and delete content. This way individual users can add their own content themes, so it doesn't have to be space missions. 
