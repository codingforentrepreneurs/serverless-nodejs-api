# Serverless Framework IAM Policy

Use the IAM policy (JSON data) for the [Serverless Framework](https://www.serverless.com/) with the AWS Provider for deploying Node.js apps as serverless functions on AWS Lambda.

Replace `AWS_ID` with your AWS Account ID (e.g. `123456789`) which you can find under [AWS IAM](https://console.aws.amazon.com/iam/) in the console.

Use [this gist](https://gist.github.com/codingforentrepreneurs/03f6ddb7ba284e4f82a6c66b3103feda) for the most up-to-date version.


`serverless-framework-iam-policy.json`
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "cloudformation:List*",
                "cloudformation:Get*",
                "cloudformation:ValidateTemplate",
                "ssm:*"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "cloudformation:CreateStack",
                "cloudformation:CreateUploadBucket",
                "cloudformation:DeleteStack",
                "cloudformation:Describe*",
                "cloudformation:UpdateStack",
                "cloudformation:CreateChangeSet",
                "cloudformation:ListChangeSets",
                "cloudformation:DeleteChangeSet",
                "cloudformation:ExecuteChangeSet"
            ],
            "Resource": [
                "arn:aws:cloudformation:*:AWS_ID:stack/serverless-*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "lambda:Get*",
                "lambda:List*",
                "lambda:CreateFunction",
                "lambda:TagResource",
                "lambda:UntagResource"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetBucketLocation",
                "s3:CreateBucket",
                "s3:DeleteBucket",
                "s3:ListBucket",
                "s3:GetBucketPolicy",
                "s3:PutBucketPolicy",
                "s3:ListBucketVersions",
                "s3:PutAccelerateConfiguration",
                "s3:GetEncryptionConfiguration",
                "s3:PutEncryptionConfiguration",
                "s3:DeleteBucketPolicy",
                "s3:PutBucketTagging",
                "s3:UntagResource",
                "s3:TagResource",
                "s3:GetBucketTagging",
                "s3:ListTagsForResource"
            ],
            "Resource": [
                "arn:aws:s3:::serverless-*serverlessdeploy*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:DeleteObject"
            ],
            "Resource": [
                "arn:aws:s3:::serverless-*serverlessdeploy*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "lambda:AddPermission",
                "lambda:CreateAlias",
                "lambda:DeleteFunction",
                "lambda:InvokeFunction",
                "lambda:PublishVersion",
                "lambda:RemovePermission",
                "lambda:Update*"
            ],
            "Resource": [
                "arn:aws:lambda:*:AWS_ID:function:serverless-*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "cloudwatch:GetMetricStatistics"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Action": [
                "logs:CreateLogGroup",
                "logs:CreateLogStream",
                "logs:DeleteLogGroup",
                "logs:TagResource",
                "logs:UntagResource"
            ],
            "Resource": [
                "arn:aws:logs:*:AWS_ID:*"
            ],
            "Effect": "Allow"
        },
        {
            "Action": [
                "logs:PutLogEvents"
            ],
            "Resource": [
                "arn:aws:logs:*:AWS_ID:*"
            ],
            "Effect": "Allow"
        },
        {
            "Effect": "Allow",
            "Action": [
                "logs:DescribeLogStreams",
                "logs:DescribeLogGroups",
                "logs:FilterLogEvents"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "events:Put*",
                "events:Remove*",
                "events:Delete*"
            ],
            "Resource": [
                "arn:aws:events:*:AWS_ID:rule/serverless-*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "events:DescribeRule"
            ],
            "Resource": [
                "arn:aws:events:*:AWS_ID:rule/serverless-*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "iam:PassRole"
            ],
            "Resource": [
                "arn:aws:iam::AWS_ID:role/serverless-*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "iam:GetRole",
                "iam:CreateRole",
                "iam:TagRole",
                "iam:PutRolePolicy",
                "iam:DeleteRolePolicy",
                "iam:DeleteRole"
            ],
            "Resource": [
                "arn:aws:iam::AWS_ID:role/serverless-*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "apigateway:*"
            ],
            "Resource": [
                "arn:aws:apigateway:*::/apis*",
                "arn:aws:apigateway:*::/restapis*",
                "arn:aws:apigateway:*::/apikeys*",
                "arn:aws:apigateway:*::/tags*",
                "arn:aws:apigateway:*::/usageplans*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "tag:*"
            ],
            "Resource": [
                "*"
            ]
        }
    ]
}
```
