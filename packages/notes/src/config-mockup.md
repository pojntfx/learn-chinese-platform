# Learn Chinese Platform Config Mockup

```plaintext
learn-chinese-platform/
    platform.json
    packages/
        frontend/
            frontend.json
            service.json
        site/
            frontend.json
            service.json
        gateway/
            service.json
        services/
            service.json

mergePlatformConfigWithServiceConfig(
    platform.json,
    frontend.json
)
```
