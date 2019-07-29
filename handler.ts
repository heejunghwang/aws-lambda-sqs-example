import {Context, Handler} from 'aws-lambda';
import 'source-map-support/register';

export const receiveMessage: Handler = async (event: any, context: Context) => {
  try {
    console.log(event)
    console.log(context)
    return "success"
  } catch(e) {
    const error = "event : " + JSON.stringify(event) + "\n\ncontext : " + JSON.stringify(context);
    console.log(error);
    throw e;
  }
}

