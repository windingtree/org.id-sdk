# org.id-tools

## Maintenance

To make a release of the package:

```bash
curl \
  -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/windingtree/org.id-tools/dispatches \
  -d '{"event_type":"release_to_npm", "client_payload": {"packageName": "<PACKAGE_NAME_TO_RELEASE>"}}'
```