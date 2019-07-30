# aws-lambda-sqs-example
Aws Lambda sqs test

## Prerequisite
1. npm or nvm

2. You can run this command to use `serverless` command.

```bash
npm install -g serverless
```

## How to crate projects for node.js & typescript
1. You can run this command tp create the aws lambda template.

```bash
serverless create --template aws-nodejs-typescript && npm install
```

2. You can run following commands to run the functions in your local.

```bash
npm install serverless-offline --save
```

```bash
npm install serverless-offline-sqs --save
```


## How to use aws-sdk

`aws-sdk` is for using Amazon SQS. You can install the `aws-sdk` library to use it.

```bash
npm i aws-sdk —-save
```

## How to run
1. You can run this command

```bash
serverless offline start
```

If you have any message from Amazon SQS, it will automatically grab messages. After using it successfully, it will delete the messages from Amazon SQS. When the function uses the SQS messages, the messages will put in `Messages in flight`. When it fail, it will put the messages at `Message Available.`


2. Offline SQS(ElasticMQ) is available. If you want to run the offline SQS in docker-compose, you can run this command. 

```bash
cd docker
docker-compose up --build -d
``` 

After creating your own offline sqs, you can create the queue like this.

```bash
aws sqs --endpoint-url http://localhost:9324 send-message --queue-url http://localhost:9324/queue/MyFirstQueue --message-body "MyFirstMessage"
aws sqs --endpoint-url http://localhost:9324 send-message --queue-url http://localhost:9324/queue/MySecondQueue --message-body "MySecondMessage"
aws sqs --endpoint-url http://localhost:9324 send-message --queue-url http://localhost:9324/queue/MyThirdQueue --message-body "MyThirdMessage"
aws sqs --endpoint-url http://localhost:9324 send-message --queue-url http://localhost:9324/queue/MyFourthQueue --message-body "MyFourthMessage"
```

(Ref : https://github.com/flocasts/serverless-offline-sqs.git)

3. When you create your own messages, the lambda function grab the messages.