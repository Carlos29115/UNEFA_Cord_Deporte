import { request } from "lib/request";

export function estudiantesPost({ payload, authRequire }: any) {
  console.log("payload", payload);
  return request("/URL_POST", {
    method: "post",
    authRequire,
    data: payload,
  });
}
