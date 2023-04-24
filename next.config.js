const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "admin",
        mongodb_password: "@N2#2x@Vg!D4@w6",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "admin",
      mongodb_password: "@N2#2x@Vg!D4@w6",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
