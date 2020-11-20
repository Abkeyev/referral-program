import { server } from "./axios";

const webConfigEnv = (window as any).env;

export class CamundaController {
  async start(variables: any): Promise<any> {
    return server.post(
      `/process/start`,
      {
        processDefinitionKey: "deferral",
        variables,
      },
      {
        baseURL: webConfigEnv.GREEN_API,
        header: {
          maxContentLength: 100000000,
          maxBodyLength: 1000000000,
        },
      }
    );
  }
  async callback(variables: any): Promise<any> {
    return server.post(
      `/process/start`,
      {
        processDefinitionKey: "deferral",
        variables,
      },
      {
        baseURL: webConfigEnv.GREEN_API,
      }
    );
  }
}
