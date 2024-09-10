
# Description of Financial Datasets

All the financial datasets used in our PyOE system come from [Alpha Vantage Stock Data](https://www.alphavantage.co/documentation/). Due to the large number of datasets, we have not listed and analyzed each dataset individually. However, we would like to highlight some characteristics of the datasets:

1. The columns in the datasets include:
    - ```date```
    - ```1. open```
    - ```2. high```
    - ```3. low```
    - ```4. close```
    - ```5. adjusted close```
    - ```6. volume```
    - ```7. dividend amount```
    - ```8. split coefficient```
2. There is no ```NaN``` data in the datasets;
3. The time intervals between data points are set to 1 day, but data may not be available for every single day. Therefore, during data processing with PyOE, we use the ```pandas``` library to fill in missing days with ```NaN``` values.
