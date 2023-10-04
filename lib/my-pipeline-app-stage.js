const cdk = require('aws-cdk-lib');
const { MyLambdaStack } = require('./my-pipeline-lambda-stack');
const {S3Stack} = require('./s3-stack');

class MyPipelineAppStage extends cdk.Stage {

    constructor(scope, id, props) {
      super(scope, id, props);

      const lambdaStack = new MyLambdaStack(this, 'LambdaStack');
      const s3Stack = new S3Stack(this, 'mypipelines3bucket');
    }
}

module.exports = { MyPipelineAppStage };