Tests the feasibility of putting RMMZ plugins in subfolders

IMPORTANT: YOU MUST OWN A LEGEL COPY OF THE RMMZ SOFTWARE TO USE THIS DEMO

Installation Instructions:

    Create a new RMMZ project
    Download this repositroy as a zipped file
    Unzip the zipped file into that new RMMV project(After clicking into the "RMMZ-Plugin-Subfolder-Test--master" folder)

My test results on the plugin loading times difference between normal plugin placement and placing plugins in deeply nested(18 levels) subfolders(loadTimes = 10000 for the same plugin with 2336KB):

control - 10.735000018030405ms

normal - 439.41499991342425ms

subfolder - 495.79000007361174ms

Testing machines(PC) - i7-7700K + ASUS GTX 950 + 4 * 8GB DDR4 2400

My test results on the plugin loading times difference between normal plugin placement and placing plugins in deeply nested(16 levels) subfolders(loadTimes = 10000 for the same plugin with 2336KB):

control - 37.19999999999891ms

normal - 1281.7000000000007ms

subfolder - 1424.4999999999663ms

Testing machines(Mobile): Snapdragon 450
