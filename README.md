### $${\color{orange}COUNTDOWN \space FROM \space A \space SPECIFIC \space GIVEN}$$
### $${\color{orange}DATE \space IN \space JSON \space FILE \space OR \space STATIC \space PROPERTIES \space DEFINED \space IN \space JSON \space FILE}$$

#### Select the directory where is package.json, run `npm install` or `npm i` to install node modules.

#### Use ``npm run dev`` or ``vite`` to start the project in development system.

##### **JSON GUIDE**:
```json
    {
        "date": {
            "day": "[day of the month, must be greater than 0, and less than the maximum of the month]",
            "month": "[number of the month of the year, between 1 and 12]",
            "year": "[year, if you want to real coutdown, must be greater than the current year(or equals if month or day is greater)]"
        },
        "properties":  {
            "days" : "[number of days to countdown, must be greater or equals to 0]",
            "hours": "[number of hours to countdown, must be greater or equals to 0]",
            "minutes": "[number of minutes to countdown, must be greater or equals to 0]",
            "second": "[number of seconds to countdown, must be greater or equals to 0]"
        }
    }
```
