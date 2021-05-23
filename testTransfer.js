(async function() {
    const { LambdaClient, InvokeCommand } = require("@aws-sdk/client-lambda");
    const lambdaClient = new LambdaClient({ region: "us-west-2" });
    // create JSON object for service call parameters
    const params = {
      FunctionName : "slotPull",
      InvocationType : "RequestResponse",
      LogType : "None"
    };
  
    // create InvokeCommand command
    const command = new InvokeCommand(params);
  
    // invoke Lambda function
    try {
      const response = await lambdaClient.send(command);
      console.log(response);
    } catch (err) {
      console.err(err);
    }
  })();