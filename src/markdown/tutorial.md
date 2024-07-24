# PyOE

PyOE behaves as an extension of OEBench, which mainly investigates the open environment challenges around us.

This post is meant to assist you to use PyOE with ease.

## The Basic Steps of Using PyOE

The steps to use PyOE system are mainly deivided into three, as was stated in the OEBench paper. Firstly, you could use DataLoader to load our pre-prepared data or you own data from the internet. After that, you should choose what algorithm and metrics are to be used. Then, our library will begin to pre-process the loaded data. Finally, the model will generate statistics for your later analysis.

## Ahh... Actually the System has not been Done Yet

Here is a simple example of the usage.

```python
# add import path from the current directory
import sys
sys.path.append("PyOE")
sys.path.append("PyOE/OEBench")

# import PyOE
import PyOE

# load data, choose model and trainer
dataloader = PyOE.Dataloader(dataset_name='dataset_experiment_info/room_occupancy')
basic_model = PyOE.BasicModel(dataloader=dataloader, model_type="mlp")
trainer = PyOE.BasicTrainer(dataloader=dataloader, basic_model=basic_model, algorithm="naive")

# pre-process begins here
preprocessor = Preprocessor(missing_fill="knn2")

# net = basic_model.get_net()
# net_ensemble = basic_model.get_net_ensemble()
warm_up_samples = 100

# training begins here
while (not dataloader.reach_end()):
    need_test = (dataloader.current_index >= warm_up_samples)
    X, y, y_outlier = dataloader.get_next_sample(return_outlier_label=True)
    X = preprocessor.fill(X)
    trainer.train(X, y, y_outlier, need_test=need_test)
```

