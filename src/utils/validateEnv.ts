export const validateEnv = () => {
  if (!process.env.TOKEN) {
    console.warn("Missing Discord bot token.");
    return false;
  }
  return true;
};
