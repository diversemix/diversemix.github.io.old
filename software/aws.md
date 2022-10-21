# AWS

## AWS and ECR

### Log into ECR from the command line

``
AWS_PROFILE=sandbox aws ecr get-login-password --region eu-west-1| docker login --username AWS --password-stdin <account>.dkr.ecr.<region>.amazonaws.com
```


