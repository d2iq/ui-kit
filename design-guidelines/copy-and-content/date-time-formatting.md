# Date and Time Formatting

Dates and times should be displayed as concisely as possible without preventing the user from seeing the level of detail required to complete their task.

## Referring to dates and times

When writing longform copy that refers to dates or times, use the same kind of language you would use in written communication. Month and weekday abbreviations are fine, but abbreviations for time units should be avoided.

For example:
"This cluster will be detached in 2 days."
"The job ran for 2 hours."
"This service will be available Mon, 01 Jan 2020."

## Abbreviations

Abbreviations may be used to save space or to prevent a timestamp from being so large that it distracts from the primary content. For example, if a timestamp is being displayed in a table with many columns, we would use abbreviation to save horizontal space in the column displaying times.

### Days of the week

Days of the week are abbreviated to 3 letters, and do not end with a period.

| Day of week | Abbreviation |
| ----------- | ------------ |
| Monday      | Mon          |
| Tuesday     | Tue          |
| Wednesday   | Wed          |
| Thursday    | Thu          |
| Friday      | Fri          |
| Saturday    | Sat          |
| Sunday      | Sun          |

### Months of the year

With the exception of September, months are also are abbreviated to 3 letters, and do not end with a period.

| Month     | Abbreviation |
| --------- | ------------ |
| January   | Jan          |
| February  | Feb          |
| March     | Mar          |
| April     | Apr          |
| May       | May          |
| June      | Jun          |
| July      | Jul          |
| August    | Aug          |
| September | Sept         |

### Units

Note: When abbreviating a unit, there should not be a space between the value and the unit. For example: "5 minutes" would be abbreviated as "5m".

| Unit         | Abbreviation |
| ------------ | ------------ |
| milliseconds | ms           |
| seconds      | s            |
| minutes      | m            |
| hours        | h            |
| days         | d            |
| weeks        | w            |
| months       | mo           |
| years        | y            |

## Absolute times

Absolute timestamps show the exact date and/or time an event occured. Use absolute timestamps when a user are looking for information that is requires a precise date and time.

### Time of day

Times are displayed using the 24-hour clock, and a leading 0 is used for single-digit hours. For example, we would display "13:00", not "01:00 PM".

#### Time Zones

Time zones should not be displayed because time is displayed in the user's local time. The exception to this rule is when we need to display a timestamp using the UTC time standard. When displaying a UTC timestamp, please follow the W3C formatting guidelines: [W3C Date and Time Formats](https://www.w3.org/TR/NOTE-datetime#:~:text=Times%20are%20expressed%20in%20UTC,mm%22%20minutes%20ahead%20of%20UTC.)

### Time Ranges

The values in a time range should be separated by an en dash with 1 space on either side. For example, "12:00 – 18:00" or "6 May – 10 May".

In the rare case a time range is being used in a sentence, the en dash should not be used. For example, "The cluster was active from 12:00 until 18:00".

When displaying a time range, there should be some indication for the duration of the time range. The context in which the time range is being display should inform how precise of a duration should be shown. For example, given the range "12:00:00 – 18:24:30", we could display the duration as "6 hours", "6 hours and 24 minutes", or "6 hours, 24 minutes and 30 seconds" depending on how much detail the user needs to know about the time range.

Remember the "Abbreviations" guidelines (second heading in this doc) when you're writing a duration - we avoid abbreviating time units. For example: a duration that appears in a narrow table column would be abbreviated like "6h 24m". If it's being used in a sentence, it would be "6 hours and 24 minutes."

Both timestamps in a time range should be formatted the same way. For example, "01 Jan 2020 – 02 Feb 2020" is correct, but "01 Jan 2020 14:00 – 02 February" is incorrect.

### Granularity

Depending on the context of the absolute timestamp, there are different levels of detail a time can be shown. If the year of a date is not important, and the date is within the current year, the year may be excluded from the timestamp. The examples below are using full month names and full weekday names, but the abbreviated names are also acceptable.

