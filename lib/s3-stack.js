const cdk = require('aws-cdk-lib');
const {s3} = require('aws-cdk-lib/aws-s3');

class S3Stack extends cdk.Stack {
    constructor(scope, id, props) {
      super(scope, id, props);

      const balanceS3 = new s3.Bucket(this, "mypipelines3bucket", {
        bucketName: 'mypipelines3bucket001',
        blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
        versioned: true,
        removalPolicy: RemovalPolicy.RETAIN
      })
    }
}

module.exports = { S3Stack }