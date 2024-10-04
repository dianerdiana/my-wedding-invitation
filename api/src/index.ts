import { createServer } from "./server";
import logger from "./libs/logger";

const port = process.env.PORT || 3001;
const server = createServer();

server.listen(port, () => {
  logger.info(`API running on port ${port}`);
});
