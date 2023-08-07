import morgan from "morgan";
import logger from "./Wiston.js";

/**
    combined | common | dev | short | tiny
    combined| :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
    dev| :method :url :status :response-time ms - :res[content-length]
 */
const format = () => {
  return process.env.NODE_ENV === "production" ? "combined" : "dev";
};

// 로그 작성을 위한 Output stream 옵션
const stream = {
  write: (message) => {
    logger.http(message.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, ""));
  },
};

// 로깅 스킵 여부 (운영 환경이면, 코드가 400 미만이라면 로그 기록하지않음)
const skip = (_, res) => {
  if (process.env.NODE_ENV === "production") return res.statusCode < 400;
  return false;
};

const morganMiddleware = morgan(format(), { stream, skip });

export default morganMiddleware;