| Granularity         | Value (w/ year)               | Value (w/o year)         |
| ------------------- | ----------------------------- | ------------------------ |
| Date                | 01 January 2020               | 01 January               |
| Date and weekday    | Monday, 01 January 2020       | Monday, 01 January       |
| Date and time       | 01 January 2020 14:00         | 01 January 14:00         |
| Date, time, weekday | Monday, 01 January 2020 14:00 | Monday, 01 January 14:00 |

## Relative time

Relative times may be used when users just need to know the approximate time of an event. Relative time formatting can feel more conversational than using an absolute timestamp.

### Past

| When                    | Value                      |
| ----------------------- | -------------------------- |
| < 1 minute              | just now                   |
| > 1 minute, < 2 minutes | 1 minute ago               |
| < 1 hour                | {n} minutes ago            |
| > 1 hour, < 2 hours     | 1 hour ago                 |
| < 24 hours              | {n} hours ago              |
| > 24 hours, < 2 days    | 1 day ago                  |
| < 7 days                | {n} days ago               |
| > 7 days, < 8 days      | 1 week ago                 |
| < 1 month               | {n} weeks ago              |
| > 1 month, < 2 months   | 1 month ago                |
| < 6 months              | {n} months ago             |
| > 6 months              | Show an absolute timestamp |

### Future

| When                    | Value                      |
| ----------------------- | -------------------------- |
| < 1 minute              | in a few seconds           |
| > 1 minute, < 2 minutes | in 1 minute                |
| < 1 hour                | in {n} minutes             |
| > 1 hour, < 2 hours     | in 1 hour                  |
| < 24 hours              | in {n} hours               |
| > 24 hours, < 2 days    | in 1 day                   |
| < 7 days                | in {n} days                |
| > 7 days, < 8 days      | in 1 week                  |
| < 1 month               | in {n} weeks               |
| > 1 month, < 2 months   | 1 month ago                |
| < 6 months              | in {n} months              |
| > 6 months              | Show an absolute timestamp |

### Duration

A duration should be shown when a user needs to know how much time an event took.

Note: the two below tables are using abbreviated units, but the full unit name is also acceptable.

#### Granularity

##### Suggested level of granularty based on duration length

| Duration length | Granularity        | Example |
| --------------- | ------------------ | ------- |
| < 1 second      | to the millisecond | 420ms   |
| < 1 minute      | to the second      | 42ms    |
| < 1 hour        | to the minute      | 42m     |
| < 24 hours      | to the hour        | 4h      |
| < 1 month       | to the day         | 42d     |
| < 1 year        | to the month       | 4mo     |
| > 1 year        | to the year        | 4y      |

##### Duration formatting by time and level of granularity

The suggestions in the table above will address most use cases, but here are more detailed formats just incase

| Duration length | to the millisecond | to the second  | to the minute | to the hour | to the day      | to the month | to the year |
| --------------- | ------------------ | -------------- | ------------- | ----------- | --------------- | ------------ | ----------- |
| < 1 second      | {n}ms              | ←              | ←             | ←           | ←               | ←            | ←           |
| < 1 minute      | {n}ms              | {n}s           | ←             | ←           | ←               | ←            | ←           |
| < 1 hour        | {n.xyz}s           | {n}m {x}s      | {n}m          | ←           | ←               | ←            | ←           |
| < 6 hours       | {n.xyz}s           | {n}h {x}m {y}s | {n}h {n}m     | {n}h        | ←               | ←            | ←           |
| < 24 hours      | →                  | {n}h {x}m {y}s | {n}h {n}m     | {n}h        | ←               | ←            | ←           |
| < 7 days        | →                  | →              | →             | {n}d {n}h   | {n}d            | ←            | ←           |
| < 1 month       | →                  | →              | →             | →           | {n}d            | ←            | ←           |
| < 1 year        | →                  | →              | →             | →           | {n}mo {x}d      | {n}mo        | ←           |
| > 1 year        | →                  | →              | →             | →           | {n}y {x}mo {y}d | {n}y {x}mo   | {n}y        |

## Internationalization

These guidelines focus on US English. Strategies to support customers in other locales are to be determined.
