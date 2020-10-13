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
