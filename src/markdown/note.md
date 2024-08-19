# Note

Our PyOE system has some additional features, which will be introduced in this section.

## Logging

In our PyOE system, logging is handled using ```logging``` library. Most logs are at the INFO level, and if you want to see these logs, use the following code to enable INFO level logging:

```python
import logging

# INFO level logging for more detailed output
logger = logging.getLogger()
logger.setLevel(logging.INFO)
```

You can also use other configurations of the ```logging``` library to export the output to a file.

## Distributed Training

Our system preliminary supports distributed cluster training. Here is an example:

```python
import os
import PyOE

def set_env_vars():
    # Set environment variables for distributed training
    os.environ["MASTER_ADDR"] = "localhost"
    os.environ["MASTER_PORT"] = "12345"
    os.environ["WORLD_SIZE"] = str(world_size)

# if using multi-process for training, all codes with regard to training should
# be put in the `if __name__ == "__main__":` block
if __name__ == "__main__":
    # using pre-prepared dataset and load them into a dataloader
    dataloader = PyOE.Dataloader(dataset_name="dataset_experiment_info/beijingPM2.5")

    # initialize the model, trainer and preprocessor
    model = PyOE.MlpModel(dataloader=dataloader, device="cuda")
    preprocessor = PyOE.Preprocessor(missing_fill="knn2")
    trainer = PyOE.NaiveTrainer(dataloader=dataloader, model=model, preprocessor=preprocessor, epochs=16)

    # train the model using multiple processes
    world_size = 4
    set_env_vars()
    PyOE.MultiProcessTrainer(world_size, dataloader, trainer, preprocessor).train()

    # using an effective metric to evaluate the model
    print(f"Average MSELoss: {PyOE.metrics.EffectivenessMetric(dataloader, model).measure()}")
```

The above code will start ```world_size``` number of processes, which accumulate gradients through inter-process communication to train the model jointly. This approach can make better use of computational resources and improve training efficiency.
