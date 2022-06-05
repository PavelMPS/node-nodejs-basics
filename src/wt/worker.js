import { workerData, parentPort } from "worker_threads";

export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
  const result = nthFibonacci(workerData);
  const sendToParent = {
    status: "error",
    data: null,
  };
  if (result) {
    sendToParent.status = "resolved";
    sendToParent.data = result;
  }
  parentPort.postMessage(sendToParent);
};

sendResult();
