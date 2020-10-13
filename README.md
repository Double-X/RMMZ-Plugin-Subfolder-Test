Tests the feasibility of putting RMMZ plugins in subfolders

IMPORTANT: YOU MUST OWN A LEGEL COPY OF THE RMMZ SOFTWARE TO USE THIS DEMO

Installation Instructions:

    Create a new RMMZ project
    Download this repositroy as a zipped file
    Unzip the zipped file into that new RMMV project(After clicking into the "RMMZ-Plugin-Subfolder-Test--master" folder)

Plugin Loading Times Differences

1. Testing machines(PC) - i7-7700K + ASUS GTX 950 + 4 * 8GB DDR4 2400
   Between normal plugin placement and placing plugins in deeply nested(18 levels) subfolders(loadTimes = 10000 for the same plugin with 2336KB):

   i. control - 10.735000018030405ms

   ii. normal - 439.41499991342425ms

   iii. subfolder - 495.79000007361174ms



2. Testing machines(Mobile): Snapdragon 450
   Between normal plugin placement and placing plugins in deeply nested(16 levels) subfolders(loadTimes = 10000 for the same plugin with 2336KB):

   i. control - 37.19999999999891ms

   ii. normal - 1281.7000000000007ms

   iii. subfolder - 1424.4999999999663ms

Average Game Loop Delta Time Differences

1. Testing machines(PC) - i7-7700K + ASUS GTX 950 + 4 * 8GB DDR4 2400
   Between normal plugin placement and placing plugins in deeply nested(18 levels) subfolders(loadTimes = 1490 for the same plugin with 2339KB):

   i. control - Around 0.2ms

   ii. normal - Around 33.1ms

   iii. subfolder - Around 33.3ms

2. Testing machines(Mobile): Snapdragon 450
   Between normal plugin placement and placing plugins in deeply nested(16 levels) subfolders(loadTimes = 1490 for the same plugin with 2339KB):

   i. control - Around 1.8ms

   ii. normal - Around 825.4ms

   iii. subfolder - Around 861.1ms
