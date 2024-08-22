# PyOE

PyOE behaves as an extension of OEBench, which mainly investigates the open environment challenges around us.

This post is meant to assist you to use PyOE with ease.

## The Basic Steps of Using PyOE

The steps to use PyOE system are mainly deivided into three, as was stated in the OEBench paper. Firstly, you could use DataLoader to load our pre-prepared data or you own data from the internet. After that, you should choose what algorithm and metrics are to be used. Then, our library will begin to pre-process the loaded data. Finally, the model will be trained well for your later researching.

## A Simple Example of Using Our System

Below is a simple example of the usage.

```python
# import the library PyOE
import pyoe

# choose the targeted dataset, model, preprocessor and trainer
dataloader = pyoe.Dataloader(dataset_name="dataset_experiment_info/beijingPM2.5")
model = pyoe.MlpModel(dataloader=dataloader, device="cuda")
preprocessor = pyoe.Preprocessor(missing_fill="knn2")
trainer = pyoe.NaiveTrainer(dataloader=dataloader, model=model, preprocessor=preprocessor, epochs=16)

# train the model and then evaluate it by printing its average loss on the dataset
trainer.train()
print(f"Average MSELoss: {pyoe.metrics.EffectivenessMetric(dataloader, model).measure()}")
```
