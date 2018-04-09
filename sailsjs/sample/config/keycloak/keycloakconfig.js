
module.exports = {
  "realm": process.env.KC_REALM || "TestLocal",
  "auth-server-url":process.env.KC_AUTH_SERVER_URL || "http://keycloak.test.team/auth",
  "ssl-required": process.env.KC_SSL_REQUIRED || "external",
  "resource": process.env.KC_RESOURCE || "lms-service",
  "credentials": {
    "secret": process.env.KC_SECRET || "4513135-d18a-422e-935c-3bcf8c916f88"
  },
  "use-resource-role-mappings": process.env.KC_USE_RESOURCE_ROLE_MAPPINGS || true,
  "confidential-port": process.env.KC_CONFIDENTIAL_PORT || 0,
  "policy-enforcer": {}
}