import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const { region, table_name } = process.env;

const client = new DynamoDBClient({ region });
const db = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
  const { short_url } = event;

  const getItem = new GetCommand({
    TableName: table_name,
    Key: {
      short_url,
    },
  });

  const response = await db.send(getItem);
  console.log(response);
  return response;
};
