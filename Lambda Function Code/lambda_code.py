import json
import boto3
import uuid

# Create DynamoDB resource
dynamodb = boto3.resource('dynamodb')

# Change - the name of the DynamoDB table
table = dynamodb.Table('get-in-touch-table')

# Create an SNS Client
client_sns = boto3.client('sns')

# This function will be triggered by API Gateway
def lambda_handler(event, context):

    # Create a user ID
    id = str(uuid.uuid4())

    # Send Message to SNS
    handle_sns(id, event)
    
    # Store data to DynamoDB
    statusCode = handle_dynamo_db(id, event)

    return{
        'statusCode': statusCode,
    }

# Publish a message to SNS
def handle_sns(id, event):
    sns_message = """
        You got a new Message from https://rushidonga.github.io/cognito-auth/
        The message is as follows
        
        id      : {id}
        Name    : {userName}
        email   : {email}
        Message : {message}
        Subject : {subject}
        """.format(
            id=id,
            userName=event['name'], 
            email=event['email'],
            message=event['description'], 
            subject=event['subject'],
        )
        
    client_sns.publish(

        # Change - the ARN to the ARN of your SNS
        TopicArn='arn:aws:sns:ap-south-1:937726284102:Get-in-touch-SNS',
        Message= sns_message,
        Subject= event['subject']
    )


# Add an Item to DynamoDB Table
def handle_dynamo_db(id, event):
    response = table.put_item(
        Item={
            'id': id,
            'name': event['name'],
            'email': event['email'],
            'subject': event['subject'],
            'description': event['description'],
        }
    )

    return response['ResponseMetadata']['HTTPStatusCode']
    
