## webdriverio_automation_gui
webdriverio_automation_gui
Following tools were installed:
    1.Python 3.9.1
    2.Java SDK 15.0.2
    3.Node.js 12.18.1
    4.PowerShell 7.1.1.0
    5.Visual Studio Code 1.53.1
    6.NPM, Chai, Devtools(Performance, Network tests), JUnit and Allure report
    7.Geckodriver 0.29.0 //To open Mozilla Firefox for Parallel testing with Google Chrome
 
Execute Geckodriver application file so it is in "Listening" mode. 

Run the below command in the terminal to start the testing
```
npx wdio wdio.conf.js
```

wdio.conf.js includes code to add Custom Commands for the browser and a functionality to take screenshot of the browser after each test case ends. 

Once the test suite completes execution, "allure-results" folder is automatically created in the base folder. Execute the below commands manually to generate and open the report and "allure-report" will get created automatically. 
```
# Generate Report
allure generate --clean allure-results
# Open the generated report
allure open allure-report
```
In addition to the Allure reports, Jnuit XML output will also be generated automatically in the "junit_test" folder. This folder gets created automatically at runtime as well. 