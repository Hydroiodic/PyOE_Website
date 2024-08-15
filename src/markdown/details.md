# Detailed Functions of Our System

## Dataloader

We have provided a lot of datasets with regard to *Open Environment Challenges* for you to use as the same as in the paper [OEBench](https://arxiv.org/pdf/2308.15059v3). And some conclusions on these datasets have also been demonstrated on this website ([Clike Here](/datasets)).

You may choose any of the datasets for data loading and our library will download datasets from the internet automatically. If you want to change the *task* of a dataset or anything like that, you may directly change it in the folder ```dataset_experiment_info```.

## Model

We have provided a lot of built-in models to use for training. Below is a list of our model:

```MlpModel, TreeModel, GbdtModel, TabnetModel, ArmnetModel, CluStreamModel, DbStreamModel, DenStreamModel, StreamKMeansModel, XStreamDetectorModel, RShashDetectorModel, HSTreeDetectorModel, LodaDetectorModel, RrcfDetectorModel```

among which the first 5 models are used for *Regression and Classification*, the stream models are used for *Clustering* and the detector models are used for *Outlier Detection*.

To initialize a model, you should pass the ```dataloader``` and ```device``` as parameters to the model (Attention: some ```sklearn```-based model doesn't support the device ```cuda```). For example, if a mlp-model is needed, we could use:

```python
model = PyOE.MlpModel(dataloader=dataloader, device="cuda")
```

## Preprocessor

As is stated in the paper [OEBench](https://arxiv.org/pdf/2308.15059v3), the data we collected often contains a lot of NaN or NULL value when facing *Open Environment Challenges*. Therefore, to pre-process the data for training, we should choose a suitable method to fill those *missing values*. There're a few methods supported, including ```knn, regression, avg, zero```.

## Trainer

For this part, we have provided two algorithms for training the model (```NaiveTrainer``` and ```IcarlTrainer```). For common usage, you can pass the parameters to it directly and then call ```train``` method. Then the model will use the selected data to train the model.

