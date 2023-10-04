const cdk = require('aws-cdk-lib');
const { CodePipeline, CodePipelineSource, ShellStep, ManualApprovalStep } = require('aws-cdk-lib/pipelines');
const { MyPipelineAppStage } = require('./my-pipeline-app-stage');

 class MyPipelineStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'MyPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('ike1112/my-pipeline', 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })
    });

    const testingStage = pipeline.addStage(new MyPipelineAppStage(this, "test", {
      env: { account: "083340857999", region: "us-east-1" }
    }));
    testingStage.addPost(new ManualApprovalStep('approval'));
  }
}

module.exports = { MyPipelineStack }