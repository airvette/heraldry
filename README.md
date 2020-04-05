# heraldry

Simple Google Chrome extension that that serves some fun facts and an image at random. The starting use case is to serve up some special space missions.

## Status
- This is now in a basic state where the aesthetics are simple and pleasing
- Adding documentation and features to make it more user friendly

## Next Steps
In no particular order: 
- [x] Write up how to install this extension from GitHub
- [ ] Follow through on the [publishing tasks to Chrome Web Store](https://developer.chrome.com/webstore/publish) so regular users can use it
- [ ] Add more space missions for more fun! There are currently 10 missions loaded. Load more Apollo missions next.
- [x] Document the process to add content and the push it to the extension
- [ ] Make an options page
- [ ] Use the collapsible box as a container for more interesting content than a link (pictures, videos, text, etc)
- [x] Make the add content process easier to add and delete content. This way individual users can add their own content themes, so it doesn't have to be space missions. **Added a python function to streamline this a bit. More refinement can probably be used, but will need to wait**
- [ ] Improve content add process by having `table_utility` provide a log indicating if there were any table rows with invalid data
- [ ] Improve content add process by having `table_utility` not push invalid configs to `heraldry_config.js`
- [ ] Come up with default content and images that can be displayed if the config file has issues
- [x] Figure out a way to limit the height of a patch and have it still look good. Currently the gemini-11.png image is too tall.
- [ ] Add button that can toggle pin content so that it comes up everytime a new tab is opened

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
1. From your command line and within the heraldry directory, execute `python table_utility.py` (pandas dependency). This makes sure `heraldry_config.js` is updated to reflect the data in `heraldry_table.csv`. See [Manually Updating Content](https://github.com/airvette/heraldry/blob/master/README.md#manually-updating-content) to get more information on changing the extension content. 
1. Place Chrome into [developer mode and unpack the extension](https://developer.chrome.com/extensions/getstarted#manifest).
1. Make sure to turn off any extensions that may conflict with this one. Examples include any extensions (like [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=en)) that also execute when opening a new tab.
1. Open a new tab and let the extension run.

# Manually Updating Content
Make sure you've completed the steps for [installing as a developer](https://github.com/airvette/heraldry/blob/master/README.md#how-to-install-as-a-developer).
1. Open `heraldry_table.csv` in a spreadsheet application (such as Excel, Numbers, Open Office, etc or PyCharm). Make the changes and save as a .csv. Note the way the data is structured: 
   - All columns except the id column will be converted as strings to `heraldry_config.js`. 
   - The `link` column (not `patch_link`) will be passed as a URL to the extension and will be used in an anchor (`<a>`) tag.
2. Run `python table_utility.py` so the values within the table can be extracted and written to `heraldry_config.js`. `heraldry_config.js` is a JavaScript dictionary that the extension references to present content correctly and reference the correct images. Currently all key-value pairs are strings (except `id`), but that may change.
   - This script has a pandas dependency (`pip3 install pandas`)
3. (Optional) Verify that the change was successful by [unpacking the extension in developer mode](https://developer.chrome.com/extensions/getstarted#manifest).
4. Increment the version number in `manifest.json` so the Google extension store will accept it. This may easiest by incrementing the patch number (third digit).
5. Commit and push the changes.
   - Stage changes: `git add .`
   - Commit changes: `git commit`
   - Push to remote: `git push origin master`
5. Upload to your extension site on the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole).
   - Zip the file on your local machine
   - Navigate to your extension, select "Package" and click "Upload New Package." 
4. Repeat as necessary.
