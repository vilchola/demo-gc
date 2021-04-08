import { APIGatewayProxyResult } from 'aws-lambda';
import { hello } from '../src/handler';

describe('hello', () => {
  it('testing lambda: hello', async () => {
    expect.hasAssertions();
    const response = (await hello()) as APIGatewayProxyResult;
    expect(response.statusCode).toBe(200);
  });
});
