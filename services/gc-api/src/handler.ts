import { APIGatewayProxyResult } from 'aws-lambda';

export async function hello(): Promise<APIGatewayProxyResult> {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello world' }, null, 2),
  };

  return new Promise((resolve) => {
    resolve(response)
  });
}
