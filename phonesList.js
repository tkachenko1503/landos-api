import * as dynamoDbLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib';

export async function main(event, context, callback) {
  const params = {
    TableName: 'phonesBack',
  };

  try {
    const result = await dynamoDbLib.call('scan', params);
    callback(null, success(result.Items));
  }
  catch(error) {
    callback(null, failure({status: false}));
  }
};